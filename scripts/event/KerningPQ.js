/*  
 *  
 *  功能：組隊任務：廢棄都市
 *  
 */
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("randoms", "0");
    em.setProperty("leader", "true");
    var eim = em.newInstance("KerningPQ");
    eim.setInstanceMap(910340100).resetPQ(level);
    eim.setInstanceMap(910340200).resetPQ(level);
    eim.setInstanceMap(910340300).resetPQ(level);
    eim.setInstanceMap(910340400).resetPQ(level);
    eim.setInstanceMap(910340500).resetPQ(level);
    var mob = em.getMonster(9300003);
    eim.registerMonster(mob);
    mob.getStats().setChange(true);
    mob.changeLevel(level);
    eim.getMapInstance(4).spawnMonsterOnGroundBelow(mob, new java.awt.Point(32, -435));
    eim.startEventTimer(1000 * 60 * 30);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != 910340100 && mapid != 910340200 && mapid != 910340300 && mapid != 910340400 && mapid != 910340500) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 910340000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function playerDisconnected(eim, player) {
    if (eim.disposeIfPlayerBelow(2, 910340000)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
    return 0;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function allMonstersDead(eim) {
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}
function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}
function pickUpItem(eim, player, itemID) {
}