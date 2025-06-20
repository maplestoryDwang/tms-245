/*
    Keroben - Leafre Cave of life - Entrance
*/

var morph;
var status = -1;

function start() {
    status = -1;
    morph = 0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
    status++;
    } else {
    status--;
    }

    if (status == 0) {
    morph = cm.getMorphState();
    if (morph == 2210003 || cm.isQuestFinished(7301)) {
        cm.sendNext("Oh, my Brother! Don't worry about human's invasion. I'll protect you all. Come in.");
    } else {
        var hp = cm.getPlayerStat("HP");
        if (hp > 500) {
        cm.addHP(-500);
        } else if (hp > 1 && hp <= 500) {
        cm.addHP(-(hp - 1));
        }
        cm.sendNext("That's far enough, human! No one is allowed beyond this point. Get away from here!");
    }
    } else if (status == 1) {
    if (morph == 2210003 || cm.isQuestFinished(7301)) {
        cm.cancelItem(2210003);
        cm.warp(240050000, 0);
        if (cm.haveItem(4031454)) { // Paladin
        cm.gainItem(4031454, -1);
        cm.gainItem(4031455, 1);
        }
        if (cm.getQuestStatus(6169) == 1) { // Temporary
        cm.gainItem(4031461, 1);
        }
    } else {
        cm.warp(240040600, "st00");
    }
    cm.dispose();
    }
}
