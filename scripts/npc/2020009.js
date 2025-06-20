var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 50) {
        cm.sendOk("以你現在的等級，是無法靠近殘暴炎魔的。至少必須達到50級……");
        cm.dispose();
        return;
    }
    if (cm.getJob() >= 200 && cm.getJob() < 300) {
        cm.sendSimple("你來這裡有什麼事嗎?#b\r\n#L0#我想挑戰殘暴炎魔。#l\r\n#L1#沒什麼事。#l");
    } else {
        cm.sendNext("你是想探索殘暴炎魔副本嗎？但是你不是魔法師，我沒辦法對你進行判斷。你去找職業對應的長老吧。");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        if (selection == 0) {
            cm.sendNext("那麼，我現在就將你送往#b阿杜比斯#k所在的#b通向殘暴炎魔的門#k。");
        } else if (selection == 1) {
            cm.sendOk("這樣啊。你可真無聊。如果有什麼事的話，隨時再來吧。");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(211042300);
        cm.dispose();
    }
}
