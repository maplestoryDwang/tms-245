package server.life;

import auth.Auth;
import configs.ServerConfig;
import constants.GameConstants;
import database.DatabaseConnection;
import database.tools.SqlTool;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import provider.*;
import server.InitializeServer.WzSqlName;
import tools.Pair;
import tools.Randomizer;
import tools.StringUtil;
import tools.Triple;

import java.awt.*;
import java.util.List;
import java.util.*;

public class MapleLifeFactory {

    private static final MapleDataProvider data = MapleDataProviderFactory.getMob();
    private static final MapleDataProvider npcData = MapleDataProviderFactory.getNpc();
    private static final MapleDataProvider stringDataWZ = MapleDataProviderFactory.getString();
    private static final MapleDataProvider etcDataWZ = MapleDataProviderFactory.getEtc();
    private static final MapleDataProvider effectDataWZ = MapleDataProviderFactory.getEffect();
    private static final Logger log = LogManager.getLogger();
    private static final MapleData mobStringData = stringDataWZ.getData("Mob.img");
    private static MapleData npcStringData = stringDataWZ.getData("Npc.img");
    private static final MapleData npclocData = etcDataWZ.getData("NpcLocation.img");
    private static Map<Integer, String> npcNames = new HashMap<>();
    private static Map<Integer, String> mobNames = new HashMap<>();
    private static Map<Integer, Boolean> mobIds = new HashMap<>();
    private static final Map<Integer, MapleMonsterStats> monsterStats = new HashMap<>();
    private static final Map<Integer, Integer> NPCLoc = new HashMap<>();
    private static final Map<Integer, List<Integer>> questCount = new HashMap<>();
    private static final Map<Integer, String> EliteMobs = new HashMap<>();

    static {
        assert mobStringData != null;
        // 將怪物名字緩存
        for (MapleData mapleData : mobStringData) {
            mobNames.put(Integer.valueOf(mapleData.getName()), String.valueOf(mapleData.getChildByPath("name").getData()));
        }

        for (MapleDataFileEntry mapleDataFileEntry : data.getRoot().getFiles()) {
            int mobid = Integer.valueOf(mapleDataFileEntry.getName().substring(0, mapleDataFileEntry.getName().indexOf(".img")));
            boolean isboss = MapleDataTool.getInt("info/boss", data.getData(mapleDataFileEntry.getName()), 0) > 0;
            mobIds.put(mobid, isboss);
        }
    }

    public static AbstractLoadedMapleLife getLife(int id, String type, int mapid) {
        if (type.equalsIgnoreCase("n")) {
            return getNPC(id, mapid);
        } else if (type.equalsIgnoreCase("m")) {
            return getMonster(id);
        } else {
            System.err.println("Unknown Life type: " + type + "");
            return null;
        }
    }

    public static Map<Integer, String> getMonsterNames() {
        return mobNames;
    }

    public static String getMonsterName(int mobid) {
        return mobNames.getOrDefault(mobid, "MISSINGNO");
    }

    public static boolean isBoss(int mobid) {
        return mobIds.containsKey(mobid) && mobIds.get(mobid);
    }

    public static boolean checkMonsterIsExist(int mobid) {
        return mobIds.containsKey(mobid);
    }

    public static int getNPCLocation(int npcid) {
        if (NPCLoc.containsKey(npcid)) {
            return NPCLoc.get(npcid);
        }
        int map = MapleDataTool.getIntConvert(Integer.toString(npcid) + "/0", npclocData, -1);
        NPCLoc.put(npcid, map);
        return map;
    }

