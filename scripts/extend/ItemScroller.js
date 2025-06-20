/*      
 *  
 *  功能：裝備砸卷
 *  
 */
var status;
var slot;
var invv;
var selected;
var statsSel;
var slot2;
var invv2;
var selected2;
var statsSel2;

function start() {
    status = -1;
    slot = Array();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
        case 0:
            var selStr = "我可以幫助你進行砸卷:\r\n\r\n#b";
            var inv = cm.getInventory(1);
            for (var i = 0; i <= inv.getSlotLimit(); i++) {
                slot.push(i);
                var it = inv.getItem(i);
                if (it == null) {
                    continue;
                }
                var itemid = it.getItemId();
                selStr += "#L" + (1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
            }
            cm.sendSimple(selStr + "#k");
            break;
        case 1:
            invv = (selection / 1000) | 0;
            selected = (selection % 1000) | 0;
            var inzz = cm.getInventory(invv);
            if (selected >= inzz.getSlotLimit()) {
                cm.sendOk("錯誤，請重試.");
                cm.dispose();
                return;
            }
            statsSel = inzz.getItem(slot[selected]);
            if (statsSel == null) {
                cm.sendOk("錯誤，請重試.");
                cm.dispose();
                return;
            }
            cm.sendYesNo("你想對#v" + statsSel.getItemId() + "##t" + statsSel.getItemId() + "#進行砸卷麼?");
            break;
        case 2:
            var selStr2 = "選擇一個卷軸:\r\n\r\n#b";
            var inv2 = cm.getInventory(1);
            for (var i2 = 0; i2 <= inv2.getSlotLimit(); i2++) {
                slot2.push(i2);
                var it2 = inv2.getItem(i2);
                if (it2 == null) {
                    continue;
                }
                var itemid2 = it2.getItemId();
                selStr += "#L" + (1000 + i2) + "##v" + itemid2 + "##t" + itemid2 + "##l\r\n";
            }
            cm.sendSimple(selStr2 + "#k");
            break;
        case 3:
            invv2 = (selection / 1000) | 0;
            selected2 = (selection % 1000) | 0;
            var inzz2 = cm.getInventory(invv2);
            if (selected2 >= inzz2.getSlotLimit()) {
                cm.sendOk("錯誤，請重試.");
                cm.dispose();
                return;
            }
            statsSel2 = inzz2.getItem(slot2[selected2]);
            if (statsSel2 == null) {
                cm.sendOk("錯誤，請重試.");
                cm.dispose();
                return;
            }
            cm.sendYesNo("你想使用 #v" + statsSel2.getItemId() + "##t" + statsSel2.getItemId() + "#?");
            break;
        case 4:
            if (cm.scrollItem(slot2[selected2], slot1[selected1])) {
                cm.sendOk("砸捲成功!");
            } else {
                cm.sendOk("該物品無法使用這個卷軸.");
            }
            cm.dispose();
            break;
    }
}
