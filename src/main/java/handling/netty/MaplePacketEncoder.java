package handling.netty;

import client.MapleClient;
import configs.Config;
import configs.OpcodeConfig;
import configs.ServerConfig;
import constants.ServerConstants;
import handling.ServerType;
import handling.opcode.SendPacketOpcode;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import tools.HexTool;
import tools.MapleAESOFB;
import tools.StringUtil;
import tools.data.ByteArrayByteStream;
import tools.data.MaplePacketReader;

import java.util.concurrent.locks.Lock;

import static handling.MapleServerHandler.AllPacketLog;

public class MaplePacketEncoder extends MessageToByteEncoder<Object> {

    private static final Logger log = LogManager.getLogger("DebugWindows");
    private final ServerType type;

    public MaplePacketEncoder(ServerType type) {
        this.type = type;
    }

    @Override
    protected void encode(ChannelHandlerContext ctx, Object message, ByteBuf buffer) throws Exception {
        final MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();

        if (client != null) {
            MapleAESOFB send_crypto = client.getSendCrypto();
            byte[] input = ((byte[]) message);

            if (Config.isDevelop() || ServerConstants.isLogPacket()) {
                int packetLen = input.length;
                int pHeader = readFirstShort(input);
                String pHeaderStr = Integer.toHexString(pHeader).toUpperCase();
                pHeaderStr = pHeader + "(0x" + StringUtil.getLeftPaddedStr(pHeaderStr, '0', 4) + ")";
                SendPacketOpcode op = SendPacketOpcode.getByValue(pHeader);
                String tab = "";
                for (int i = 4; i > op.name().length() / 8; i--) {
                    tab += "\t";
                }
                StringBuilder RecvTo = new StringBuilder();
                String t = packetLen >= 10 ? packetLen >= 100 ? packetLen >= 1000 ? "" : " " : "  " : "   ";
                RecvTo.append("\r\n[LP發出]\t").append(op.name()).append(tab).append("\t包頭:").append(pHeaderStr).append(t).append("[").append(packetLen).append("字元]");
                if (client.getPlayer() != null) {
                    RecvTo.append("角色名:").append(client.getPlayer().getName());
                }
                RecvTo.append("\r\n");
                RecvTo.append(HexTool.toString(input)).append("\r\n").append(HexTool.toStringFromAscii(input));

                if (ServerConstants.isLogPacket()) {
                    AllPacketLog.info(RecvTo.toString());
                }
                if (Config.isDevelop() && !OpcodeConfig.isblock(op.name(), true)) {
                    log.trace(RecvTo.toString());
                }
            }
            byte[] unencrypted = new byte[input.length];
            System.arraycopy(input, 0, unencrypted, 0, input.length); // Copy the input > "unencrypted"
//            byte[] ret = new byte[unencrypted.length + 4]; // Create new bytes with length = "unencrypted" + 4
            Lock mutex = client.getLock();
            mutex.lock();
            try {
                byte[] header = send_crypto.getPacketHeader(unencrypted.length);
                if (header.length > 4) {
                    log.info("超長封包，長度：" + unencrypted.length + ", header:" + header + "(" + HexTool.toString(header) + ") 角色名：" + client.getPlayer().getName());
                }
                if (type == ServerType.LoginServer) {
                    send_crypto.crypt(unencrypted); //AES Crypt
                } else {
                    send_crypto.crypt(unencrypted, ServerConstants.MapleMajor > 198); // Crypt2
                }
//                System.arraycopy(header, 0, ret, 0, 4); // Copy the header > "Ret", first 4 bytes
//                System.arraycopy(unencrypted, 0, ret, 4, unencrypted.length); // Copy the unencrypted > "ret"
                int encryptCode = getEncryptCode(client.getSessionIPAddress());
                if (encryptCode != 0) {
                    for (int i = 0; i < header.length; i++) {
                        header[i] ^= encryptCode;
                    }
                    for (int i = 0; i < unencrypted.length; i++) {
                        unencrypted[i] ^= encryptCode;
                    }
                }
                buffer.writeBytes(header);
                buffer.writeBytes(unencrypted);
            } finally {
                mutex.unlock();
            }
        } else { // no client object created yet, send unencrypted (hello) 這裡是發送gethello 封包 無需加密
            byte[] bytes = (byte[]) message;
            int encryptCode = getEncryptCode(ctx.channel().remoteAddress().toString().split(":")[0].replace("/", ""));
            if (encryptCode != 0) {
                for (int i = 0; i < bytes.length; i++) {
                    bytes[i] ^= encryptCode;
                }
            }
            buffer.writeBytes(bytes);
        }
    }

    private static int getEncryptCode(String ip) {
        int encryptCode = Integer.decode(System.getProperty("packetEncryptCode", "0"));
        if (encryptCode != 0) {
            for (String host : ServerConfig.noEncryptHost_List) {
                if (ip.equalsIgnoreCase(ServerConstants.getHostAddress(host))) {
                    return 0;
                }
            }
        }
        return encryptCode;
    }

    private int readFirstShort(byte[] arr) {
        return new MaplePacketReader(new ByteArrayByteStream(arr)).readShort();
    }
}
