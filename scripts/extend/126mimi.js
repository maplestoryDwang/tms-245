var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = ""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n#k#L2#   #v2431289#     購買秘密箱子10W樂豆點#l   \r\n"+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+""+eff+"\r\n       打開可隨機獲得以下任意一個最新帽子\r\n#v1004525##v1004455##v1004499##v1004500##v1004514##v1004526##v1004487##v1004488##v1004482##v1004486##v1004501##v1004508##v1004544##v1004545##v1004546##v1004547##v1004548##v1004513##v1004510##v1004511##v1004512##v1000084##v1001105##v1004542##v1004543#";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getPlayer().getCSPoints(1) >= 500000) {
        cm.gainNX(1, -500000);
                cm.changeDamageSkin(1023);
                cm.sendOk("購買成功,已應用到你的傷害皮膚,打怪可看到\r\n祝你遊戲愉快!");
            } else {
                cm.sendOk("你沒有樂豆點或不足,我不能與你兌換");
            }
            break;
        case 2:
            if (cm.getPlayer().getCSPoints(1) >= 100000) {
        cm.gainNX(1, -100000);
                cm.gainItem(2431289,1);
                cm.spouseMessage(0x26,"『土豪公告』 "+ cm.getChar().getName() +"  在市場購買秘密箱子，大家快來打劫他(她)~!");
                cm.sendOk("購買成功\r\n祝你遊戲愉快!");
            } else {
                cm.sendOk("你沒有樂豆點或不足,我不能與你兌換");
            }
            break;
            case 3:
            if (cm.getPlayer().getCSPoints(1) >= 300000) {
        cm.gainNX(1, -300000);
                cm.changeDamageSkin(1022);
                cm.sendOk("購買成功,已應用到你的傷害皮膚,打怪可看到\r\n祝你遊戲愉快!");
            } else {
                cm.sendOk("你沒有樂豆點或不足,我不能與你兌換");
            }
            break;
        }
        cm.dispose();
    }
}