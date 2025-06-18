/* 
 * 測試腳本
 */

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(level, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("NewEvent4");
    eim.setInstanceMap(321190300).resetPQ(level);
    eim.setInstanceMap(321190310).resetPQ(level);
    eim.setInstanceMap(321190320).resetPQ(level);
    var map = eim.setInstanceMap(321190350);
    map.resetFully();
    em.getMapFactory().getMap(321190350).killAllMonsters(false);
    var mob = em.getMonster(8810000);//黑龍的頭
    mob.getStats().setHp(mob.getMobMaxHp() * 10);
    mob.getStats().setMp(mob.getMobMaxMp() * 10);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(959, 229));
    eim.startEventTimer(1000 * 60 * 30); //30 min
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
    if (mapid < 321190300 || mapid > 321190350) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(100, 910000000);
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
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function allMonstersDead(eim) {
    //em.broadcastYellowMsg("[系列-弓箭手村]已被擊敗，勇士們解放了！");
    //em.broadcastServerMsg(5120059, "[系列-神木村]已被擊敗，請在10秒內點擊蛋蛋龍獲得獎勵。" ,true);
    //eim.startEventTimer(1000 * 10); //10 min
    //eim.getMapInstance(4).spawnNpc(9900007, new java.awt.Point(257, 245));
}


function leftParty(eim, player) {}
function disbandParty(eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}
function monsterDrop(eim, player, mob) {}