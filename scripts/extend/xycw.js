/*神寵購買*/
var status = 0;
var choice;
var itemxh=new Array("5000053","5000331","5000416","5000483","5000470","5000471","5000460","5000461","5000462","5000528","5000541","5000469","5000452","5000448","5000447","5000446","5001017","5001016","5001015","5000427","5000426","5000445","5000444","5000443","5000437","5000435","5000434","5000433","5000432","5000431","5000428","5000417","5000416","5000415","5000414","5000424","5000409","5000408","5000407","5000267","5000268","5000285","5000284","5000324","5000369","5000370","5000371","5000352","5000353","5000354","5000365","5000366","5000367","5000368","5000375","5000376","5000377","5000375","5000376","5000377","5000381","5000383","5000385","5000386","5000387","5001005","5000191","5000382","5000306","5000307","5000308","5000255","5000393","5001011","5000391","5000388","5000389","5000390","5000402","5000403","5000404","5000018","5000000","5000002","5000003","5000004","5000005","5000007","5000008" ,"5000009","5000010","5000011","5000012","5000013","5000044","5000014","5000017", "5000020","5000022","5000023","5000025","5000024","5000026","5000027","5000028", "5000029","5000030","5000031","5000043","5000046","5000055","5000053","5000060", "5000054","5000066","5000065","5000072","5000081","5000206","5000215","5000216", "5000221","5000239");
var itemxhcost=new Array("200000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","100000","22000","22000","22000","32000","32000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000","50000");

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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#親愛的#r#h ##k您好，請選擇您希望購買的神寵\r\n\r\n#r#e切記！一次只能買一隻寵物！！！#k";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#　#d需要#r" + itemxhcost[i] + "#d樂豆點#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        /*} else if (status == 1) {
                cm.sendGetNumber("你選擇的商品為#v" + itemxh[selection] + "#售價為：" + itemxhcost[selection] + "樂豆點/張\r\n請輸入你購買的數量",1,1,cm.getPlayer().getCSPoints(1));
        choice = selection;*/
        } else if (status == 1) {
            //fee = selection;
            choice = selection;
            money = itemxhcost[choice];
            /*if (fee < 0) {
            cm.sendOk("不能輸入0.或者你沒有足夠的樂豆點支付你要買的數量.!");
            cm.dispose();
            } else*/ if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("購買失敗，你沒有" + money + "樂豆點");
            cm.dispose();
            } else {
            cm.gainNX(-money);
            cm.gainPetItem(itemxh[choice], 1);
           // cm.gainPetItem(5689000, 1);
cm.worldSpouseMessage(0x0D, "[寵物商城] :  " + cm.getChar().getName() + " 在市場雪人NPC購買了超美的寵物~!");
            cm.sendOk("恭喜，購買成功。");
            cm.dispose();
             }
        }
    }
}
