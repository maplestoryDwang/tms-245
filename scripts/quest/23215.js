var status = -1;

function end(mode, type, selection) {
    start(mode,type,selection);
}

function end(mode, type, selection) {
    if (mode == 0) {
    if (status == 0) {
        qm.sendNext("This is an important decision to make.");
        qm.safeDispose();
        return;
    }
    status--;
    } else {
    status++;
    }
    if (status == 0) {
    qm.sendYesNo("Have you made your decision? The decision will be final, so think carefully before deciding what to do. Are you sure you want to become a Demon Slayer?");
    } else if (status == 1) {
    qm.sendNext("I have just molded your body to make it perfect for a Demon Slayer. If you wish to become more powerful, use Stat Window (S) to raise the appropriate stats. If you arn't sure what to raise, just click on #bAuto#k.");
    if (qm.getJob() == 3111) {
        qm.teachSkill(31120011, 1, 1);
        qm.changeJob(3112);
        qm.teachSkill(30011159, 1, 1);
    }
    qm.forceCompleteQuest();
    } else if (status == 2) {
    qm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Resistance to carry.");
    } else if (status == 3) {
    qm.sendNextPrev("Now... I want you to go out there and show the world how the Resistance operate.");
    qm.safeDispose();
    }
}
