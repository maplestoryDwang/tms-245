/* 樂豆點商店 */

var status = -1;
var itemList = Array(
Array(5010044, 50000),
Array(1003204, 40000),
Array(1004110, 40000),
Array(1702466, 40000),
Array(1001083, 40000),
Array(1702334, 40000),
Array(1102583, 40000),
Array(1702480, 40000),
Array(1052727, 45000),
Array(1072808, 45000),
Array(1102676, 45000),
Array(1001095, 45000),
Array(1050310, 45000),
Array(1702485, 45000),
Array(1004200, 45000),
Array(1072862, 50000),
Array(1102644, 50000),
Array(1042159, 50000),
Array(1112263, 30000),
Array(1113021, 50000),
Array(1112151, 30000),
Array(1062171, 50000),
Array(1042285, 50000),
Array(1003892, 50000),
Array(1042275, 50000),
Array(1052656, 50000),
Array(1004124, 50000),
Array(1003953, 50000),
Array(1072919, 40000),
Array(1051366, 40000),
Array(1004125, 40000),
Array(1112155, 30000),
Array(1112162, 30000),
Array(1003713, 40000),
Array(1052550, 40000),
Array(1112267, 30000),
Array(1004203, 40000),
Array(1042240, 40000),
Array(1062172, 40000),
Array(1004117, 40000),
Array(1702509, 40000),
Array(1042315, 40000),
Array(1050319, 40000),
Array(1042316, 40000),
Array(1051390, 40000),
Array(1071076, 40000),
Array(1001097, 40000),
Array(1000074, 40000),
Array(1004200, 40000),
Array(1001076, 40000),
Array(1070059, 40000),
Array(1051392, 40000),
Array(1050299, 50000),
Array(1071078, 50000),
Array(1112236, 50000),
Array(1702013, 50000),
Array(1112126, 50000),
Array(1052782, 50000),
Array(1072543, 50000),
Array(1102726, 50000),
Array(1004204, 50000),
Array(1004205, 50000),
Array(1052781, 50000),
Array(1003950, 50000),
Array(1042214, 50000),
Array(1102142, 40000),
Array(1004126, 40000),
Array(1042311, 40000),
Array(1702374, 40000),
Array(1002846, 40000),
Array(1004158, 40000),
Array(1004114, 40000),
Array(1102697, 40000),
Array(1112943, 40000),
Array(1002598, 40000),
Array(1102688, 40000),
Array(1004157, 100000),
Array(1004156, 100000),
Array(1702512, 40000),
Array(1032234, 40000),
Array(1702459, 40000),
Array(1042321, 40000),
Array(1002967, 40000),
Array(1702508, 40000),
Array(1702233, 40000),
Array(1004025, 40000),
Array(1012253, 40000),
Array(1004093, 40000),
Array(1042312, 40000),
Array(4000897, 40000),
Array(1042313, 40000),
Array(1702334, 40000),
Array(1022194, 40000),
Array(1022217, 40000),
Array(1102669, 40000),
Array(1050152, 50000), //水兵服(男)
Array(1051180, 50000), //水兵服(女)
Array(1042104, 50000), //小綠葉T恤
Array(1042105, 50000), //小紅葉T恤
Array(1002845, 50000), //粉紅兔耳帽
Array(1052224, 50000), //草莓baby裝
Array(1702228, 50000), //可可香蕉
Array(1002721, 50000), //狸毛護耳
Array(1002568, 50000), //手工編織髮夾
Array(1702155, 30000), //絢麗彩虹
Array(1042142, 30000), //彩虹條背心
Array(1062093, 30000), //嫩綠休閒短褲
Array(1112904, 30000), //彩虹星環繞戒指
Array(1041142, 70000), //巨星蛋糕吊帶
Array(1061148, 70000), //巨星粉色短裙
Array(1702182, 70000), //洛麗波板糖
Array(1002888, 40000), //絲帶髮箍(紅色)
Array(1002890, 40000), //絲帶髮箍(藍色)
Array(1052200, 40000), //羅麗粉色娃娃套服
Array(1702208, 40000), //搞怪鱷魚
Array(1002863, 70000), //小熊熊可愛帽
Array(1052061, 70000), //巴西足球服No.9
Array(1052059, 70000), //法國足球服No.14
Array(1003207, 70000), //胡蘿蔔兔爆炸頭
Array(1702285, 70000), //藍色蝴蝶結手提包
Array(1012131, 30000), //好白的牙
Array(1702302, 40000), //杯具
Array(1072337, 70000), //喜洋洋拖鞋
Array(1112238, 30000), //水墨花聊天戒指
Array(1112135, 30000), //水墨花名片戒指
Array(1702261, 30000), //櫻花棒
Array(1702091, 70000), //網球拍
Array(1702168, 70000), //閃亮聖誕樹
Array(1003051, 70000), //小狐狸
Array(1003048, 70000), //聖誕裝飾帽
Array(1002995, 40000), //皇家海軍帽
Array(1003012, 70000), //嫦娥髮式
Array(1002876, 70000), //聖誕紅髮夾
Array(1002839, 70000), //南瓜棒球帽
Array(1001048, 30000), //鬼娃娃帽
Array(1102225, 30000), //嫦娥披風
Array(1102217, 30000), //九尾披風
Array(1102157, 30000), //傀儡枷鎖
Array(1051131, 30000), //聖誕女孩子服
Array(1112916, 50000), //寂寞單身戒指
Array(1012179, 70000), //鹿鼻子
Array(1051152, 40000), //玫瑰紅晚宴裙
Array(1112118, 80000), //可樂名片戒指
Array(1112119, 80000), //可樂(Red) 名片戒指
Array(1112120, 80000), //可樂(White) 名片戒指
Array(1112228, 80000), //可樂聊天戒指
Array(1112229, 80000), //可樂(Red)聊天戒指
Array(1112230, 80000),  //可樂(White)聊天戒指
Array(1112103, 80000),
Array(1050210, 80000),
Array(1112141, 80000),
Array(1112252, 80000),
Array(1112253, 80000),
Array(1112142, 80000),
//
Array(1051280, 40000),
Array(1052426, 40000),
Array(1051278, 40000),
Array(1050229, 40000),
Array(1050227, 40000),
Array(1051235, 40000),
Array(1052201, 40000),
Array(1050232, 40000),
Array(1051282, 40000),
Array(1061207, 55000)
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