status = -1;
var itemList = Array(
        1212014, 
        1582015,
        1222014,
        1232014,
        1242014,
        1242042,
        1252014,
        1302152, 
        1312065, 
        1322096,
        1332130,
        1342036,
        1342095,
        1362019,
        1372084,
        1382104, 
        1402095, 
        1412065, 
        1422066, 
        1432086, 
        1442116, 
        1452111, 
        1462099,
        1472122,
        1482084, 
        1492085,
        1522018, 
        1532018, 
        1542015,
        1552015, 
        1262015

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
        im.sendSimple("請點擊下一步開啟140級女皇武器\r\n\r\n"+text);
    } else if(status == 1) {
        //var chance = Math.floor(Math.random()*itemList.length)
        var itemid = itemList[selection];
        var itemnum = Math.floor(Math.random()*1+1);
        var item = im.gainGachaponItem(itemid, itemnum, "140級女皇武器箱子", 3);
        im.gainItem(2431944, -1);
        im.sendOk("恭喜您，獲得了"+itemnum+"個#b#z"+itemid+"#");
        im.safeDispose();
    }
}