    public static void loadQuestCounts() {
        DatabaseConnection.domain(con -> {
            if (WzSqlName.wz_questcount.check(con)) {//load from sql
                SqlTool.queryAndGetList(con, "SELECT * FROM `wz_questcount`", rs -> {
                    List<Integer> list = new ArrayList<>();
                    for (String count : rs.getString("info").split(",")) {
                        list.add(Integer.parseInt(count));
                    }
                    questCount.put(rs.getInt("id"), list);
                    return null;
                });
            } else {//load from wz and insert into sql
                WzSqlName.wz_questcount.drop(con);
                SqlTool.update(con, "CREATE TABLE `wz_questcount` (`id` int NOT NULL,`info` text NOT NULL,PRIMARY KEY (`id`))");
                for (MapleDataDirectoryEntry mapz : data.getRoot().getSubdirectories()) {
                    if (mapz.getName().equals("QuestCountGroup")) {
                        for (MapleDataFileEntry entry : mapz.getFiles()) {
                            int id = Integer.parseInt(entry.getName().substring(0, entry.getName().length() - 4));
                            MapleData da = data.getData("QuestCountGroup/" + entry.getName());
                            if (da != null && da.getChildByPath("info") != null) {
                                StringBuilder s = new StringBuilder();
                                boolean b = false;
                                List<Integer> info = new ArrayList<>();
                                for (MapleData d : da.getChildByPath("info")) {
                                    int count = MapleDataTool.getInt(d, 0);
                                    info.add(count);
                                    if (b) {
                                        s.append(",");
                                    } else {
                                        b = true;
                                    }
                                    s.append(count);
                                }
                                questCount.put(id, info);
                                SqlTool.update(con, "INSERT INTO `wz_questcount` (`id`,`info`) VALUES (?,?)", new Object[]{id, s.toString()});
                            }
                        }
                    }
                }
                WzSqlName.wz_questcount.update(con);
            }
            if (WzSqlName.wz_npcnames.check(con)) {//load from sql
                SqlTool.queryAndGetList(con, "SELECT * FROM `wz_npcnames`", rs -> npcNames.put(rs.getInt("npcid"), rs.getString("name")));
            } else {//load from wz and insert into sql
                WzSqlName.wz_npcnames.drop(con);
                SqlTool.update(con, "CREATE TABLE `wz_npcnames` (\n" +
                        "  `npcid` int(11) NOT NULL,\n" +
                        "  `name` text NOT NULL,\n" +
                        "  PRIMARY KEY (`npcid`)\n" +
                        ") ENGINE=InnoDB DEFAULT CHARSET=utf8;");
                MapleData npcStringData = stringDataWZ.getData("Npc.img");
                for (MapleData c : npcStringData) {
                    if (c.getName().contains("pack_ignore")) {
                        continue;
                    }
                    int nid = Integer.parseInt(c.getName());
                    String n = StringUtil.getLeftPaddedStr(nid + ".img", '0', 11);
                    try {
                        if (npcData.getData(n) != null) { //only thing we really have to do is check if it exists. if we wanted to, we could get the script as well :3
                            String name = MapleDataTool.getString("name", c, "MISSINGNO");
                            if (name.contains("MapleTV") || name.contains("嬰兒月妙")) {
                                continue;
                            }
                            npcNames.put(nid, name);
                            SqlTool.update(con, "INSERT INTO `wz_npcnames` (`npcid`,`name`) VALUES (?,?)", new Object[]{nid, name});
                        }
                    } catch (RuntimeException ex) {
                        log.error("", ex);
                    }
                }
                WzSqlName.wz_npcnames.update(con);
            }
            return null;
        });
    }

    public static void initEliteMonster() {
        for (MapleData data : effectDataWZ.getData("EliteMobEff.img")) {
            if (data.getName().length() < 3) {
                String modifier = MapleDataTool.getString("modifier", data, "");
                for (MapleData d : data.getChildByPath("skill")) {
                    EliteMobs.put(Integer.valueOf(d.getName()), modifier);
                }
            }
        }
    }

    public static boolean exitsQuestCount(int mo, int id) {
        List<Integer> ret = questCount.get(mo);
        return ret != null && ret.contains(id);
    }

    public static MapleMonster getMonster(int mobId) {
        if (Auth.isForbiddenMob(mobId)) {
            return null;
        }
        MapleMonsterStats stats = getMonsterStats(mobId);
        if (stats == null) {
            return null;
        }
        return new MapleMonster(mobId, stats);
    }

    public static MapleMonster getEliteMonster(int mobId) {
        return getEliteMonster(mobId, getMonsterStats(mobId));
    }

    public static MapleMonster getEliteMonster(int mobId, MapleMonsterStats stats) {
        return getEliteMonster(mobId, stats, -1);
    }

