var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var twd = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
                        var selStr = "#d我這裡可以製作150級武器，請選擇想要製作的裝備：#n#k\r\n";
                        selStr +="\r\n#L1##b"+aaa+" 製作150級雙手劍[詳情點擊查看]#l#k\r\n";
            selStr +="#L2##b"+aaa+" 製作150級劍士槍[詳情點擊查看]#l#k\r\n";
            selStr +="#L3##b"+aaa+" 製作150級弓手弓[詳情點擊查看]#l#k\r\n";
            selStr +="#L4##b"+aaa+" 製作150級弩手弩[詳情點擊查看]#l#k\r\n";
            selStr +="#L14##b"+aaa+" 製作150級雙弩槍[詳情點擊查看]#l#k\r\n";
            selStr +="#L5##b"+aaa+" 製作150級盜賊拳套[詳情點擊查看]#l#k\r\n";
            selStr +="#L6##b"+aaa+" 製作150級盜賊短劍[詳情點擊查看]#l#k\r\n";
            selStr +="#L7##b"+aaa+" 製作150級盜賊副刀[詳情點擊查看]#l#k\r\n";
            selStr +="#L8##b"+aaa+" 製作150級幻影手杖[詳情點擊查看]#l#k\r\n";
            selStr +="#L9##b"+aaa+" 製作150級法師長杖[詳情點擊查看]#l#k\r\n";
            selStr +="#L10##b"+aaa+" 製作150級法師短杖[詳情點擊查看]#l#k\r\n";
            selStr +="#L11##b"+aaa+" 製作150級夜光雙頭仗[詳情點擊查看]#l#k\r\n";
            selStr +="#L12##b"+aaa+" 製作150級傑諾能量劍[詳情點擊查看]#l#k\r\n";
            selStr +="#L13##b"+aaa+" 製作150級惡魔魔劍[詳情點擊查看]#l#k\r\n";
                        cm.sendSimple(selStr);    
        } else if (status == 1) {
            if (selection == 1) {
                typed=1;
                cm.sendYesNo("- #e#d法弗納懺悔之劍需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
            } else if (selection == 2) {
                typed=2;
                cm.sendYesNo("- #e#d法弗納貫雷槍需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 3) {
                typed=3;
                cm.sendYesNo("- #e#d法弗納追風者需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 4) {
                typed=4;
                cm.sendYesNo("- #e#d法弗納風翼弩需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");    
                        } else if (selection == 5) {
                typed=5;
                cm.sendYesNo("- #e#d法弗納危險之手需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 6) {
                typed=6;
                cm.sendYesNo("- #e#d法弗納大馬士革劍需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 7) {
                typed=7;
                cm.sendYesNo("- #e#d法弗納急速之刃需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 8) {
                typed=8;
                cm.sendYesNo("- #e#d法弗納洞察手杖需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 9) {
                typed=9;
                cm.sendYesNo("- #e#d法弗納魔冠之杖需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 10) {
                typed=10;
                cm.sendYesNo("- #e#d法弗納魔力奪取者需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 11) {
                typed=11;
                cm.sendYesNo("- #e#d法弗納魔力源泉杖需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 12) {
                typed=12;
                cm.sendYesNo("- #e#d法弗納精神之刃需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 13) {
                typed=13;
                cm.sendYesNo("- #e#d法弗納死亡使者需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
                        } else if (selection == 14) {
                typed=14;
                cm.sendYesNo("- #e#d法弗納雙風翼弩需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行製作。點否返回上一頁.#k");
            }
        } else if (status == 2) {
            if(typed==1){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1402196,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納懺悔之劍一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納懺悔之劍.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==2){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1432167,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納貫雷槍一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納貫雷槍.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==3){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1452205,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納追風者一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納追風者.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==4){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1462193,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納風翼弩一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納風翼弩.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==5){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1472214,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納危險之手一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納危險之手.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==6){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1332225,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納大馬士革劍一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗大馬士革劍.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==7){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1342082,1);
            cm.gainItem(4310030, -200);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納急速之刃一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納急速之刃.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==8){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1362090,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納洞察手杖一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納洞察手杖.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==9){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1382208,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納魔冠之杖一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納魔冠之杖.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==10){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1372177,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納魔力奪取者一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納魔力奪取者.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==11){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1212063,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納魔力源泉杖一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納魔力源泉杖.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==12){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1242060,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納精神之刃一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納精神之刃.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==13){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1232057,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納死亡使者一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納死亡使者.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
            } else if(typed==14){
                if (cm.haveItem(4310030, 5000) && cm.haveItem(4033356, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4021012, 30) && cm.haveItem(4021010, 30) && cm.haveItem(4021011, 30) && cm.haveItem(4000082, 400) && cm.haveItem(4000124, 50) && cm.haveItem(4310015, 3) && cm.haveItem(4021019, 1)) {
            cm.gainItem(1522094,1);
            cm.gainItem(4310030, -5000);
            cm.gainItem(4033356, -50);
            cm.gainItem(4021012, -30);
            cm.gainItem(4021011, -30);
            cm.gainItem(4021010, -30);
            cm.gainItem(4000082, -400);
            cm.gainItem(4000124, -50);
            cm.gainItem(4310015, -3);
            cm.gainItem(4021019, -1);
            cm.sendOk("恭喜您合成法弗納雙風翼弩一把.");
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處製作了法弗納雙風翼弩.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 200 個#k");
            cm.dispose();
                }
           }
      }
   }
 }