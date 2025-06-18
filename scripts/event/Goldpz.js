/*
 完成時間：2016年4月6日 21:15:06
 製作作者：AND。Q3812049
 腳本功能：方塊副本
 */

var Round = 0;
var j = 0;
var i = 0;
var HP = 510000;
var attack = 1500;
var MobList =
        Array(
                2400107, // - 幽靈訓練師
                8160000, // - [★] 時間門神
                8250028, // - 藍色導彈智能機器人
                7120100, // - 布索
                8147008, // - 被污染的樹精靈
                8211001, // - 鑰匙看守盧梭
                9480240, // - 多多
                2400018, // - 弱化的幽靈劍士
                8800401, // - 毒黃蜂
                8610017 // - 哨兵
                );
var MobBosslist = 
         Array(
                8800400, // - 阿卡伊農
                8870000,// - 希拉
                8210010,//凡雷恩
                2600800,//軍團長威爾
                8300007//梅格耐斯
         );

function init() {
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    Round = 0;
    j = 0;
    i = 0;
    attack = 1500;
    meso = 1500000;
    HP = 510000;
    var eim = em.newInstance("Goldpz");
    var map = eim.setInstanceMap(913070200);//南哈特的考場
    map.setSpawns(false);
    eim.startEventTimer(1000 * 60 * 60);//60 min
    map.killAllMonsters(true);
    em.setProperty("started", "true");
    em.setProperty("Round", "0");
    em.schedule("SpwnMobForPlayer", 1000 * 15, eim);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
    eim.broadcastPlayerMsg(5, "歡迎來到 <方塊副本> 怪物將在15秒後抵達戰場，請當前消滅怪物直至15波。 ");
    eim.broadcastPlayerMsg(-1, "歡迎來到 <方塊副本> 怪物將在15秒後抵達戰場，請當前消滅怪物直至15波。 ");
}

function SpwnMobForPlayer(eim) {
    var mapForMob = eim.setInstanceMap(913070200);
    var i = Round;
        if(i >= 10){
        SpawnBoss(eim);
        }else{
                var mobid = MobList[i];
        var mob = em.getMonster(mobid);
    var stats = mob.getStats();
    stats.setHp(HP);
    stats.setMp(mob.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob.disableDrops();
    eim.registerMonster(mob);
    mapForMob.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-2780, -152));//待定1

    var mobid = MobList[i];
    var mob1 = em.getMonster(mobid);
    var stats = mob1.getStats();
    stats.setHp(HP);
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob1.disableDrops();
    eim.registerMonster(mob1);
    var mapForMob1 = eim.getMapInstance(913070200);
    mapForMob1.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(-2617, -152));//待定2

    for (p=0;p<2 ;p++ ){
            var mobid = MobList[i];
    var mob2 = em.getMonster(mobid);
    var stats = mob2.getStats();
    stats.setHp(HP);
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    eim.registerMonster(mob2);
    var mapForMob2 = eim.getMapInstance(913070200);
    mapForMob2.spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-2278, -212));//待定3
    }

    for (p=0;p<2 ;p++ ){
            var mobid = MobList[i];
    var mob3 = em.getMonster(mobid);
    var stats = mob3.getStats();
    stats.setHp(HP);
    stats.setMp(mob3.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob3.disableDrops();
    eim.registerMonster(mob3);
    var mapForMob3 = eim.getMapInstance(913070200);
    mapForMob3.spawnMonsterOnGroundBelow(mob3, new java.awt.Point(-2410, -452));//待定4
    }

    for (p=0;p<2 ;p++ ){
            var mobid = MobList[i];
    var mob4 = em.getMonster(mobid);
    var stats = mob4.getStats();
    stats.setHp(HP);
    stats.setMp(mob4.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob4.disableDrops();
    eim.registerMonster(mob4);
    var mapForMob4 = eim.getMapInstance(913070200);
    mapForMob4.spawnMonsterOnGroundBelow(mob4, new java.awt.Point(-2689, -452));//待定5
    }

    for (p=0;p<3 ;p++ ){
            var mobid = MobList[i];
    var mob5 = em.getMonster(mobid);
    var stats = mob5.getStats();
    stats.setHp(HP);
    stats.setMp(mob5.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob5.disableDrops();
    eim.registerMonster(mob5);
    var mapForMob5 = eim.getMapInstance(913070200);
    mapForMob5.spawnMonsterOnGroundBelow(mob5, new java.awt.Point(-1957, -512));//待定6
    }

    for (p=0;p<2 ;p++ ){
            var mobid =MobList[i];
    var mob6 = em.getMonster(mobid);
    var stats = mob6.getStats();
    stats.setHp(HP);
    stats.setMp(mob6.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob6.disableDrops();
    eim.registerMonster(mob6);
    var mapForMob6 = eim.getMapInstance(913070200);
    mapForMob6.spawnMonsterOnGroundBelow(mob6, new java.awt.Point(-1437, -212));//待定7
    }

        for (p=0;p<2 ;p++ ){
                var mobid =MobList[i];
    var mob7 = em.getMonster(mobid);
    var stats = mob7.getStats();
    stats.setHp(HP);
    stats.setMp(mob7.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob7.disableDrops();
    eim.registerMonster(mob7);
    var mapForMob7 = eim.getMapInstance(913070200);
    mapForMob7.spawnMonsterOnGroundBelow(mob7, new java.awt.Point(-2092, 88));//待定8
        }
        for (p=0;p<2 ;p++ ){
                var mobid =MobList[i];
    var mob8 = em.getMonster(mobid);
    var stats = mob8.getStats();
    stats.setHp(HP);
    stats.setMp(mob8.getMobMaxMp());
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob8.disableDrops();
    eim.registerMonster(mob8);
    var mapForMob8 = eim.getMapInstance(913070200);
    mapForMob8.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(-2836, 88));//待定9
        }
        for (p=0;p<2 ;p++ ){
                var mobid =MobList[i];
    var mob8 = em.getMonster(mobid);
    var stats = mob8.getStats();
    stats.setHp(HP);
    stats.setPhysicalAttack(attack);
    stats.setMagicAttack(attack);
    mob8.disableDrops();
    eim.registerMonster(mob8);
    var mapForMob8 = eim.getMapInstance(913070200);
    mapForMob8.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(-1320, 88));//待定10
        }
        for (p=0;p<2 ;p++ ){
                var mobid =MobList[i];
    var mob8 = em.getMonster(mobid);    
    mob8.getStats().setHp(HP);
    mob8.getStats().setMp(mob8.getMobMaxMp());
    mob8.getStats().setPhysicalAttack(attack);
    mob8.getStats().setMagicAttack(attack);
    mob8.disableDrops();
    eim.registerMonster(mob8);
    var mapForMob8 = eim.getMapInstance(913070200);
    mapForMob8.spawnMonsterOnGroundBelow(mob8, new java.awt.Point(-1718, 88));//待定9
        }
    }
    HP = HP*1.4;
    attack = attack+400;
}
function SpawnBoss(eim) {
    var mapForMob8 = eim.getMapInstance(913070200);
    var mobid = MobBosslist[j];//這裡有個參數j
    var hp = 100000000+j*300000000;
    var mob = em.getMonster(mobid);
    mob.getStats().setHp(hp);
    mob.getStats().setMp(mob.getMobMaxMp());
    
    mob.disableDrops();
    eim.registerMonster(mob);
    mapForMob8.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-2241, 88));//待定1
    j = j+1;

}
function playerDead(eim, player) {
    //em.setProperty("started", "false");
    //eim.disposeIfPlayerBelow(100, 910000001);
    //clearPQ(eim);
}