    public static MapleMonster getEliteMonster(int mobId, MapleMonsterStats stats, int eliteGrade) {
        return getEliteMonster(mobId, stats, eliteGrade, 1);
    }

    public static MapleMonster getEliteMonster(int mobId, MapleMonsterStats stats, int eliteGrade, int eliteType) {
        if (stats == null) {
            return null;
        }
        MapleMonster monster = new MapleMonster(mobId, getMonsterStats(mobId));
        monster.setEliteGrade(eliteGrade == -1 ? Randomizer.rand(0, 2) : eliteGrade);
        monster.setEliteType(eliteType);
        int a = Randomizer.rand(1, 3);
        List<Integer> list = new ArrayList<>(EliteMobs.keySet());
        for (int i = 0; i < a; ++i) {
            int n = list.get(Randomizer.nextInt(list.size()));
            if (!monster.getEliteMobActive().contains(n)) {
                monster.getEliteMobActive().add(n);
            }
        }
        monster.setForcedMobStat(stats);
        if (mobId == 8644631) {
            // 黑暗傳令
            monster.changeHP(monster.getMobMaxHp() * 200);
            monster.setMaxMP(monster.getMobMaxMp());
            monster.getForcedMobStat().setExp(Math.min(Integer.MAX_VALUE, monster.getForcedMobStat().getExp() * 80));
            monster.getForcedMobStat().setWatk(monster.getForcedMobStat().getWatk() * 2);
            monster.getForcedMobStat().setMatk(monster.getForcedMobStat().getMDRate() * 2);
            monster.getForcedMobStat().setPDRate(monster.getForcedMobStat().getPDRate() * 2);
            monster.getForcedMobStat().setMDRate(monster.getForcedMobStat().getMDRate() * 2);
            monster.getForcedMobStat().setPushed(2100000000);
            monster.getForcedMobStat().setSpeed(140);
            monster.setScale(200);
        } else if (eliteType > 1) {
            monster.changeHP(monster.getMobMaxHp() * 400);
            monster.setMaxMP(monster.getMobMaxMp());
            monster.getForcedMobStat().setExp(Math.min(Integer.MAX_VALUE, monster.getForcedMobStat().getExp() * 160));
            monster.getForcedMobStat().setWatk((int) (monster.getForcedMobStat().getWatk() * 2.5f));
            monster.getForcedMobStat().setMatk((int) (monster.getForcedMobStat().getMDRate() * 2.5f));
            monster.getForcedMobStat().setPDRate((int) (monster.getForcedMobStat().getPDRate() * 2.5f));
            monster.getForcedMobStat().setMDRate((int) (monster.getForcedMobStat().getMDRate() * 2.5f));
            monster.getForcedMobStat().setPushed(2100000000);
            monster.getForcedMobStat().setSpeed(140);
        } else {
            int hpRate;
            float expRate;
            switch (monster.getEliteGrade()) {
                case 1:
                    hpRate = 45;
                    expRate = 22.5f;
                    break;
                case 2:
                    hpRate = 60;
                    expRate = 30;
                    break;
                case 0:
                default:
                    hpRate = 30;
                    expRate = 15;
                    break;
            }
            monster.getForcedMobStat().setExp((long) Math.min(Integer.MAX_VALUE, monster.getMobExp() * expRate));
            monster.changeHP(monster.getMobMaxHp() * hpRate);
            monster.setScale(200);
            if (ServerConfig.HALLOWEEN_SKIN) {
                monster.setShowMobId(9010196 + Randomizer.nextInt(3));
            }
        }
        return monster;
    }

    public static String getEliteMonEff(int id) {
        return EliteMobs.getOrDefault(id, "MISSINGNO");
    }

