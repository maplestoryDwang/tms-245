/* 樂豆點商店 - 雙倍道具經驗卡 */

var status = -1;

var itemList = Array(
Array(1112915, 1), 
Array(1112793, 1),  
Array(1112920, 1), 
Array(1112160, 1),  
Array(1112272, 1),
Array(1112162, 1),
Array(1112274, 1),
Array(1112161, 1),
Array(1112273, 1),
Array(1112940, 1),
Array(1112937, 1),
Array(1112901, 1),
Array(1112925, 1),
Array(1112904, 1),
Array(1112148, 1),
Array(1112259, 1),
Array(1112155, 1),
Array(1112267, 1),
Array(1112268, 1),
Array(1112156, 1),
Array(1112229, 1),
Array(1112119, 1),
Array(1112230, 1),
Array(1112103, 1),
Array(1112238, 1),
Array(1112135, 1),
Array(1112150, 1),
Array(1112262, 1),
Array(1112151, 1),
Array(1112263, 1),
Array(1112145, 1),
Array(1112257, 1),
Array(1112143, 1),
Array(1112254, 1),
Array(1112142, 1),
Array(1112253, 1),
Array(1112159, 1),
Array(1112271, 1),
Array(1112152, 1),
Array(1112264, 0)
);
var itemId = -1;
var points = -1;
var period = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#親愛的#r#h ##k您好，請選擇您希望購買的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1] + "#k樂豆點#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            itemId = item[0];
            points = item[1];
            period = item[2];
            cm.sendYesNo("您是否購買#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 樂豆點？");
        } else {
            cm.sendOk("出現錯誤...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (itemId <= 0 || points <= 0 || period <= 0) {
            cm.sendOk("購買道具出現錯誤...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= points) {
            if (cm.haveItem(itemId)) {
                cm.sendOk("您已經擁有#i" + itemId + ":# #b#t" + itemId + "##k無需重複購買。");
            } else {
                cm.gainNX( - points);
                cm.gainItemPeriod(itemId, 1, period);
                cm.sendOk("恭喜您成功購買#i" + itemId + ":# #b#t" + itemId + "##k。");
                cm.dispose();
            }
        } else {
            cm.sendOk("您沒有那麼多樂豆點。\r\n\r\n購買#i" + itemId + ":# #b#t" + itemId + "##k 需要 #r" + points + "#k 樂豆點。");
        }
        cm.dispose();
    }
}