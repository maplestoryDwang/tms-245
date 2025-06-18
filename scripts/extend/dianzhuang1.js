/* 絕版樂豆點商店 武器 */

var status = -1;
var itemList = Array(
Array(1702608, 40000),
Array(1702607, 40000),
Array(1702577, 40000),
Array(1702576, 60000),
Array(1702584, 60000),
Array(1702583, 60000),
//Array(1702565, 60000),
Array(1702570, 60000),
Array(1702581, 60000),
Array(1702564, 60000),
Array(1702571, 60000),
Array(1702574, 60000),
Array(1702566, 60000),
//Array(1702567, 60000),
Array(1702544, 60000),
Array(1702376, 60000),
Array(1702587, 60000),
Array(1702591, 60000),
Array(1702585, 60000),
Array(1702586, 60000),
Array(1702477, 60000),
Array(1702559, 60000),
Array(1702571, 60000),
Array(1702560, 60000),
Array(1702567, 60000),
Array(1702566, 50000),
Array(1702507, 50000),
Array(1702489, 50000),
Array(1702486, 50000),
Array(1702488, 50000),
Array(1702557, 50000),
Array(1702534, 50000),
Array(1702533, 50000),
Array(1702505, 50000),
Array(1702503, 50000),
Array(1702528, 50000),
Array(1702501, 50000),
Array(1702305, 50000),
Array(1702478, 50000),
Array(1702530, 50000),
Array(1702382, 50000),
Array(1702466, 50000),
Array(1702334, 50000),
Array(1702480, 50000),
Array(1702485, 50000),
Array(1702509, 50000),
Array(1702013, 50000),
Array(1702374, 50000),
Array(1702512, 50000),
Array(1702459, 50000),
Array(1702508, 50000),
Array(1702233, 50000),
Array(4000897, 50000),
Array(1702228, 50000), //可可香蕉
Array(1702155, 50000), //絢麗彩虹
Array(1702182, 50000), //洛麗波板糖
Array(1702208, 50000), //搞怪鱷魚
Array(1702285, 50000), //藍色蝴蝶結手提包
Array(1702302, 50000), //杯具
Array(1702261, 50000), //櫻花棒
Array(1702091, 50000), //網球拍
Array(1702168, 50000), //閃亮聖誕樹
//Array(1702367, 50000),
Array(1702341, 50000),
Array(1322102, 50000),
Array(1702366, 50000),
Array(1702352, 50000),
Array(1302037, 50000),
Array(1302061, 50000),
Array(1302063, 50000),
Array(1302080, 50000),
Array(1302084, 50000),
Array(1302085, 50000),
Array(1302087, 50000),
Array(1302169, 50000),
Array(1322051, 50000),
Array(1332032, 50000),
Array(1332053, 50000),
Array(1372017, 50000),
Array(1372031, 50000),
Array(1402037, 50000),
Array(1402049, 50000),
Array(1402063, 50000),
Array(1422011, 50000),
Array(1432039, 50000),
Array(1432046, 50000),
Array(1442026, 50000),
Array(1442065, 50000),
Array(1442088, 50000),
Array(1472063, 50000),
Array(1702342, 50000),
Array(1702337, 50000),
Array(1702335, 50000),
Array(1702330, 50000),
Array(1702346, 50000),
Array(1702341, 50000),
Array(1702340, 50000),
Array(1702324, 50000),
Array(1322102, 50000),
Array(1412056, 50000),
Array(1402110, 50000),
Array(1702310, 50000),
Array(1702329, 50000),
Array(1702316, 50000),
Array(1702309, 50000),
Array(1702408, 50000),
Array(1702415, 50000),
Array(1702403, 50000),
Array(1702402, 50000),
//Array(1702375, 50000),
Array(1702348, 50000),
Array(1702442, 50000),
Array(1702422, 50000),
Array(1702446, 50000),
Array(1702422, 50000)
);
var selectedItem = -1;
var selectedCost = -1;

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
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k   #r" + itemList[i][1]  + "#k樂豆點#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 樂豆點？");
        } else {
            cm.sendOk("出現錯誤...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("購買道具出現錯誤...");
            cm.dispose();
            return;
        }
        if (cm.haveItem(4220098,1)){
            selectedCost = 1 ;
        }
        if (cm.getPlayer().getCSPoints(1) >= selectedCost) {
            var gachaponItem = cm.gainGachaponItem(selectedItem, 1, "樂豆點商店", 3, true);
            if (gachaponItem != -1) {
                cm.gainNX( - selectedCost );
                cm.sendOk("恭喜您成功購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("購買失敗，請您確認在背包所有欄目窗口中是否有一格以上的空間。");
            }
        } else {
            cm.sendOk("您沒有那麼多樂豆點。\r\n\r\n購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r" + selectedCost + "#k 樂豆點。");
        }
        cm.dispose();
    }
}