    public static MapleMonsterStats getMonsterStats(int mobId) {
        MapleMonsterStats stats = monsterStats.get(mobId);


        if (!monsterStats.containsKey(mobId)) {
            try {
                MapleData monsterData = data.getData(StringUtil.getLeftPaddedStr(mobId + ".img", '0', 11));
                if (monsterData == null) {
                    monsterStats.put(mobId, null);
                    return null;
                }
                MapleData monsterInfoData = monsterData.getChildByPath("info");
                stats = new MapleMonsterStats(mobId);

                String maxHpName = monsterInfoData.getChildByPath("maxHP").getData().toString();
                if (maxHpName.contains("?")) {
                    //System.out.println("[MapleMonsterStats] " + mid + " - " + monsterInfoData.getChildByPath("maxHP").getData());
                    stats.setHp(Integer.MAX_VALUE);
                } else if (maxHpName.endsWith("\r\n")) {
                    stats.setHp(Long.parseLong(maxHpName.substring(0, maxHpName.indexOf("\r\n"))));
                } else {
                    stats.setHp(GameConstants.getPartyPlayHP(mobId) > 0 ? GameConstants.getPartyPlayHP(mobId) : MapleDataTool.getLongConvert("maxHP", monsterInfoData));
                }
//            stats.setFinalMaxHP(MapleDataTool.getLong("finalmaxHP", monsterInfoData, stats.getHp()));
                stats.setFinalMaxHP(stats.getHp());
                stats.setType(MapleDataTool.getString("mobType", monsterInfoData, ""));
                stats.setMp(MapleDataTool.getIntConvert("maxMP", monsterInfoData, 0));
                stats.setExp(MapleDataTool.getIntConvert("exp", monsterInfoData, 0));
                stats.setLevel((short) MapleDataTool.getIntConvert("level", monsterInfoData, 1));
                stats.setWeaponPoint((short) MapleDataTool.getIntConvert("wp", monsterInfoData, 0));
                stats.setCharismaEXP((short) MapleDataTool.getIntConvert("charismaEXP", monsterInfoData, 0));
                stats.setRemoveAfter(MapleDataTool.getIntConvert("removeAfter", monsterInfoData, 0));
                stats.setrareItemDropLevel((byte) MapleDataTool.getIntConvert("rareItemDropLevel", monsterInfoData, 0));
                stats.setFixedDamage(MapleDataTool.getIntConvert("fixedDamage", monsterInfoData, -1));
                stats.setOnlyNormalAttack(MapleDataTool.getIntConvert("onlyNormalAttack", monsterInfoData, 0) > 0);
                stats.setBoss(MapleDataTool.getIntConvert("boss", monsterInfoData, 0) > 0 || mobId == 8810018 || mobId == 9410066 || (mobId >= 8810118 && mobId <= 8810122));
                stats.setExplosiveReward(MapleDataTool.getIntConvert("explosiveReward", monsterInfoData, 0) > 0);
                stats.setUndead(MapleDataTool.getIntConvert("undead", monsterInfoData, 0) > 0);
                stats.setEscort(MapleDataTool.getIntConvert("escort", monsterInfoData, 0) > 0);
                stats.setPartyBonus(GameConstants.getPartyPlayHP(mobId) > 0 || MapleDataTool.getIntConvert("partyBonusMob", monsterInfoData, 0) > 0);
                stats.setPartyBonusRate(MapleDataTool.getIntConvert("partyBonusR", monsterInfoData, 0));
                if (mobStringData.getChildByPath(String.valueOf(mobId)) != null) {
                    stats.setName(MapleDataTool.getString("name", mobStringData.getChildByPath(String.valueOf(mobId)), "MISSINGNO"));
                }
                stats.setBuffToGive(MapleDataTool.getIntConvert("buff", monsterInfoData, -1));
                stats.setChange(MapleDataTool.getIntConvert("changeableMob", monsterInfoData, 0) > 0);
                stats.setFriendly(MapleDataTool.getIntConvert("damagedByMob", monsterInfoData, 0) > 0);
                stats.setNoDoom(MapleDataTool.getIntConvert("noDoom", monsterInfoData, 0) > 0);
                stats.setPublicReward(MapleDataTool.getIntConvert("publicReward", monsterInfoData, 0) > 0);
                stats.setCP((byte) MapleDataTool.getIntConvert("getCP", monsterInfoData, 0));
                stats.setPoint(MapleDataTool.getIntConvert("point", monsterInfoData, 0));
                stats.setDropItemPeriod(MapleDataTool.getIntConvert("dropItemPeriod", monsterInfoData, 0));
                stats.setPhysicalAttack(MapleDataTool.getIntConvert("PADamage", monsterInfoData, 0));
                stats.setUserCount(MapleDataTool.getIntConvert("userCount", monsterInfoData, 0));
                stats.setMagicAttack(MapleDataTool.getIntConvert("MADamage", monsterInfoData, 0));
                stats.setPDRate(MapleDataTool.getIntConvert("PDRate", monsterInfoData, 0));
                stats.setMDRate(MapleDataTool.getIntConvert("MDRate", monsterInfoData, 0));
                stats.setAcc(MapleDataTool.getIntConvert("acc", monsterInfoData, 0));
                stats.setEva(MapleDataTool.getIntConvert("eva", monsterInfoData, 0));
                stats.setSummonType((byte) MapleDataTool.getIntConvert("summonType", monsterInfoData, 0));
                stats.setCategory((byte) MapleDataTool.getIntConvert("category", monsterInfoData, 0));
                stats.setSpeed(MapleDataTool.getIntConvert("speed", monsterInfoData, 0));
                stats.setPushed(MapleDataTool.getIntConvert("pushed", monsterInfoData, 0));
                //boolean hideHP = MapleDataTool.getIntConvert("HPgaugeHide", monsterInfoData, 0) > 0 || MapleDataTool.getIntConvert("hideHP", monsterInfoData, 0) > 0;
                stats.setRemoveOnMiss(MapleDataTool.getIntConvert("removeOnMiss", monsterInfoData, 0) > 0);
                stats.setSkeleton(MapleDataTool.getIntConvert("skeleton", monsterInfoData, 0) > 0);
                stats.setInvincible(MapleDataTool.getIntConvert("invincible", monsterInfoData, 0) > 0);
                stats.setSmartPhase(MapleDataTool.getIntConvert("smartPhase", monsterInfoData, 0));
                stats.setIgnoreMoveImpact(MapleDataTool.getIntConvert("ignoreMoveImpact", monsterInfoData, 0) > 0);
                stats.setRewardSprinkle(MapleDataTool.getIntConvert("rewardSprinkle", monsterInfoData, 0) > 0);
                stats.setRewardSprinkleCount(MapleDataTool.getIntConvert("rewardSprinkleCount", monsterInfoData, 0));
                stats.setRewardSprinkleSpeed(MapleDataTool.getIntConvert("rewardSprinkleSpeed", monsterInfoData, 0));
                stats.setDefenseMob(MapleDataTool.getIntConvert("defenseMob", monsterInfoData, 0) == 1);

                MapleData special = monsterInfoData.getChildByPath("coolDamage");
                if (special != null) {
                    int coolDmg = MapleDataTool.getIntConvert("coolDamage", monsterInfoData);
                    int coolProb = MapleDataTool.getIntConvert("coolDamageProb", monsterInfoData, 0);
                    stats.setCool(new Pair<>(coolDmg, coolProb));
                }
                special = monsterInfoData.getChildByPath("loseItem");
                if (special != null) {
                    for (MapleData liData : special.getChildren()) {
                        stats.addLoseItem(new loseItem(MapleDataTool.getInt(liData.getChildByPath("id")), (byte) MapleDataTool.getInt(liData.getChildByPath("prop")), (byte) MapleDataTool.getInt(liData.getChildByPath("x"))));
                    }
                }

                MapleData selfd = monsterInfoData.getChildByPath("selfDestruction");
                if (selfd != null) {
                    stats.setSelfDHP(MapleDataTool.getIntConvert("hp", selfd, 0));
                    stats.setRemoveAfter(MapleDataTool.getIntConvert("removeAfter", selfd, stats.getRemoveAfter()));
                    stats.setSelfD((byte) MapleDataTool.getIntConvert("action", selfd, -1));
                } else {
                    stats.setSelfD((byte) -1);
                }

                MapleData patrol = monsterInfoData.getChildByPath("patrol");
                if (patrol != null) {
                    stats.setPatrol(true);
                    stats.setPatrolRange(MapleDataTool.getInt("range", patrol, 0));
                    stats.setPatrolDetectX(MapleDataTool.getInt("detectX", patrol, 0));
                    stats.setPatrolSenseX(MapleDataTool.getInt("senseX", patrol, 0));
                }

                MapleData firstAttackData = monsterInfoData.getChildByPath("firstAttack");
                int firstAttack = 0;
                if (firstAttackData != null) {
                    if (firstAttackData.getType() == MapleDataType.FLOAT) {
                        firstAttack = Math.round(MapleDataTool.getFloat(firstAttackData));
                    } else {
                        firstAttack = MapleDataTool.getInt(firstAttackData);
                    }
                }
                stats.setFirstAttack(firstAttack > 0);

                if (stats.isBoss() || isDmgSponge(mobId)) {
                    if (monsterInfoData.getChildByPath("hpTagColor") == null || monsterInfoData.getChildByPath("hpTagBgcolor") == null) {
                        stats.setTagColor(0);
                        stats.setTagBgColor(0);
                    } else {
                        stats.setTagColor(MapleDataTool.getIntConvert("hpTagColor", monsterInfoData));
                        stats.setTagBgColor(MapleDataTool.getIntConvert("hpTagBgcolor", monsterInfoData));
                    }
                }

                MapleData banishData = monsterInfoData.getChildByPath("ban");
                if (banishData != null) {
                    for (MapleData d : banishData.getChildByPath("banMap").getChildren()) {
                        MapleData banMsgData = banishData.getChildByPath("banMsg");
                        stats.addBanishInfo(new BanishInfo(
                                banMsgData == null ? null : MapleDataTool.getString(banMsgData), // banMap 節點中可能沒有 banMsg 導致空值 (9441003)
                                MapleDataTool.getInt("field", d, -1),
                                MapleDataTool.getString("portal", d, "sp")));
                    }
                }

                MapleData reviveInfo = monsterInfoData.getChildByPath("revive");
                if (reviveInfo != null) {
                    List<Integer> revives = new LinkedList<>();
                    for (MapleData bdata : reviveInfo) {
                        revives.add(MapleDataTool.getInt(bdata));
                    }
                    stats.setRevives(revives);
                }

                MapleData mobZoneInfo = monsterInfoData.getChildByPath("mobZone");
                if (mobZoneInfo != null) {
                    List<Pair<Point, Point>> mobZone = new LinkedList<>();
                    for (MapleData bdata : mobZoneInfo) {
                        MapleData ltData = bdata.getChildByPath("lt");
                        MapleData rbData = bdata.getChildByPath("rb");
                        if (ltData == null || rbData == null) { // mobZone節點中沒有 lt rb 節點導致空值
                            continue;
                        }
                        mobZone.add(new Pair<>((Point) ltData.getData(), (Point) rbData.getData()));
                    }
                    stats.setMobZone(mobZone);
                }

                MapleData trans = monsterInfoData.getChildByPath("trans");
                MapleMonsterStats.TransMobs transMobs = null;
                if (trans != null) {
                    List<Integer> mobids = new ArrayList<>();
                    List<Pair<Integer, Integer>> arrayList = new ArrayList<>();
                    if (trans.getChildByPath("0") != null) {
                        mobids.add(MapleDataTool.getInt(trans.getChildByPath("0"), -1));
                    }
                    if (trans.getChildByPath("1") != null) {
                        mobids.add(MapleDataTool.getInt(trans.getChildByPath("1"), -1));
                    }
                    int time = MapleDataTool.getInt(trans.getChildByPath("time"), 0);
                    int cooltime = MapleDataTool.getInt(trans.getChildByPath("cooltime"), 0);
                    int hpTriggerOn = MapleDataTool.getInt(trans.getChildByPath("hpTriggerOn"), 0);
                    int hpTriggerOff = MapleDataTool.getInt(trans.getChildByPath("hpTriggerOff"), 0);
                    int withMob = MapleDataTool.getInt(trans.getChildByPath("withMob"), -1);
                    if (trans.getChildByPath("skill") != null) {
                        for (MapleData data : trans.getChildByPath("skill")) {
                            arrayList.add(new Pair<>(MapleDataTool.getInt("skill", data, 0), MapleDataTool.getInt("level", data, 0)));
                        }
                    }
                    transMobs = new MapleMonsterStats.TransMobs(mobids, arrayList, time, cooltime, hpTriggerOn, hpTriggerOff, withMob);
                }
                stats.setTransMobs(transMobs);

                MapleData monsterSkillData = monsterInfoData.getChildByPath("skill");
                if (monsterSkillData != null) {
                    int i = 0;
                    List<Triple<Integer, Integer, Integer>> skills = new ArrayList<>();
                    while (monsterSkillData.getChildByPath(Integer.toString(i)) != null) {
                        skills.add(new Triple<>(MapleDataTool.getInt(i + "/skill", monsterSkillData, 0), MapleDataTool.getInt(i + "/level", monsterSkillData, 0), MapleDataTool.getInt(i + "/skillAfter", monsterSkillData, 0)));
                        i++;
                    }
                    stats.setSkills(skills);
                }

                MapleData monsterHitPartsToSlot = monsterData.getChildByPath("HitParts");
                if (monsterHitPartsToSlot != null && monsterHitPartsToSlot.getChildren().size() > 0) {
                    for (MapleData d : monsterHitPartsToSlot) {
                        int n = 0;
                        Iterator<MapleData> ii = d.iterator();
                        if (ii.hasNext()) {
                            n = provider.MapleDataTool.getInt("durability", ii.next(), 0);
                        }
                        stats.getHitParts().put(d.getName(), n);
                    }
                }

                decodeElementalString(stats, MapleDataTool.getString("elemAttr", monsterInfoData, ""));

                int link = MapleDataTool.getIntConvert("link", monsterInfoData, 0);
                stats.setLink(link);
                if (link != 0) {
                    monsterData = data.getData(StringUtil.getLeftPaddedStr(link + ".img", '0', 11));
                }

                if (monsterData != null) {
                    for (MapleData idata : monsterData) {
                        if (!idata.getName().equals("info")) {
                            int delay = 0;
                            for (MapleData pic : idata.getChildren()) {
                                delay += MapleDataTool.getIntConvert("delay", pic, 0);
                            }
                            stats.setAnimationTime(idata.getName(), delay);
                        }
                    }

                    for (int i = 0; true; i++) {
                        String[] info = {
                                "attack" + i + "/info",
                                "info/attack/" + i
                        };
                        MobAttackInfo ret = null;
                        for (String s : info) {
                            MapleData attackData = monsterData.getChildByPath(s);
                            if (attackData == null) {
                                continue;
                            }
                            if (ret == null) {
                                ret = new MobAttackInfo();
                            }
                            ret.setDeadlyAttack(attackData.getChildByPath("deadlyAttack") != null);
                            ret.setMpBurn(MapleDataTool.getInt("mpBurn", attackData, 0));
                            int diseaseSkill = MapleDataTool.getInt("disease", attackData, 0);
                            int diseaseLevel = MapleDataTool.getInt("level", attackData, 0);
                            ret.setDiseaseSkill(diseaseSkill);
                            ret.setDiseaseLevel(diseaseLevel);
                            ret.setMpCon(MapleDataTool.getInt("conMP", attackData, 0));
                            ret.attackAfter = MapleDataTool.getInt("attackAfter", attackData, 0);
                            ret.PADamage = MapleDataTool.getInt("PADamage", attackData, 0);
                            ret.MADamage = MapleDataTool.getInt("MADamage", attackData, 0);
                            ret.magic = MapleDataTool.getInt("magic", attackData, 0) > 0;
                            ret.isElement = attackData.getChildByPath("elemAttr") != null;
                            if (attackData.getChildByPath("range") != null) {
                                ret.range = MapleDataTool.getInt("range/r", attackData, 0);
                                if (attackData.getChildByPath("range/lt") != null && attackData.getChildByPath("range/rb") != null) {
                                    ret.lt = (Point) attackData.getChildByPath("range/lt").getData();
                                    ret.rb = (Point) attackData.getChildByPath("range/rb").getData();
                                }
                            }
                        }
                        if (ret == null) {
                            break;
                        }
                        stats.addMobAttack(ret);
                    }
                }

                int bodyDisease = MapleDataTool.getInt("bodyDisease", monsterInfoData, 0);
                if (bodyDisease > 0) {
                    stats.setBodyDisease(new Pair<>(bodyDisease, MapleDataTool.getInt("bodyDiseaseLevel", monsterInfoData, 1)));
                }

                byte hpdisplaytype = -1;
                if (stats.getTagColor() > 0) {
                    hpdisplaytype = 0;
                } else if (stats.isFriendly()) {
                    hpdisplaytype = 1;
                } else if (mobId >= 9300184 && mobId <= 9300215) { //武陵道場怪物
                    hpdisplaytype = 2;
                } else if (!stats.isBoss() || mobId == 9410066 || stats.isPartyBonus()) { // Not boss and dong dong chiang 9410066 = 吉祥舞獅怪
                    hpdisplaytype = 3;
                }
                stats.setHPDisplayType(hpdisplaytype);

                monsterStats.put(mobId, stats);
            } catch (Exception e) {
                log.error("getMonsterStats error:" + mobId, e);
                return null;
            }
        }
        return stats;
    }

