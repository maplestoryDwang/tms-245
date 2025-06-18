/* 絕版樂豆點商店  戒子*/

var status = -1;
var itemList = Array(
Array(1112943, 200000),
Array(1112940, 200000),
Array(1112160, 100000),
Array(1112272, 100000),
Array(1112273, 100000),
Array(1112161, 100000),
Array(1112174, 100000),
Array(1112286, 100000),
Array(1112175, 100000),
Array(1112287, 100000),
Array(1112176, 100000),
Array(1112288, 100000),
Array(1112191, 100000),
Array(1115004, 100000),
Array(1112190, 100000),
Array(1115003, 100000),
Array(1112958, 100000),
Array(1112959, 100000),
//===================
Array(1112924, 100000),
Array(1112928, 100000),
Array(1112937, 100000),   
Array(1112170, 100000), 
Array(1112282, 100000),
Array(1112166, 100000),
Array(1112278, 100000), 
Array(1112176, 100000),
Array(1112288, 100000), 
Array(1112254, 100000),
Array(1112143, 100000),
Array(1112158, 100000),
Array(1112270, 100000),
Array(1112157, 100000),
Array(1112269, 100000),
Array(1112178, 80000),
Array(1112290, 80000),
Array(1112162, 80000),
Array(1112274, 80000),
Array(1112159, 80000),
Array(1112271, 80000),
Array(1112268, 80000),
Array(1112156, 80000),
Array(1112266, 50000),
Array(1112154, 50000),
Array(1112149, 50000),
Array(1112261, 50000),
Array(1112177, 50000),
Array(1112289, 50000),
Array(1112100, 50000),
Array(1112181, 50000),
Array(1112294, 50000),
Array(1112150, 50000),
Array(1112262, 50000),
Array(1112263, 50000),
Array(1113021, 50000),
Array(1112151, 50000),
Array(1112263, 50000),
Array(1112155, 50000),
Array(1112267, 50000),
Array(1112236, 50000),
Array(1112126, 50000),
Array(1112904, 50000), //彩虹星環繞戒指
Array(1112238, 50000), //水墨花聊天戒指
Array(1112135, 50000), //水墨花名片戒指
Array(1112916, 50000), //寂寞單身戒指
Array(1112118, 50000), //可樂名片戒指
Array(1112119, 50000), //可樂(Red) 名片戒指
Array(1112120, 50000), //可樂(White) 名片戒指
Array(1112228, 50000), //可樂聊天戒指
Array(1112229, 50000), //可樂(Red)聊天戒指
Array(1112230, 50000),  //可樂(White)聊天戒指
Array(1112103, 50000),
Array(1112141, 50000),
Array(1112252, 50000),
Array(1112253, 50000),
Array(1112142, 50000),
Array(1112930, 50000),
Array(1112136, 50000),
Array(1112920, 54000),
Array(1112145, 55000),
Array(1112257, 55000),
Array(1112146, 55000),
Array(1112258, 35000),
Array(1112101, 35000),
Array(1112907, 35000),
Array(1112204, 35000)
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