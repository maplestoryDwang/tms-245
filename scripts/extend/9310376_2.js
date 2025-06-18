/* 絕版樂豆點商店披風 */

var status = -1;
var itemList = Array(
Array(1102653, 5000),
Array(1102466, 1000),
Array(1102572, 1000),
Array(1102309, 1000),
Array(1102308, 5000),
Array(1102307, 5000),
Array(1102757, 5000),
Array(1102709, 5000),
Array(1102699, 5000),
Array(5010101, 5000),
Array(1102376, 5000),
Array(1102548, 5000),
Array(1102587, 5000),
Array(1102511, 5000),
Array(1102683, 5000),
Array(1102705, 5000),
Array(1102550, 5000),
Array(1102620, 5000),
Array(1102583, 4000),
Array(1102676, 4500),
Array(1102644, 5000),
Array(1102726, 5000),
Array(1102142, 4000),
Array(1102697, 4000),
Array(1102688, 4000),
Array(1102669, 4000),
Array(1102225, 3000), //嫦娥披風
Array(1102217, 3000), //九尾披風
Array(1102157, 3000), //傀儡枷鎖
Array(1102503, 1000),
Array(1102380, 1400),
Array(1102385, 1400),
Array(1102386, 1400),
Array(1102238, 1400),
Array(1102245, 1400),
Array(1102285, 1400),
Array(1102286, 1400),
Array(1102287, 1400),
Array(1102270, 1400),
Array(1102273, 1400),
Array(1102288, 1400),
Array(1102253, 1400),
Array(1102298, 1400),
Array(1102299, 1400),
Array(1102297, 1400),
Array(1102319, 1400),
Array(1102272, 1400),
Array(1102323, 1400),
Array(1102324, 1400),
Array(1102349, 1400),
Array(1102325, 1400),
Array(1102326, 1400),
Array(1102338, 1400),
Array(1102350, 1400),
Array(1102374, 1400),
Array(1102353, 1400),
Array(1102357, 1400),
Array(1102593, 1500),
Array(1102564, 1500),
Array(1102615, 1500),
Array(1102453, 5000), 
Array(1102450, 5000), 
Array(1102451, 5000), 
Array(1102452, 5000), 
Array(1102511, 5000), 
Array(1102385, 5000), 
Array(1102386, 5000), 
Array(1102487, 5000)
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