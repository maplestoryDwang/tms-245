var status = 0;

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
        var selStr = "#r想兌換什麼:#b\r\n#L1#鬼節快樂x1\r\n#L2#神奇方塊x3\r\n#L3#高級方塊x7\r\n#L4#防暴捲軸x14\r\n#L5#國慶中介幣x21\r\n#L6#出席報到終結者勳章x30";
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.itemQuantity(4032398) >=1){
                cm.gainItem(2022893,2);
        cm.gainItem(4032398, -1);
        cm.sendOk("兌換成功！");
        cm.dispose();
            } else {
                cm.sendOk("對不起，簽到圖章不足#v4032398#x1。");
        cm.dispose();
            }
            break;
        case 2:
            if (cm.itemQuantity(4032398) >=3){
        cm.gainItem(5062000,2);
        cm.gainItem(4032398, -3);
        cm.sendOk("兌換成功！");
        cm.dispose();
            } else {
                cm.sendOk("對不起，簽到圖章不足#v4032398#x3。");
        cm.dispose();
            }
            break;
        case 3:
            if (cm.itemQuantity(4032398) >=7){
        cm.gainItem(5062002,5);
        cm.gainItem(4032398, -7);
        cm.sendOk("兌換成功！");
        cm.dispose();
            } else {
                cm.sendOk("對不起，簽到圖章不足#v4032398#x7。");
        cm.dispose();
            }
            break;
        case 4:
            if (cm.itemQuantity(4032398) >=14){
        cm.gainItem(5064000,3);
        cm.gainItem(4032398, -14);
        cm.sendOk("兌換成功！");
        cm.dispose();
            } else {
                cm.sendOk("對不起，簽到圖章不足#v4032398#x14。");
        cm.dispose();
            }
            break;
        case 5:
            if (cm.itemQuantity(4032398) >=21){
        cm.gainItem(4000463,10);
        cm.gainItem(4032398, -21);
        cm.sendOk("兌換成功！");
        cm.dispose();
            } else {
                cm.sendOk("對不起，簽到圖章不足#v4032398#x21。");
        cm.dispose();
            }
            break;
        case 6:
            if (cm.itemQuantity(4032398) >=30){
        cm.gainItem(1142295,1);
        cm.gainItem(4032398, -30);
        cm.sendOk("兌換成功！");
        cm.dispose();
            } else {
                cm.sendOk("對不起，簽到圖章不足#v4032398#x30。");
        cm.dispose();
            }
            break;
        }
    }
}