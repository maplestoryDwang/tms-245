/**
 *Mary
 */
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "你好,使用100個#v4000016#可以兌換一下其中一個物品\r\n#L0##v2340000##L1##v2049100#";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.itemQuantity(4000016) >=100){
        cm.gainItem(4000016,-100);
        cm.gainItem(2340000,1);//祝福卷軸
                cm.sendOk("兌換#v2340000#x1成功.請查看背包");
        cm.dispose();
            } else {
                cm.sendOk("你沒有100個#v4000016#");
        cm.dispose();
            }
            break;
        case 1:
            if (cm.itemQuantity(4000016) >=100){
        cm.gainItem(4000016,-100);
        cm.gainItem(2049100,1);//混沌卷軸
                cm.sendOk("兌換#v2049100#x1成功.請查看背包");
        cm.dispose();
            } else {
                cm.sendOk("你沒有100個#v4000016#");
        cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4000016) >=100){
        cm.gainItem(4000016,-100);
        cm.gainItem(1012191,1);//影武者面巾
                cm.sendOk("兌換#v1012191#x1成功.請查看背包");
        cm.dispose();
            } else {
                cm.sendOk("你沒有100個#v4000016#");
        cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4000016) >=100){
        cm.gainItem(4000016,-100);
        cm.gainItem(1022097,1);//龍眼鏡
                cm.sendOk("兌換#v1022097#x1成功.請查看背包");
        cm.dispose();
            } else {
                cm.sendOk("你沒有100個#v4000016#");
        cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4000016) >=100){
        cm.gainItem(4000016,-100);
        cm.gainItem(1132013,1);//不滅的法老腰帶
                cm.sendOk("兌換#v1132013#x1成功.請查看背包");
        cm.dispose();
            } else {
                cm.sendOk("你沒有100個#v4000016#");
        cm.dispose();
            }
            break;
        }
    }
}