    public static void decodeElementalString(MapleMonsterStats stats, String elemAttr) {
        for (int i = 0; i < elemAttr.length(); i += 2) {
            stats.setEffectiveness(Element.getFromChar(elemAttr.charAt(i)), ElementalEffectiveness.getByNumber(Integer.valueOf(String.valueOf(elemAttr.charAt(i + 1)))));
        }
    }

    private static boolean isDmgSponge(int mid) {
        switch (mid) {
            case 8810018: //闇黑龍王的靈魂
            case 8810118: //進階闇黑龍王
            case 8810119: //進階闇黑龍王
            case 8810120: //進階闇黑龍王
            case 8810121: //進階闇黑龍王
            case 8810122: //進階闇黑龍王
            case 8820009: //set0透明怪物
            case 8820010: //皮卡啾
            case 8820011: //皮卡啾
            case 8820012: //皮卡啾
            case 8820013: //皮卡啾
            case 8820014: //皮卡啾
            case 8820108: //寶寶BOSS召喚用透明怪物
            case 8820109: //set0透明怪物
            case 8820110: //混沌皮卡啾
            case 8820111: //混沌皮卡啾
            case 8820112: //混沌皮卡啾
            case 8820113: //混沌皮卡啾
            case 8820114: //混沌皮卡啾
            case 8820304: //混沌皮卡啾5階段
            case 8820303: //混沌皮卡啾4階段
            case 8820302: //混沌皮卡啾3階段
            case 8820301: //混沌皮卡啾2階段
            case 8820300: //混沌皮卡啾1階段
                return true;
        }
        return false;
    }

