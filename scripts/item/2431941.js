status = -1;
var itemList = Array(
        1212084,1212084,
1222079,1232079,1242085,1242086,1302224,1312115,1322161,1332192,1342070,1362104,1372137,1382167,1402150,1412103,1422106,1432137,1442181,1452168,1462157,1472178,
1482139,1492149,1522108,1532113,1252063,1262011,1542039

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
            im.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var text = "";
        for(var i=0; i<itemList.length; i++) {
            text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
        }
        im.sendSimple("請點擊下一步開啟外星人武器\r\n\r\n"+text);
    } else if(status == 1) {
        //var chance = Math.floor(Math.random()*itemList.length)
        var itemid = itemList[selection];
        var itemnum = Math.floor(Math.random()*1+1);
        var item = im.gainGachaponItem(itemid, itemnum, "135級外星人武器箱子", 3);
        im.gainItem(2431941, -1);
        im.sendOk("恭喜您，獲得了"+itemnum+"個#b#z"+itemid+"#");
        im.safeDispose();
    }
}