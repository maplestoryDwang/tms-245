var status = 0;
var choice;
var scrolls = Array(
    Array(1142249, 3888),
    Array(1142005, 3888),
    Array(1142215, 3888),
    Array(1142443, 3888),
    Array(1142610, 3888),
    Array(1142637, 3888),
    Array(1142258, 3888),
    Array(1142477, 3888),
    Array(1142573, 3888),
    Array(1142558, 3888),
    Array(1142620, 3888),
    Array(1142617, 3888),
    Array(1142609, 3888),
    Array(1142561, 3888),
    Array(1142567, 3888),
    Array(1142603, 3888),
    Array(1142404, 3888),
    Array(1142676, 3888),
    Array(1142541, 3888),
    Array(1142523, 3888),
    Array(1142293, 3888),
    Array(1142218, 3888)





);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("好吧，歡迎下次繼續光臨！.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n兔兔幣餘額：#r" + cm.getHyPay(1) + "#k #e鼠標移到名字上顯示屬性 (#r買後不支持退貨喲親#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][0] + "##z" + scrolls[i][0] + "#　#d需要#r" + scrolls[i][1] + "#d兔兔幣#k#l";
            }
            cm.sendSimpleS("歡迎來到絕版點裝店,你想買我們商店的物品麼?請選擇吧：." + choices,2);
           } else if (cm.getSpace(1) < 2) {  
                cm.sendOk("#r -  溫馨提示>> #k\r\n\r\n溫馨提示，您的裝備欄小於2個。");  
                 cm.dispose(); 
        } else if (status == 1) {
            cm.sendYesNo("你確定需要購買#v" + scrolls[selection][0] + "##t" + scrolls[selection][0] + "#?");
            choice = selection;
        } else if (status == 2) {
            var money = scrolls[choice][1];
            if (cm.getHyPay(1) < money) {
                cm.sendOk("抱歉，你沒足夠的兔兔幣！");
                cm.dispose();
            } else {
                cm.addHyPay(money);
                cm.gainItem(scrolls[choice][0], 1);
                cm.sendOk("購買成功.");
                cm.dispose();
            }
        }
    }
}
