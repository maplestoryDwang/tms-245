/* 絕版樂豆點商店 帽子*/

var status = -1;
var itemList = Array(
Array(1001076, 200000),
Array(1000050, 200000),
Array(1004156, 200000),
Array(1004157, 200000),
Array(1003548, 100000),
Array(1003549, 100000),
Array(1004203, 100000),
Array(1004332, 100000),
Array(1004525, 100000),
Array(1004455, 100000),
Array(1004499, 100000),
Array(1004500, 100000),
Array(1004514, 100000),
Array(1004526, 100000),
Array(1004487, 100000),
Array(1004488, 100000),
Array(1004482, 100000),
Array(1004483, 100000),
Array(1004486, 100000),
Array(1004501, 100000),
Array(1004508, 100000),
Array(1004544, 100000),
Array(1004545, 100000),
Array(1004546, 100000),
Array(1004547, 100000),
Array(1004548, 100000),
Array(1004513, 100000),
Array(1004510, 100000),
Array(1004511, 100000),
Array(1004512, 100000),
Array(1000084, 100000),
Array(1004542, 100000),
Array(1004543, 100000),
//=====================
Array(1004167, 50000),
Array(1004282, 50000),
Array(1003952, 50000),
Array(1003131, 50000),
Array(1004094, 50000),
Array(1004112, 50000),
Array(1004211, 50000),
Array(1004193, 50000),
Array(1003859, 50000),
Array(1004137, 50000),
Array(1003831, 50000),
Array(1003955, 50000),
Array(1004095, 50000),
Array(1004029, 50000),
Array(1003204, 40000),
Array(1004110, 40000),
Array(1001083, 40000),
Array(1001095, 45000),
Array(1004200, 45000),
//Array(1003892, 50000),
Array(1004124, 50000),
Array(1003953, 50000),
Array(1001097, 40000),
Array(1000074, 40000),
Array(1004200, 40000),
//Array(1001076, 40000),
Array(1004204, 50000),
Array(1004205, 50000),
Array(1003950, 50000),
Array(1004126, 40000),
Array(1002846, 40000),
Array(1004158, 40000),
Array(1004114, 40000),
Array(1002598, 40000),
//Array(1004157, 100000),
//Array(1004156, 100000),
Array(1004025, 40000),
Array(1004093, 40000),
Array(1002845, 40000), //粉紅兔耳帽
Array(1002721, 40000), //狸毛護耳
Array(1002568, 40000), //手工編織髮夾
Array(1002888, 40000), //絲帶髮箍(紅色)
Array(1002890, 40000), //絲帶髮箍(藍色)
Array(1002863, 50000), //小熊熊可愛帽
Array(1003207, 50000), //胡蘿蔔兔爆炸頭
Array(1003051, 50000), //小狐狸
Array(1003048, 50000), //聖誕裝飾帽
Array(1002995, 50000), //皇家海軍帽
Array(1003012, 50000), //嫦娥髮式
Array(1002876, 50000), //聖誕紅髮夾
Array(1002839, 50000), //南瓜棒球帽
Array(1001048, 50000), //鬼娃娃帽
Array(1003214, 54000),
Array(1003141, 54000),
Array(1003269, 54000),
Array(1003268, 54000),
Array(1003492, 54000),
Array(1003493, 54000),
Array(1003494, 44000),
Array(1003495, 44000),
Array(1003496, 44000),
Array(1003519, 44000),
Array(1003520, 44000),
Array(1002726, 44000),
Array(1002524, 44000),
Array(1002714, 44000),
Array(1002841, 44000),
Array(1003220, 44000),
Array(1003170, 44000),
Array(1003226, 44000),
//Array(1000050, 44000),
Array(1003232, 44000),
Array(1001064, 44000),
Array(1001075, 44000),
Array(1003252, 44000),
Array(1003249, 44000),
Array(1001036, 44000),
Array(1002998, 44000),
Array(1003091, 44000),
Array(1003114, 44000),
Array(1003075, 44000),
Array(1000043, 44000),
Array(1003149, 44000),
Array(1002988, 44000),
Array(1003505, 45000),
Array(1003504, 45000),
//Array(1003965, 45000),
Array(1003964, 45000),
Array(1003920, 45000),
Array(1003921, 45000),
Array(1003918, 45000),
Array(1003861, 45000),
Array(1003865, 45000),
Array(1003919, 45000),
Array(1002566, 45000),
//Array(1003581, 45000),
Array(1003417, 44000),
Array(1003271, 44000),
Array(1003196, 44000),
Array(1003193, 44000),
Array(1003194, 44000)
//
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