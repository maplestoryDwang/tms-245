var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
Array(2290245, 40),
Array(2290458, 40),
Array(2290884, 40), 
Array(2290868, 40),
Array(2290869, 40),
Array(2290870, 40),
Array(2290871, 40),
Array(2290872, 40),
Array(2290873, 40),
Array(2290874, 40),
Array(2290875, 40),
Array(2290876, 40),
Array(2290877, 40),
Array(2290878, 40),
Array(2290879, 40),
Array(2290880, 40), 
Array(2290881, 40), 
Array(2290882, 40), 
Array(2290883, 40), 
Array(2290722, 40),
Array(2290885, 40), 
Array(2290886, 40), 
Array(2290887, 40), 
Array(2290888, 40), 
Array(2290889, 40),
Array(2290914, 40),
Array(2290723, 40),
Array(2290724, 40)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "#h0#,您可以在這裡兌換#e#b暴風商城#n#k,請選擇你想要購買的物品\r\n#b";
            for (var i=0; i<itemlist.length; i++) {
                text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+itemlist[i][1]+"#b暴風幣  \r\n";
                if (i != 0 && (i+1) % 5 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendGetNumber("請輸入你請你輸入想要購買的數量\r\n\r\n#r1個需要" + itemlist[selects][1] + "個#b暴風幣#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]) + "暴風幣。");
        } else if (a == 3) {
            if (cm.haveItem(4310057,buynum * itemlist[selects][1])) {
                cm.gainItem(4310057, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("購買成功了！");
                cm.dispose();
            } else {
                cm.sendOk("對不起，你沒有足夠的暴風幣。");
                cm.dispose();
            }
        }
    }//mode
}//f