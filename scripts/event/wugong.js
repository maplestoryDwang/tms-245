/* 
 * 蜈蚣
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("wogong");
    var map = eim.setInstanceMap(401100100);
    map.resetFully();
    eim.getMapFactoryMap(401100100).killAllMonsters(false);//701010323 危險的山丘
    map.spawnNpc(9310007, new java.awt.Point(564, -119));
    var mob = em.getMonster(2600311);//9300478蜈蚣妖怪
    mob.changeLevel(210);
    mob.getChangedStats().setOHp(2000000000);
    mob.setHp(2000000000);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(59, 181));
    eim.startEventTimer(1000 * 60 * 10); // 10 min
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function changedMap(eim, player, mapid) {
    if (mapid != 401100100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910340700);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910340700);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    //eim.broadcastServerMsg(5120027, "蜈蚣妖怪被消滅了" ,true);
}

function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function pickUpItem(eim, player, itemID) {
}