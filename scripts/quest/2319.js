/*
            Resonance
    NPC Name:     Scarrs
    Map(s):     Mushroom Castle: Corner of Mushroom Forest(106020000)
    Description:     Quest -  奇拉蘑菇孢子(3)
*/



var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendOk("I know it's not a tough task, so come back to me if you're ready.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendYesNo("Oh, I almost forgot! What was I thinking? I need you to hand this #bSample of Killer Mushroom Spores#k to #bMinister of Magic#k and report the results.");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.gainItem(4032389, 1);
        qm.sendOk("The #bMinister of Magic#k told me once the #bKiller Mushroom Spores#k is complete, that he'll want a sample of it as well. I'll give you the sample; now go please hand it in to our #bMinister of Magic.#k");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendOk("Are the #bKiller Mushroom Spores#k finally completed?");
    } else if (status == 1) {
        qm.gainExp(4200);
        qm.gainItem(4032389, -1);
        qm.sendOk("Okay, so this is the #bKiller Mushroom Spores.#k Thank you, thank you, and please tell #bScarrs#k the same.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
