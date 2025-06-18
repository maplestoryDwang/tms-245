var status = 0;
var choice;
var scrolls = Array(
    Array(1702472, 2188),
    Array(1702399, 2188),
    Array(1003542, 1188),
    Array(1003543, 1188),
    Array(1003544, 1188),
    Array(1003545, 1188),
    Array(1003546, 1188),
    Array(1003547, 1188),
    Array(1112291, 1188), 
    Array(1003843, 8888), 
    Array(1003889, 6688), 
    Array(1004040, 1188), 
    Array(1004041, 1188), 
    Array(1004042, 1188), 
    Array(1004043, 1188), 
    Array(1004044, 1188), 
    Array(1004185, 1188), 
    Array(1004186, 1188), 
    Array(1004187, 1188),
    Array(1004188, 1188), 
    Array(1004189, 1188), 
    Array(1049002, 1188), 
    Array(1049003, 1188), 
    Array(1049004, 1188), 
    Array(1070031, 1288), 
    Array(1082553, 1488), 
    Array(1112908, 288), 
    Array(1112817, 288), 
    Array(1112725, 1288), 
    Array(1112729, 1288), 
    Array(1112730, 1288), 
    Array(1112731, 1288), 
    Array(1112732, 1288), 
    Array(1112733, 1288), 
    Array(1112734, 1288), 
    Array(1112745, 388),
    Array(1113003, 388),
    Array(1113021, 288),
    Array(1102555, 288),
    Array(1102604, 1588),
    Array(1102659, 688),
    Array(1102651, 188),
    Array(1102652, 188),
    Array(1102653, 188),
    Array(1102654, 188),
    Array(1102655, 188),
    Array(1032138, 1288),
    Array(1022181, 388),
    Array(1032234, 700), 
    Array(1003547, 2688),
    Array(1052579, 3688),
    Array(1072782, 3688),
    Array(1082505, 3688)



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
            choices = "\r\n兔兔幣餘額：#r" + cm.getHyPay(1) + "#r兔兔幣 (#r買後不支持退貨喲親#k)";
            for (var i = 0; i < scrolls.length; i++) {
                choices += "\r\n#L" + i + "##v" + scrolls[i][0] + "##z" + scrolls[i][0] + "#　#d需要#r" + scrolls[i][1] + "#d兔兔幣#k#l";
            }
            cm.sendSimpleS("#r歡迎來到屬性點裝店,這裡都是天然屬性點裝?請選擇吧：." + choices,2);
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
