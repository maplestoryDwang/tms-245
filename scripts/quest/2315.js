/*
            Resonance
    NPC Name:     Minister of Home Affairs
    Map(s):     Mushroom Castle: Corner of Mushroom Forest(106020000)
    Description:     Quest -  探索蘑菇森林(2)
*/



var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendOk("Please do not forget our plea for help.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendYesNo("A powerful barrier of magic, huh? Then what should we do...? If we can't find a way to break that barrier, then we can't save the princess. If it's impossible to physically break through, as you mentioned, then how about requesting help from our #bMinister of Magic#k?");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("Please go see him immediately. The #bMinister of Magic#k may seem a bit on the edge, but he's very knowledgeable, and I'm sure he'll know what to do.");
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
        qm.sendOk("What? You investigated the barrier at the Mushroom Forest?");
    } else if (status == 1) {
        qm.gainExp(4000);
        qm.sendOk("Hmmm...this is interesting. It's a barrier set up by someone with a powerful force of magic, which means there's no way we can manually break through it.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}
