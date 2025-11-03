package handling.netty;

import client.MapleClient;
import configs.Config;
import configs.OpcodeConfig;
import constants.ServerConstants;
import handling.ServerType;
import handling.login.handler.LoginPasswordHandler;
import handling.opcode.RecvPacketOpcode;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ByteToMessageDecoder;
import io.netty.util.AttributeKey;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import tools.HexTool;
import tools.MapleAESOFB;
import tools.StringUtil;
import tools.data.ByteArrayByteStream;
import tools.data.MaplePacketReader;

import java.util.List;

import static handling.MapleServerHandler.*;

public class MaplePacketDecoder extends ByteToMessageDecoder {
    public static final AttributeKey<DecoderState> DECODER_STATE_KEY = AttributeKey.newInstance("MaplePacketDecoder");
    /**
     * Logger for this class.
     */
    private static final Logger log = LogManager.getLogger("DebugWindows");
    private final ServerType type;

    public MaplePacketDecoder(ServerType type) {
        this.type = type;
    }

    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> message) throws Exception {
        final MapleClient client = ctx.channel().attr(MapleClient.CLIENT_KEY).get();
        DecoderState decoderState = ctx.channel().attr(DECODER_STATE_KEY).get();
        if (decoderState == null) {
            decoderState = new DecoderState();
            ctx.channel().attr(DECODER_STATE_KEY).set(decoderState);
        }

        boolean crypt = false;
        if (in.readableBytes() >= 4 && decoderState.packetlength == -1) {
            int packetHeader = in.readInt();
            if (decoderState.tempPacket != 0) {
                decoderState.packetlength = MapleAESOFB.getLongPacketLength(decoderState.tempPacket, packetHeader);
                decoderState.tempPacket = 0;
            } else {
                int packetid = (packetHeader >> 16) & 0xFFFF;
                if (type == ServerType.LoginServer && !client.isLoggedIn() && packetid == 0x6969) {
                    int packetlength = ((packetHeader & 0xFF) << 8) + (packetHeader >> 8 & 0xFF); // packetHeader & 0xFF
                    byte[] packet = new byte[packetlength];
                    in.readBytes(packet);
                    MaplePacketReader slea = new MaplePacketReader(new ByteArrayByteStream(packet));
                    LoginPasswordHandler.handlePacket(slea, client);
                    return;
                }
                if (packetHeader == 0xFFFF0000) {
                    crypt = true;
                }
                if (!client.getReceiveCrypto().checkPacket(packetHeader)) {
                    ctx.channel().disconnect();
                    return;
                }
                if (crypt) {
                    decoderState.packetlength = in.readableBytes();
                } else {
                    int len = MapleAESOFB.getPacketLength(packetHeader);
                    if (len == 0xFF00) {
                        decoderState.tempPacket = packetHeader;
                    } else {
                        decoderState.packetlength = len;
                    }
                }
            }
        } else if (in.readableBytes() < 4 && decoderState.packetlength == -1) {
            return;
        }
        if (in.readableBytes() >= decoderState.packetlength) {
            byte decryptedPacket[] = new byte[decoderState.packetlength];
            in.readBytes(decryptedPacket);
            decoderState.packetlength = -1;
            if (!crypt) {
                client.getReceiveCrypto().crypt(decryptedPacket);
            } else if (readFirstShort(decryptedPacket) != RecvPacketOpcode.CP_CheckLoginAuthInfo.getValue()) {
                return;
            }
            client.decryptOpcode(decryptedPacket);
            message.add(decryptedPacket);
            if (Config.isDevelop() || ServerConstants.isLogPacket()) {
                int packetLen = decryptedPacket.length;
                short pHeader = readFirstShort(decryptedPacket);
                String pHeaderStr = Integer.toHexString(pHeader).toUpperCase();
                pHeaderStr = pHeader + "(0x" + StringUtil.getLeftPaddedStr(pHeaderStr, '0', 4) + ")";
                RecvPacketOpcode op = RecvPacketOpcode.getByValue(pHeader);
                if (op == null) {
                    op = RecvPacketOpcode.UNKNOWN;
                }
                String tab = "";
                for (int i = 4; i > op.name().length() / 8; i--) {
                    tab += "\t";
                }
                StringBuilder recvString = new StringBuilder();
                String t = packetLen >= 10 ? packetLen >= 100 ? packetLen >= 1000 ? "" : " " : "  " : "   ";
                recvString.append("\r\n").append("[CP收到]\t").append(op.name()).append(tab).append("\t包頭:").append(pHeaderStr).append(t).append("[").append(packetLen).append("字元]");
                if (client.getPlayer() != null) {
                    recvString.append("角色名:").append(client.getPlayer().getName());
                }
                recvString.append("\r\n");
                recvString.append(HexTool.toString(decryptedPacket)).append("\r\n");
                recvString.append(HexTool.toStringFromAscii(decryptedPacket));

                if (ServerConstants.isLogPacket()) {
                    AllPacketLog.info(recvString);
                }
                if (Config.isDevelop() && !OpcodeConfig.isblock(op.name(), false)) {
                    log.trace(recvString);
                }
            }
        }
    }

    private short readFirstShort(byte[] arr) {
        return new MaplePacketReader(new ByteArrayByteStream(arr)).readShort();
    }

    private static class DecoderState {
        int packetlength = -1;
        int tempPacket = 0;
    }
}