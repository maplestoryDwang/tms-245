/* 樂豆點商店 - 洗能力
Array(2702001,1,2000),
Array(2702001,10,20000),
 */
var diff;

var status = -1;
var itemList = Array(
Array(2434290, 1, 10000),
Array(2434288, 1, 6000),
Array(4001839, 20, 200),
Array(2433287, 15, 200),
//Array(1082392, 1, 15000),
//Array(1082393, 1, 12000),
//Array(1082394, 1, 8000),
Array(2049405, 1, 8000),
Array(2615001, 1, 6000),
Array(2615000, 1, 5000),
Array(2048800, 1, 4500),
Array(2048801, 1, 4500),
Array(2040872, 1, 4500),
Array(2040873, 1, 4500),
Array(2043003, 1, 4500),
Array(2043103, 1, 4500),
Array(2043203, 1, 4500),
Array(2043303, 1, 4500),
Array(2043703, 1, 4500),
Array(2043803, 1, 4500),
Array(2044003, 1, 4500),
Array(2044019, 1, 4500),
Array(2044103, 1, 4500),
Array(2044203, 1, 4500),
Array(2044303, 1, 4500),
Array(2044403, 1, 4500),
Array(2044503, 1, 4500),
Array(2044603, 1, 4500),
Array(2044703, 1, 4500),
Array(2044815, 1, 4500),
Array(2044908, 1, 4500),
Array(2049406, 1, 5000),
Array(2041200, 1, 4500),
Array(1802384, 1, 4500),
Array(1802385, 1, 4500),
Array(1802386, 1, 4500),
Array(1802459, 1, 4500),
Array(1802460, 1, 4500),
Array(1802461, 1, 4500),
Array(1802346, 1, 4500),
Array(1802347, 1, 4500),
Array(1802348, 1, 4500),
Array(1003068, 1, 4500),
Array(1802220, 1, 4500),
Array(1802424, 1, 4500),
Array(1802425, 1, 4500), 
Array(1802426, 1, 4500),
Array(1802380, 1, 4500),
Array(1802381, 1, 4500), 
Array(1802382, 1, 4500), 
Array(1802375, 1, 4500), 
Array(1802366, 1, 4500), 
Array(1802084, 1, 4500), 
Array(1802083, 1, 4500), 
Array(1802082, 1, 4500),
Array(1802078, 1, 4500),
Array(1802080, 1, 4500),
Array(1802081, 1, 4500),
Array(1802060, 1, 4500),
Array(1802394, 1, 4500),
Array(1802395, 1, 4500),
Array(1802396, 1, 4500),
Array(1802365, 1, 4500),
Array(1802352, 1, 4500),
Array(1802068, 1, 4500),
Array(1802076, 1, 4500),
Array(1802444, 1, 4500),
Array(1802422, 1, 4500),
Array(1802446, 1, 4500),
Array(2003571, 1, 4500),
Array(1802501, 1, 4500),
Array(1802502, 1, 4500)
);
var selectedItem = -1;
var selequantity = -1;
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

       var diff =  cm.getDojoPoints() - cm.getPQLog("武陵點數獎勵");

    if (status == 0) {
        var selStr = "請選擇您要兌換的道具：\r\n你目前共有修煉點數： #r" + diff + "#k #b點#n#r#e\r\n請注意，某些道具兌換以後無法交易！#n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##r" + itemList[i][1] + "#b個 #i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "#   #r" + itemList[i][2] + "#b修煉點數#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            selectedCost = item[2];
            cm.sendYesNo("您是否購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 修煉點數？");
        } else {
            cm.sendOk("出現錯誤...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("購買道具出現錯誤...");
            cm.dispose();
            return;
        }
        if (diff >= selectedCost) {
            if (cm.canHold(selectedItem, selequantity)) {
               // cm.gainNX( - selectedCost);
               cm.setPQLog("武陵點數獎勵",0,selectedCost)
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『修煉兌換』 " + cm.getName() + " 玩家在武陵道場使用修煉點數兌換了道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兌換#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("購買失敗，請您確認在背包所有欄目窗口中是否有一格以上的空間。");
            }
        } else if (diff >= selectedCost) {
       if (cm.canHold(selectedItem, selequantity)) {
               //cm.gainNX(1, - selectedCost);
                 cm.setPQLog("武陵點數獎勵",0,selectedCost)
                cm.gainItem(selectedItem, selequantity);
                cm.worldMessage("『修煉兌換』 " + cm.getName() + " 玩家在武陵道場使用修煉點數兌換了道具： " + cm.getItemName(selectedItem) + " x " + selequantity);
                cm.sendOk("恭喜您成功兌換#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 。");
            } else {
                cm.sendOk("購買失敗，請您確認在背包所有欄目窗口中是否有一格以上的空間。");
            }    
    } else {
            cm.sendOk("您沒有那麼多修煉點數。\r\n\r\n購買#i" + selectedItem + ":# #b#t" + selectedItem + "##k x (" + selequantity + ") 需要 #r" + selectedCost + "#k 修煉點數。");
        }
        status = -1;
    }
}