    public static MapleNPC getNPC(int nid, int mapid) {
        String name = getNpcName(nid);
        if (name == null) {
            return null;
        }
        MapleNPC npc = new MapleNPC(nid, name, mapid);
        StringBuilder sb = new StringBuilder(String.valueOf(nid)).append(".img");
        while (sb.length() < 11) {
            sb.insert(0, '0');
        }
        MapleData data = npcData.getData(sb.toString());
        if (data == null) {
            System.err.println("讀取NPC資料出錯, img檔案" + sb.toString());
            return npc;
        }
        MapleData info = data.getChildByPath("info");
        if (info != null) {
            npc.setMove(MapleDataTool.getInt(info.getChildByPath("forceMove"), 0) > 0);
        }
        MapleData move = data.getChildByPath("move");
        if (move != null) {
            npc.setMove(true);
        }
        return npc;
    }

    public static Map<Integer, String> getNpcNames() {
        return npcNames;
    }

    public static String getNpcName(int nid) {
        return npcNames.get(nid);
    }

    public static int getRandomNPC() {
        int ret = 0;
        List<Integer> vals = new ArrayList<>(npcNames.keySet());
        while (ret <= 0) {
            ret = vals.get(Randomizer.nextInt(vals.size()));
            if (npcNames.get(ret).contains("MISSINGNO")) {
                ret = 0;
            }
        }
        return ret;
    }

    public static class loseItem {

        private final int id;
        private final byte chance;
        private final byte x;

        private loseItem(int id, byte chance, byte x) {
            this.id = id;
            this.chance = chance;
            this.x = x;
        }

        public int getId() {
            return id;
        }

        public byte getChance() {
            return chance;
        }

        public byte getX() {
            return x;
        }
    }
}
