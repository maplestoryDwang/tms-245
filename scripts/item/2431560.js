function start() {
    if (im.haveItem(1122224) && im.haveItem(1122230)) {
        im.sendSimple("你身上有#i1122224##t1122224#和#i1122230##t1122230#，你想進化哪一個？#b\r\n#L0##i1122224##t1122224##l\r\n#L1##i1122230##t1122230##l");
    } else {
        if(im.haveItem(1122224)) {
            action(1, 0, 0);
        } else if(im.haveItem(1122230)) {
            action(1, 0, 1);
        } else {
            im.sendOk("請確認你背包裡有#t1122224#或者#t1122230#。");
            im.dispose();
        }
    }
}

function action(mode, type, selection) {
    var i = -1;
    var chance = -1;
    var gain = -1;
    if (selection == 0) {
        i = 1122224;
        chance = 100;
        gain = 1122230;
    } else if (selection == 1) {
        i = 1122230;
        chance = 90;
        gain = 1122235;
    }
    if (i == -1) {
        im.sendOk("出現未知錯誤。")
        im.dispose();
        return;
    }
    var random = new java.util.Random();
    if(random.nextInt(100) <= chance) {
        if(im.canHold(i)) {
            im.used(1);
            im.gainItem(i, -1);
            im.gainLockItem(gain, 1, false, 0, "楓之谷勇士之心(海盜)");
        } else {
            im.sendOk("請確認你背包有足夠的空間。");
        }
    } else {
        im.used(1);
        im.sendOk("進化失敗。");
    }
    im.dispose();
}
