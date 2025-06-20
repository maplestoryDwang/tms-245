package packet;

import client.MapleCharacter;
import client.MonsterFamiliar;
import handling.opcode.SendPacketOpcode;
import handling.world.WorldFamilyService;
import handling.world.family.MapleFamily;
import handling.world.family.MapleFamilyBuff;
import handling.world.family.MapleFamilyCharacter;
import tools.data.MaplePacketLittleEndianWriter;

import java.util.List;

public class FamilyPacket {

    public static byte[] getFamilyData() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.FAMILY.getValue());
        MapleFamilyBuff[] entries = MapleFamilyBuff.values();
        mplew.writeInt(entries.length); // Number of events

        for (MapleFamilyBuff entry : entries) {
            mplew.write(entry.type);
            mplew.writeInt(entry.rep);
            mplew.writeInt(1); //i think it always has to be this
            mplew.writeMapleAsciiString(entry.name);
            mplew.writeMapleAsciiString(entry.desc);
        }
        return mplew.getPacket();
    }

    /*
     * 改變家族點數
     */
    public static byte[] changeRep(int r, String name) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.REP_INCREASE.getValue());
        mplew.writeInt(r);
        mplew.writeMapleAsciiString(name);
        return mplew.getPacket();
    }

    /*
     * 打開家族
     */
    public static byte[] getFamilyInfo(MapleCharacter chr) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.OPEN_FAMILY.getValue());
        mplew.writeInt(chr.getCurrentRep()); // 當前的名聲度
        mplew.writeInt(chr.getTotalRep());   // 最高的名聲度
        mplew.writeInt(chr.getTotalRep());   // 今天的名聲度 getTodaysRep
        mplew.writeShort(chr.getNoJuniors());
        mplew.writeShort(2);
        mplew.writeShort(chr.getNoJuniors());
        MapleFamily family = WorldFamilyService.getInstance().getFamily(chr.getFamilyId());
        if (family != null) {
            mplew.writeInt(family.getLeaderId()); //家族ID？
            mplew.writeMapleAsciiString(family.getLeaderName());
            mplew.writeMapleAsciiString(family.getNotice()); //message?
        } else {
            mplew.writeLong(0);
        }
        List<Integer> b = chr.usedBuffs();
        mplew.writeInt(b.size());
        for (int ii : b) {
            mplew.writeInt(ii); //buffid
            mplew.writeInt(1); //times used, but if its 0 it still records!
        }
        return mplew.getPacket();
    }

    public static void addFamilyCharInfo(MapleFamilyCharacter ldr, MaplePacketLittleEndianWriter mplew) {
        mplew.writeInt(ldr.getId()); //角色ID
        mplew.writeInt(ldr.getSeniorId());
        mplew.writeInt(ldr.getJobId()); //職業 V.104.1改為Int 以前為 Short
        mplew.write(ldr.getLevel()); //等級
        mplew.write(ldr.isOnline() ? 1 : 0); //是否在線
        mplew.writeInt(ldr.getCurrentRep());
        mplew.writeInt(ldr.getTotalRep());
        mplew.writeInt(ldr.getTotalRep()); //recorded rep to senior
        mplew.writeInt(ldr.getTotalRep()); //then recorded rep to sensen
        mplew.writeLong(Math.max(ldr.getChannel(), 0)); //channel->time online
        mplew.writeMapleAsciiString(ldr.getName());
    }

    /*
     * 打開校譜
     */
    public static byte[] getFamilyPedigree(MapleCharacter chr) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.SEND_PEDIGREE.getValue());
        mplew.writeInt(chr.getId());
        MapleFamily family = WorldFamilyService.getInstance().getFamily(chr.getFamilyId());
        int gens = 0, generations = 0;
        if (family == null) {
            mplew.writeInt(2);
            addFamilyCharInfo(new MapleFamilyCharacter(chr, 0, 0, 0, 0), mplew); //leader
        } else {
            mplew.writeInt(family.getMFC(chr.getId()).getPedigree().size() + 1); //+ 1 for leader, but we don't want leader seeing all msgs
            addFamilyCharInfo(family.getMFC(family.getLeaderId()), mplew);

            if (chr.getSeniorId() > 0) {
                MapleFamilyCharacter senior = family.getMFC(chr.getSeniorId());
                if (senior != null) {
                    if (senior.getSeniorId() > 0) {
                        addFamilyCharInfo(family.getMFC(senior.getSeniorId()), mplew);
                    }
                    addFamilyCharInfo(senior, mplew);
                }
            }
        }
        addFamilyCharInfo(chr.getMFC() == null ? new MapleFamilyCharacter(chr, 0, 0, 0, 0) : chr.getMFC(), mplew);
        if (family != null) {
            if (chr.getSeniorId() > 0) {
                MapleFamilyCharacter senior = family.getMFC(chr.getSeniorId());
                if (senior != null) {
                    if (senior.getJunior1() > 0 && senior.getJunior1() != chr.getId()) {
                        addFamilyCharInfo(family.getMFC(senior.getJunior1()), mplew);
                    } else if (senior.getJunior2() > 0 && senior.getJunior2() != chr.getId()) {
                        addFamilyCharInfo(family.getMFC(senior.getJunior2()), mplew);
                    }
                }
            }
            if (chr.getJunior1() > 0) {
                MapleFamilyCharacter junior = family.getMFC(chr.getJunior1());
                if (junior != null) {
                    addFamilyCharInfo(junior, mplew);
                }
            }
            if (chr.getJunior2() > 0) {
                MapleFamilyCharacter junior = family.getMFC(chr.getJunior2());
                if (junior != null) {
                    addFamilyCharInfo(junior, mplew);
                }
            }
            if (chr.getJunior1() > 0) {
                MapleFamilyCharacter junior = family.getMFC(chr.getJunior1());
                if (junior != null) {
                    if (junior.getJunior1() > 0 && family.getMFC(junior.getJunior1()) != null) {
                        gens++;
                        addFamilyCharInfo(family.getMFC(junior.getJunior1()), mplew);
                    }
                    if (junior.getJunior2() > 0 && family.getMFC(junior.getJunior2()) != null) {
                        gens++;
                        addFamilyCharInfo(family.getMFC(junior.getJunior2()), mplew);
                    }
                }
            }
            if (chr.getJunior2() > 0) {
                MapleFamilyCharacter junior = family.getMFC(chr.getJunior2());
                if (junior != null) {
                    if (junior.getJunior1() > 0 && family.getMFC(junior.getJunior1()) != null) {
                        gens++;
                        addFamilyCharInfo(family.getMFC(junior.getJunior1()), mplew);
                    }
                    if (junior.getJunior2() > 0 && family.getMFC(junior.getJunior2()) != null) {
                        gens++;
                        addFamilyCharInfo(family.getMFC(junior.getJunior2()), mplew);
                    }
                }
            }
            generations = family.getMemberSize();
        }
        mplew.writeLong(2 + gens); //no clue
        mplew.writeInt(gens); //2?
        mplew.writeInt(-1);
        mplew.writeInt(generations);
        if (family != null) {
            if (chr.getJunior1() > 0) {
                MapleFamilyCharacter junior = family.getMFC(chr.getJunior1());
                if (junior != null) {
                    if (junior.getJunior1() > 0 && family.getMFC(junior.getJunior1()) != null) {
                        mplew.writeInt(junior.getJunior1());
                        mplew.writeInt(family.getMFC(junior.getJunior1()).getDescendants());
                    }
                    if (junior.getJunior2() > 0 && family.getMFC(junior.getJunior2()) != null) {
                        mplew.writeInt(junior.getJunior2());
                        mplew.writeInt(family.getMFC(junior.getJunior2()).getDescendants());
                    }
                }
            }
            if (chr.getJunior2() > 0) {
                MapleFamilyCharacter junior = family.getMFC(chr.getJunior2());
                if (junior != null) {
                    if (junior.getJunior1() > 0 && family.getMFC(junior.getJunior1()) != null) {
                        mplew.writeInt(junior.getJunior1());
                        mplew.writeInt(family.getMFC(junior.getJunior1()).getDescendants());
                    }
                    if (junior.getJunior2() > 0 && family.getMFC(junior.getJunior2()) != null) {
                        mplew.writeInt(junior.getJunior2());
                        mplew.writeInt(family.getMFC(junior.getJunior2()).getDescendants());
                    }
                }
            }
        }
        List<Integer> b = chr.usedBuffs();
        mplew.writeInt(b.size());
        for (int ii : b) {
            mplew.writeInt(ii); //buffid
            mplew.writeInt(1); //times used, but if 0 it still records!
        }
        mplew.writeShort(2);
        return mplew.getPacket();
    }

    public static byte[] sendFamilyInvite(int cid, int otherLevel, int otherJob, String inviter) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.FAMILY_INVITE.getValue());
        mplew.writeInt(cid); //the inviter
        mplew.writeInt(otherLevel);
        mplew.writeInt(otherJob);
        mplew.writeInt(0); //V.104新增 貌似是把職業的 Int 改為 Long ?
        mplew.writeMapleAsciiString(inviter);

        return mplew.getPacket();
    }

    public static byte[] getSeniorMessage(String name) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.SENIOR_MESSAGE.getValue());
        mplew.writeMapleAsciiString(name);
        return mplew.getPacket();
    }

    /*
     * 返回玩家接受和拒絕家族邀請
     */
    public static byte[] sendFamilyJoinResponse(boolean accepted, String added) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.FAMILY_JUNIOR.getValue());
        /*
         * 0 = 拒絕
         * 1 = 同意
         */
        mplew.write(accepted ? 1 : 0);
        mplew.writeMapleAsciiString(added);
        return mplew.getPacket();
    }

    public static byte[] familyBuff(int type, int buffnr, int amount, int time) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.FAMILY_BUFF.getValue());
        mplew.write(type);
        if (type >= 2 && type <= 4) {
            mplew.writeInt(buffnr);
            //first int = exp, second int = drop
            mplew.writeInt(type == 3 ? 0 : amount);
            mplew.writeInt(type == 2 ? 0 : amount);
            mplew.write(0);
            mplew.writeInt(time);
        }
        return mplew.getPacket();
    }

    public static byte[] cancelFamilyBuff() {
        return familyBuff(0, 0, 0, 0);
    }

    /*
     * 家族玩家登錄
     */
    public static byte[] familyLoggedIn(boolean online, String name) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.FAMILY_LOGGEDIN.getValue());
        mplew.write(online ? 1 : 0);
        mplew.writeMapleAsciiString(name);
        return mplew.getPacket();
    }

    public static byte[] familySummonRequest(String name, String mapname) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.FAMILY_USE_REQUEST.getValue());
        mplew.writeMapleAsciiString(name);
        mplew.writeMapleAsciiString(mapname);
        return mplew.getPacket();
    }

    /*
     * 家族提示信息
     */
    public static byte[] sendFamilyMessage(int op) {
        return sendFamilyMessage(op, 0);
    }

    public static byte[] sendFamilyMessage(int op, int id) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        /*
         * 0x01 = 已和(null)訣別。冒險家族關係已經結束。
         * 0x40 = 無法登錄為同學的角色。
         * 0x41 = 角色不在線，或角色名不正確。
         * 0x42 = 是同一冒險家族。
         * 0x43 = 非同一冒險家族。
         * 0x45 = 只有在同一地圖中的角色才能登錄為同學
         * 0x46 = 已經是其他角色的同學
         * 0x47 = 只能將比自己等級低的角色登錄為同學
         * 0x48 = 等級差異超過20，無法登錄為同學。
         * 0x49 = 正在邀請其他角色登錄為同學。請稍後重新嘗試。
         * 0x50 = 與該地圖不符合等級，所以無法使用特權
         */
        mplew.writeShort(SendPacketOpcode.FAMILY_MESSAGE.getValue());
        mplew.writeInt(op); //在是操作包頭
        mplew.writeInt(id); //這個是角色ID

        return mplew.getPacket();
    }

}
