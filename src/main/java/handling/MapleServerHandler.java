package handling;

import client.MapleClient;
import configs.Config;
import configs.ServerConfig;
import constants.ServerConstants;
import handling.cashshop.CashShopServer;
import handling.channel.ChannelServer;
import handling.chat.ChatServer;
import handling.login.LoginServer;
import handling.netty.MaplePacketDecoder;
import handling.opcode.RecvPacketOpcode;
import handling.world.World;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.util.concurrent.GlobalEventExecutor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import packet.LoginPacket;
import server.ShutdownServer;
import tools.MapleAESOFB;
import tools.Pair;
import tools.Randomizer;
import tools.data.ByteArrayByteStream;
import tools.data.MaplePacketReader;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public final class MapleServerHandler extends ChannelInboundHandlerAdapter {

    public static final Map<String, Long> blockIPList = new HashMap<>();
    public static final Logger AllPacketLog = LogManager.getLogger("AllPackets");
    public static final Logger BuffPacketLog = LogManager.getLogger("BuffPackets");
    public static final ChannelGroup CHANNEL_GROUP = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
    public static final boolean preventIpAttack = true;
    private static final Logger log = LogManager.getLogger(MapleServerHandler.class);
    private static final Logger handlerLog = LogManager.getLogger("HandlePacket");
    private static final Map<String, Pair<Long, Byte>> tracker = new ConcurrentHashMap<>();
    private static final Logger ExceptionLog = LogManager.getLogger("Exceptions");
    private static final Set<Short> UNKNOWN_PACKET = new HashSet<>();
    private static final Map<ServerType, MaplePacketHandler[]> handlers = new LinkedHashMap<>();
    private static long lastTrackerClearTime = 0;
    private int world, channel;
    private ServerType type;

    public MapleServerHandler(int world, int channel, ServerType type) {
        this.world = world;
        this.channel = channel;
        this.type = type;
    }

    public static void reloadHandlers() {
        handlers.clear();
    }

    public static void initHandlers() {
        for (ServerType t : ServerType.values()) {
            if (!handlers.containsKey(t)) {
                handlers.put(t, PacketProcessor.getProcessor(t));
            }
        }
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        if (ShutdownServer.getInstance().isShutdown()) {
            ctx.channel().close();
            return;
        }
        // 開始檢測IP
        String address = ctx.channel().remoteAddress().toString().split(":")[0];
        if (blockIPList.containsKey(address)) { //是否在禁止的IP列表
            if (blockIPList.get(address) <= System.currentTimeMillis()) {
                ctx.channel().close();
                return;
            } else {
                blockIPList.remove(address);
            }
        }
        if (type == ServerType.LoginServer) {
            if (!address.equals("/127.0.0.1")) { // 過濾本地IP  && (type == ServerType.登錄伺服器 || type == ServerType.聊天伺服器 || type == ServerType.頻道伺服器)
                checkLastTrackerClear();
                Pair<Long, Byte> track = tracker.get(address);
                byte count;
                if (track == null) {
                    count = 1;
                } else {
                    count = track.right;
                    long difference = System.currentTimeMillis() - track.left;
                    if (difference < 10000) { //同一個IP地址連接時間檢測 當前為10秒
                        count++;
                    }
                    if (preventIpAttack && count > 5) { // 單個IP的連接上限 達到多少次就禁止連接10分鐘
                        blockIPList.put(address, System.currentTimeMillis() + 10 * 60 * 1000);
                        tracker.remove(address); // Cleanup
                        ctx.channel().close();
                        return;
                    }
                }
                tracker.put(address, new Pair<>(System.currentTimeMillis(), count));
            }
        }
        // 結束IP檢測
        if (channel > -1) {
            if (ChannelServer.getInstance(channel).isShutdown()) { //如果頻道是關閉的就斷開連接
                ctx.channel().close();
                return;
            }
        } else if (type == ServerType.CashShopServer) {
            if (CashShopServer.isShutdown()) {
                ctx.channel().close();
                return;
            }
        } else if (type == ServerType.LoginServer) {
            if (LoginServer.isShutdown()) {
                ctx.channel().close();
                return;
            }
        } else if (type == ServerType.ChatServer) {
            if (ChatServer.isShutdown()) {
                ctx.channel().close();
                return;
            }
        }

        byte[] ivRecv = {70, 114, 122, 82};
        byte[] ivSend = {82, 48, 120, 115};
        ivRecv[3] = (byte) (Math.random() * 255);
        ivSend[3] = (byte) (Math.random() * 255);
        MapleAESOFB sendCypher = new MapleAESOFB(ivSend, ServerConstants.MapleMajor, true);
        MapleAESOFB recvCypher = new MapleAESOFB(ivRecv, ServerConstants.MapleMajor, false);
        MapleClient client = new MapleClient(sendCypher, recvCypher, ctx.channel());
        client.setSessionId(Randomizer.nextLong());
        client.setChannel(channel);
        client.setWorld(world);

        int encryptCode = Integer.decode(System.getProperty("ivEncryptCode", "0"));
        if (encryptCode != 0) {
            for (String host : ServerConfig.noEncryptHost_List) {
                if (address.replace("/", "").equalsIgnoreCase(ServerConstants.getHostAddress(host))) {
                    encryptCode = 0;
                }
            }
        }
        byte[] fakeIVRecv = new byte[ivRecv.length];
        System.arraycopy(ivRecv, 0, fakeIVRecv, 0, ivRecv.length);
        byte[] fakeIVSend = new byte[ivSend.length];
        System.arraycopy(ivSend, 0, fakeIVSend, 0, ivSend.length);
        if (encryptCode != 0) {
            for (int i = 0; i < fakeIVRecv.length; i++) {
                fakeIVRecv[i] ^= encryptCode;
            }
            for (int i = 0; i < fakeIVSend.length; i++) {
                fakeIVSend[i] ^= encryptCode;
            }
        }
        ctx.channel().writeAndFlush(LoginPacket.getHello(ServerConstants.MapleMajor, fakeIVSend, fakeIVRecv, type));

        if (channel > -1) {
            client.setSessionIdx(ChannelServer.getInstance(channel).getSessionIdx());
        } else {
            client.setSessionIdx(0);
        }

        ctx.channel().attr(MapleClient.CLIENT_KEY).set(client);

        StringBuilder sb = new StringBuilder();
        if (channel > -1) {
            sb.append("[Channel Server] Channel ").append(channel).append(" : ");
        } else if (type == ServerType.CashShopServer) {
            sb.append("[Cash Server] ");
        } else if (type == ServerType.ChatServer) {
            sb.append("[Chat Server]");
        } else {
            sb.append("[Login Server] ");
        }
        World.Client.addClient(client);

        sb.append("IoSession opened ").append(ctx.channel().remoteAddress());
        System.out.println(sb.toString());
        client.startPingSchedule();

        if (ServerConstants.MapleMajor >= 215) {
            final String key;
            if (ServerConstants.MapleMajor <= 231) {
                key = "M@PleStoryMaPLe!";
            } else {
                //aVbTpJ5=ZjG&Db3$ CMS 178密鑰
                key = "BrN=r54jQp2@yP6G";
            }
            client.announce(client.getEncryptOpcodesData(key));
        }
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();
        try {
            if (client != null) {
                client.disconnect(true, ServerType.CashShopServer.equals(type));
                World.Client.removeClient(client);
            }
        } catch (Throwable t) {
            log.error("連接異常關閉", t);
        } finally {
            ctx.channel().attr(MapleClient.CLIENT_KEY).set(null);
            ctx.channel().attr(MaplePacketDecoder.DECODER_STATE_KEY).set(null);
            ctx.channel().close();
        }
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        MaplePacketReader slea = new MaplePacketReader(new ByteArrayByteStream((byte[]) msg));
        if (slea.available() < 2) {
            return;
        }
        MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();

        handlePacket(slea, client, type);
    }

    private static final List<RecvPacketOpcode> alreadyLoggedOpcode = new LinkedList<>();

    public static void handlePacket(MaplePacketReader slea, MapleClient client, ServerType type) {
        if (client == null || !client.isReceiving()) {
            return;
        }
        short packetId = slea.readShort();

        if (!handlers.containsKey(type)) {
            initHandlers();
        }
        MaplePacketHandler handler = getHandler(packetId, type);
        if (handler != null) {
            try {
                handler.handlePacket(slea, client, client.getChannelServer());
            } catch (Exception e) {
                RecvPacketOpcode op = lookupRecv(packetId);
                if (!Config.isDevelop() && op != RecvPacketOpcode.UNKNOWN) {
                    if (alreadyLoggedOpcode.contains(op)) {
                        return;
                    }
                    alreadyLoggedOpcode.add(op);
                }
                handlerLog.error("封包: " + op.name() + "\r\n" + slea.toString(true), e);
            }
        } else if (!UNKNOWN_PACKET.contains(packetId)) {
            UNKNOWN_PACKET.add(packetId);
            RecvPacketOpcode opcode = RecvPacketOpcode.getByValue(packetId);
            if (opcode == null) {
                log.warn(String.format("Unknown Packet: %d(0x%s) \n{}", packetId, Integer.toHexString(packetId)), slea);
            } else {
                log.warn(String.format("[%s] Unhandled Packet: %s(%d)", type, opcode.name(), packetId));
            }
        }
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
//        MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();
//        if (client != null && client.isLoggedIn()) {
//            if (Config.isDevelop())
//                System.out.println("userEventTriggered:" + client.getAccountName());
//            ctx.channel().close();
//        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        if (cause.getMessage().contains("遠程主機強迫關閉了一個現有的連接")) {
            ctx.channel().close();
            return;
        }
        if (Config.isDevelop()) {
            MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();
            if (client != null) {
                if (client.getPlayer() != null) {
                    ExceptionLog.error("賬號：" + client.getAccountName() + " 角色：" + client.getPlayer().getName() + " 地圖：" + client.getPlayer().getMapId(), cause);
                } else {
                    ExceptionLog.error("賬號：" + client.getAccountName(), cause);
                }
            }
        }
        if (cause instanceof IOException || cause instanceof ClassCastException) {
            ctx.channel().close();
            return;
        }
        MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();
        if (client != null) {
            if (client.getPlayer() != null) {
                client.getPlayer().saveToDB(true, type == ServerType.CashShopServer);
                log.error("發現異常，角色：" + client.getPlayer().getName() + " 地圖：" + client.getPlayer().getMapId(), cause);
            } else {
                log.error("發現異常，賬號：" + client.getAccountName(), cause);
            }
        }
        ctx.channel().close();
    }

    private void checkLastTrackerClear() {
        if (System.currentTimeMillis() - lastTrackerClearTime >= 60 * 60 * 1000) {
            lastTrackerClearTime = System.currentTimeMillis();
            tracker.clear();
        }
    }

    private static RecvPacketOpcode lookupRecv(short header) {
        RecvPacketOpcode recv = RecvPacketOpcode.getByValue(header);
        return recv == null ? RecvPacketOpcode.UNKNOWN : recv;
    }

    private static MaplePacketHandler getHandler(int n, ServerType type) {
        if (n < 0 || !handlers.containsKey(type) || handlers.get(type) == null || n >= handlers.get(type).length) {
            return null;
        }
        return handlers.get(type)[n];
    }
}
