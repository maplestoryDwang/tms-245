var a = 0;
var text;
var selects; //記錄玩家的選項
var buynum = 0;
var itemlist = Array(
Array(2042400, 500), //雙弩槍攻擊力卷軸
Array(2042401, 500), //雙弩槍攻擊力卷軸
Array(2042402, 500), //雙弩槍攻擊力卷軸
Array(2042403, 500), //雙弩槍攻擊力卷軸
Array(2042404, 500), //雙弩槍攻擊力卷軸
Array(2042405, 500), //雙弩槍攻擊力卷軸
Array(2042406, 500), //雙弩槍攻擊力卷軸
Array(2042407, 500), //雙弩槍攻擊力卷軸
Array(2042408, 500), //雙弩槍攻擊力卷軸
Array(2045200, 500), //雙弩槍攻擊力卷軸
Array(2045201, 500), //雙弩槍攻擊力卷軸
Array(2045202, 500), //雙弩槍攻擊力卷軸
Array(2045203, 500), //雙弩槍攻擊力卷軸
Array(2045204, 500), //雙弩槍攻擊力卷軸
Array(2045205, 500), //雙弩槍攻擊力卷軸
Array(2045206, 500), //雙弩槍攻擊力卷軸
Array(2045208, 500), //雙弩槍攻擊力卷軸
Array(2043400, 500), //刀攻擊力卷軸 100%
Array(2043401, 500), //刀攻擊力卷軸 60% 
Array(2043402, 500), //刀攻擊力卷軸 10%
Array(2043403, 500), //刀攻擊力卷軸
Array(2043404, 500), //刀攻擊力卷軸
Array(2040000, 500), //頭盔防禦卷軸 成功率100%
Array(2040001, 500), //頭盔防禦卷軸60%
Array(2040002, 500), //頭盔防禦卷軸10%
Array(2040003, 500), //頭盔體力卷軸100%
Array(2040004, 500), //頭盔體力卷軸60%
Array(2040005, 500), //頭盔體力卷軸10%
Array(2040008, 500), //頭盔防禦詛咒卷軸70%
Array(2040009, 500), //頭盔防禦詛咒卷軸30%
Array(2040010, 500), //頭盔體力詛咒卷軸70%
Array(2040011, 500), //頭盔體力詛咒卷軸30%
Array(2040012, 500), //頭盔智力卷軸70%
Array(2040013, 500), //頭盔智力卷軸30%
Array(2040014, 500), //頭盔命中率詛咒卷軸70%
Array(2040015, 500), //頭盔命中率詛咒卷軸30%
Array(2040016, 600), //頭盔命中率卷軸10%
Array(2040017, 500), //頭盔命中率卷軸60%
Array(2040018, 500), //頭盔命中率卷軸100%
Array(2040019, 500), //頭盔防禦卷軸65%
Array(2040020, 500), //頭盔防禦卷軸15%
Array(2040021, 500), //頭盔體力卷軸65%
Array(2040022, 500), //頭盔體力卷軸15%
Array(2040024, 500), //頭盔智力卷軸100%
Array(2040025, 500), //頭盔智力卷軸60%
Array(2040026, 500), //頭盔智力卷軸10%
Array(2040027, 500), //頭盔敏捷卷軸100%
Array(2040028, 750), //頭盔敏捷卷軸70%
Array(2040029, 500), //頭盔敏捷卷軸60%
Array(2040030, 500), //頭盔敏捷卷軸30%
Array(2040031, 500), //頭盔敏捷卷軸10%
Array(2040043, 500), //頭盔敏捷卷軸65%
Array(2040044, 500), //頭盔敏捷卷軸15%
Array(2040100, 500), //臉部裝飾生命卷軸10%
Array(2040101, 500), //臉部裝飾生命卷軸60%
Array(2040103, 500), //臉部裝飾生命詛咒卷軸30%
Array(2040104, 500), //臉部裝飾生命詛咒卷軸70%
Array(2040105, 500), //臉部裝飾迴避率卷軸10%
Array(2040106, 500), //臉部裝飾迴避率卷軸60%
Array(2040108, 500), //臉部裝飾迴避率詛咒卷軸30%
Array(2040109, 800), //臉部裝飾迴避率詛咒卷軸70%
Array(2040200, 200), //眼部裝飾命中率卷軸10%
Array(2040201, 200), //眼部裝飾命中率卷軸60%
Array(2040203, 200), //眼部裝飾命中率詛咒卷軸30%
Array(2040204, 200), //眼部裝飾命中率詛咒卷軸70%
Array(2040205, 200), //眼部裝飾智力卷軸10%
Array(2040206, 200), //眼部裝飾智力卷軸60%
Array(2040208, 200), //眼部裝飾智力詛咒卷軸30%
Array(2040209, 200), //眼部裝飾智力詛咒卷軸70%
Array(2040300, 100), //耳環智力卷軸100%
Array(2040301, 100), //耳環智力卷軸60%
Array(2040302, 150), //耳環智力卷軸10%
Array(2040304, 100), //耳環智力詛咒卷軸70%
Array(2040305, 100), //耳環智力詛咒卷軸30%
Array(2040306, 200), //耳環敏捷卷軸70%
Array(2040307, 200), //耳環敏捷卷軸30%
Array(2040308, 500), //耳環防禦力詛咒卷軸70%
Array(2040309, 500), //耳環防禦力詛咒卷軸30%
Array(2040310, 500), //耳環防禦力卷軸10%
Array(2040311, 500), //耳環防禦力卷軸60%
Array(2040312, 500), //耳環防禦力卷軸100%
Array(2040313, 100), //耳環智力卷軸65%
Array(2040314, 200), //耳環智力卷軸15%
Array(2040316, 100), //耳環敏捷卷軸100%
Array(2040317, 100), //耳環敏捷卷軸60%
Array(2040318, 200), //耳環敏捷卷軸10%
Array(2040319, 200), //耳環裝飾運氣卷軸100%
Array(2040320, 200), //耳環運氣卷軸70%
Array(2040321, 200), //耳環裝飾運氣卷軸60%
Array(2040322, 200), //耳環裝飾運氣卷軸30%
Array(2040323, 100), //耳環運氣卷軸10%
Array(2040324, 500), //耳環裝飾體力卷軸100%
Array(2040325, 600), //耳環裝飾體力卷軸70%
Array(2040326, 100), //耳環裝飾體力卷軸60%
Array(2040327, 100), //耳環裝飾體力卷軸30%
Array(2040328, 100), //耳環裝飾體力卷軸10%
Array(2040335, 500), //耳環裝飾敏捷卷軸65%
Array(2040336, 500), //耳環裝飾敏捷卷軸15%
Array(2040337, 500), //耳環裝飾運氣卷軸65%
Array(2040338, 500), //耳環裝飾運氣卷軸15%
Array(2040339, 500), //耳環裝飾體力卷軸65%
Array(2040340, 500), //耳環裝飾體力卷軸15%
Array(2040400, 500), //上衣防禦卷軸100%
Array(2040401, 500), //上衣防禦卷軸60%
Array(2040402, 500), //上衣防禦卷軸10%
Array(2040404, 500), //上衣防禦詛咒卷軸70%
Array(2040405, 500), //上衣防禦詛咒卷軸30%
Array(2040406, 500) //上衣力量卷軸70%
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
            text = "#h0#,您可以在這裡購買#e#b普通卷軸#n#k,請選擇你想要購買的物品\r\n#b";
            for (var i=0; i<itemlist.length; i++) {
                text += "#L" + i + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r"+(itemlist[i][1]*500)+"#b遊戲幣  \r\n";
                if (i != 0 && (i+1) % 5 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendGetNumber("請輸入你請你輸入想要購買的數量\r\n\r\n#r1個需要" + (itemlist[selects][1]*500) + "個#b遊戲幣#k", 0, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想購買" + buynum + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (buynum * itemlist[selects][1]*500) + "遊戲幣。");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= -buynum * itemlist[selects][1]*500) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
                cm.sendOk("購買成功了！");
                cm.dispose();
            } else {
                cm.sendOk("對不起，你沒有足夠的遊戲幣。");
                cm.dispose();
            }
        }
    }//mode
}//f