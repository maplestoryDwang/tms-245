/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package packet;

import handling.opcode.SendPacketOpcode;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import tools.DateUtil;
import tools.data.MaplePacketLittleEndianWriter;

public class ChatPacket {

    private static final Logger log = LogManager.getLogger(ChatPacket.class);

    public static byte[] getChatLoginAUTH() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.LP_WorldInformation.getValue());
        mplew.write(0);

        return mplew.getPacket();
    }

    public static byte[] getChatLoginResult(int n) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.CHAT_SERVER_RESULT.getValue());
        mplew.write(0);
        mplew.writeInt(n);//進入地圖時:00 00 00 00

        return mplew.getPacket();
    }

    public static byte[] buddyChat(int fromaccid, int fromchrid, String chattext) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.BUDDY_CHAT.getValue());
        mplew.writeInt(fromaccid);
        mplew.writeInt(fromaccid);
        mplew.writeInt(fromchrid);
        mplew.writeLong(DateUtil.getFileTimestamp(System.currentTimeMillis()));
        mplew.writeMapleAsciiString(chattext);
        mplew.write(0);

        return mplew.getPacket();
    }

    public static byte[] guildChat(int fromaccid, int fromguildid, int fromchrid, String chattext) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.GUILD_CHAT.getValue());
        mplew.writeInt(fromaccid);
        mplew.writeInt(fromguildid);
        mplew.writeInt(fromaccid);
        mplew.writeInt(fromchrid);
        mplew.writeLong(DateUtil.getFileTimestamp(System.currentTimeMillis()));
        mplew.writeMapleAsciiString(chattext);
        mplew.write(0);

        return mplew.getPacket();
    }
}
