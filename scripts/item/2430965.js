var status = -1;

function start() {
    if (im.getInventory(2).getSlotLimit() < 128) {
        im.sendYesNo("#t2430965#使用的話設置可將欄位擴充超過4個.現在設置要擴充欄位嗎?");
    } else {
        im.sendNext("欄位已達到上限");
        im.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == -1) {
            im.sendNext("下次設置想要擴充欄位的話在雙點擊道具看看");
            im.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        if (im.haveItem(2430965)) {
            im.remove();
            im.expandInventory(2, 4);
            im.sendNext("成功地設置欄位數增加" + im.getInventory(2).getSlotLimit() + "個。");
        }
        im.dispose();
    }
}