function playerRevive(eim, player) {
}

function scheduledTimeout(eim) {
    eim.broadcastPlayerMsg(5, "<方塊副本> ：時間到!!當前已經打通了["+(Round-1)+"]波，獎勵已經發送。 ");
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
    eim.disposeIfPlayerBelow(100, 910000001);
}

function changedMap(eim, player, mapid) {
    if (mapid == 913070200) {
        return;
    }
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
    eim.unregisterPlayer(player);
    clearPQ(eim);
}

function playerDisconnected(eim, player) {
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
    eim.disposeIfPlayerBelow(100, 910000001);
    clearPQ(eim);
    return 0;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    playerExit(eim, player);
}

function disbandParty(eim) {//組隊解散後果
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
    eim.disposeIfPlayerBelow(100, 910000001);
    clearPQ(eim);
}

function playerExit(eim, player) {
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
    eim.unregisterPlayer(player);
    var map = eim.getMapFactoryMap(910000001);
    player.changeMap(map, map.getPortal(0));
    clearPQ(eim);
}

function clearPQ(eim) {
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
    eim.disposeIfPlayerBelow(100, 910000000);
}

function allMonstersDead(eim) {
    Round = Round + 1 ;
    if(Round == 15){
        eim.broadcastPlayerMsg(-1, "<方塊副本> ：已經消滅了15波了，所有獎勵都已經自動入包,10秒後自動退出副本! ");
        eim.broadcastPlayerMsg(5, "<方塊副本> ：已經消滅了15波了，所有獎勵都已經自動入包,10秒後自動退出副本! ");
        eim.startEventTimer(1000 * 10);
        em.schedule("clearPQ", 1000 * 8, eim);
    }else{
        eim.broadcastPlayerMsg(5, "<方塊副本> ：當前為第"+Round+"波,10秒後將召喚下一波 ");
    eim.broadcastPlayerMsg(-1, "<方塊副本> ：當前為第"+Round+"波,10秒後將召喚下一波 ");
    em.schedule("SpwnMobForPlayer", 1000 * 8, eim);
    }
    var map = em.getMapFactoryMap(913070200);
    var players = map.getCharacters().iterator();
    while (players.hasNext()) {
       var player = players.next();
       player.openNpc(9310362,"JinBi2");
    }
}

function cancelSchedule() {
    em.setProperty("started", "false");
    em.setProperty("Round", "0");
}

function monsterDrop(eim, player, mob) {
}
function monsterDamaged(eim, player, mobid, damage) {
    //em.monsterDamaged(em.getPlayer(),em.getMonster(8800400),12345);
}
