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
                        var selStr = "#d把勳章取下放背包，請選擇想要晉級的裝備：#n#k\r\n";
                        //selStr +="\r\n#L1##b"+aaa+" 晉級到#r#e#z1142310##d#n[詳情點擊查看]#l#k\r\n";
            selStr +="#L2##b"+aaa+" 晉級到#r#e#z1142311##d#n[全屬性+5]#l#k\r\n";
            selStr +="#L3##b"+aaa+" 晉級到#r#e#z1142312##d#n[全屬性+10]#l#k\r\n";
            selStr +="#L4##b"+aaa+" 晉級到#r#e#z1142313##d#n[全屬性+15]#l#k\r\n";
            //selStr +="#L14##b"+aaa+" 晉級到#r#e#z1142314##d#n[全屬性+]#l#k\r\n";
            selStr +="#L5##b"+aaa+" 晉級到#r#e#z1142314##d#n[全屬性+20]#l#k\r\n";
            selStr +="#L6##b"+aaa+" 晉級到#r#e#z1142315##d#n[全屬性+30]#l#k\r\n";
            selStr +="#L7##b"+aaa+" 晉級到#r#e#z1142316##d#n[全屬性+35]#l#k\r\n";
            selStr +="#L8##b"+aaa+" 晉級到#r#e#z1142317##d#n[全屬性+40]#l#k\r\n\r\n";
            selStr +="#r#e-以下4個勳章能夠獲得#k每日特權#n\r\n";
            selStr +="#L9##b"+aaa+" 晉級到#r#e#z1142318##d#n[全屬性+50]#l#k\r\n";
            selStr +="#L10##b"+aaa+" 晉級到#r#e#z1142319##d#n[全屬性+60]#l#k\r\n";
            selStr +="#L11##b"+aaa+" 晉級到#r#e#z1142320##d#n[全屬性+70]#l#k\r\n";
            selStr +="#L12##b"+aaa+" 晉級到#r#e#z1142321##d#n[全屬性+100#l#k\r\n";
            //selStr +="#L13##b"+aaa+" 晉級到#r#e#z1142310##d#n[全屬性+]#l#k\r\n";
                        cm.sendSimple(selStr);    
        } else if (status == 1) {
            if (selection == 1) {
                typed=1;
                cm.sendYesNo("- #e#d法弗納懺悔之劍需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 5000 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
            } else if (selection == 2) {
                typed=2;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 50 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 5 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 20 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 200 個\r\n#b需要#t1142310#：\t#r" + cm.itemQuantity(1142310) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 3) {
                typed=3;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 50 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 5 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 40 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 400 個\r\n#b需要#t1142311#：\t#r" + cm.itemQuantity(1142311) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 4) {
                typed=4;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 50 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 10 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 60 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 600 個\r\n#b需要#t1142312#：\t#r" + cm.itemQuantity(1142312) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");    
                        } else if (selection == 5) {
                typed=5;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 20 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 80 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 1000 個\r\n#b需要#t1142313#：\t#r" + cm.itemQuantity(1142313) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 6) {
                typed=6;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 30 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 100 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 2000 個\r\n#b需要#t1142314#：\t#r" + cm.itemQuantity(1142314) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 7) {
                typed=7;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 30 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 100 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 2000 個\r\n#b需要#t1142315#：\t#r" + cm.itemQuantity(1142315) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 8) {
                typed=8;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 30 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 100 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 4000 個\r\n#b需要#t1142316#：\t#r" + cm.itemQuantity(1142316) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 9) {
                typed=9;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n#g等級需要達到200級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 50 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 500 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 5000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 1000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 20 個\r\n#b需要#t1142317#：\t#r" + cm.itemQuantity(1142317) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 10) {
                typed=10;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n#g等級需要達到220級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 200 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 500 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 5000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 3000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 30 個\r\n#b需要#t1142318#：\t#r" + cm.itemQuantity(1142318) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 11) {
                typed=11;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n#g等級需要達到230級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 300 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 1000 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 10000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 5000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 40 個\r\n#b需要#t1142319#：\t#r" + cm.itemQuantity(1142319) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 12) {
                typed=12;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n#g等級需要達到240級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 300 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 500 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 1000 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 10000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 8000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 100 個\r\n#b需要#t1142320#：\t#r" + cm.itemQuantity(1142320) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 13) {
                typed=13;
                cm.sendYesNo("- #e#r勳章需要放在背包裡升級\r\n#g等級需要達到200級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 4200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 4200 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 5000 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 7000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 60 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 20 個\r\n#b需要#t1142317#：\t#r" + cm.itemQuantity(1142317) + " / 1 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
                        } else if (selection == 14) {
                typed=14;
                cm.sendYesNo("- #e#d法弗納雙風翼弩需要的材料：#n#k\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 5000 個#k\r\n\r\n- #e#d管理提示：#n#b點是進行晉級。點否返回上一頁.#k");
            }
        } else if (status == 2) {
            if(typed==1){
                if (cm.haveItem(2431174, 200) && cm.haveItem(4000463, 200) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 100) && cm.haveItem(4310036, 100)) {
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
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處晉級了法弗納懺悔之劍.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 5000 個#k");
            cm.dispose();
                }
            } else if(typed==2){
                if (cm.haveItem(2431174, 50) && cm.haveItem(4000463, 5) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 20) && cm.haveItem(4310036, 200) && cm.haveItem(1142310, 1)) {
                    cm.gainItem(2431174, -50);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(4310030, -20);
                    cm.gainItem(4310036, -200);
                    cm.gainItem(1142310, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142311)).copy(); // 生成一個Equip類                    
            toDrop.setStr(5); //裝備力量
            toDrop.setDex(5); //裝備敏捷
            toDrop.setInt(5); //裝備智力
            toDrop.setLuk(5); //裝備運氣
            toDrop.setMatk(5); //物理攻擊
            toDrop.setWatk(5); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[中等兵]全屬性+5");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 50 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 5 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 20 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 200 個\r\n#b需要#t1142310#：\t#r" + cm.itemQuantity(1142310) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==3){
                if (cm.haveItem(2431174, 50) && cm.haveItem(4000463, 5) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 40) && cm.haveItem(4310036, 400) && cm.haveItem(1142311, 1)) {
                    cm.gainItem(2431174, -50);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(4310030, -40);
                    cm.gainItem(4310036, -400);
                    cm.gainItem(1142311, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142312)).copy(); // 生成一個Equip類                    
            toDrop.setStr(10); //裝備力量
            toDrop.setDex(10); //裝備敏捷
            toDrop.setInt(10); //裝備智力
            toDrop.setLuk(10); //裝備運氣
            toDrop.setMatk(10); //物理攻擊
            toDrop.setWatk(10); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[高等兵]全屬性+10");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 50 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 5 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 40 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 100 個\r\n#b需要#t1142311#：\t#r" + cm.itemQuantity(1142311) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==4){
                if (cm.haveItem(2431174, 50) && cm.haveItem(4000463, 10) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 60) && cm.haveItem(4310036, 600) && cm.haveItem(1142312, 1)) {
                    cm.gainItem(2431174, -50);
                    cm.gainItem(4000463, -10);
                    cm.gainItem(4310030, -60);
                    cm.gainItem(4310036, -600);
                    cm.gainItem(1142312, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142313)).copy(); // 生成一個Equip類                    
            toDrop.setStr(15); //裝備力量
            toDrop.setDex(15); //裝備敏捷
            toDrop.setInt(15); //裝備智力
            toDrop.setLuk(15); //裝備運氣
            toDrop.setMatk(15); //物理攻擊
            toDrop.setWatk(15); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[軍士長]全屬性+15");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 50 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 10 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 60 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 600 個\r\n#b需要#t1142312#：\t#r" + cm.itemQuantity(1142312) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==5){
                if (cm.haveItem(2431174, 100) && cm.haveItem(4000463, 20) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 80) && cm.haveItem(4310036, 1000) && cm.haveItem(1142313, 1)) {
                    cm.gainItem(2431174, -100);
                    cm.gainItem(4000463, -20);
                    cm.gainItem(4310030, -80);
                    cm.gainItem(4310036, -1000);
                    cm.gainItem(1142313, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142314)).copy(); // 生成一個Equip類                    
            toDrop.setStr(20); //裝備力量
            toDrop.setDex(20); //裝備敏捷
            toDrop.setInt(20); //裝備智力
            toDrop.setLuk(20); //裝備運氣
            toDrop.setMatk(20); //物理攻擊
            toDrop.setWatk(20); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[准尉]全屬性+20");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 10 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 20 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 80 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 1000 個\r\n#b需要#t1142313#：\t#r" + cm.itemQuantity(1142313) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==6){
                if (cm.haveItem(2431174, 100) && cm.haveItem(4000463, 30) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 100) && cm.haveItem(4310036, 2000) && cm.haveItem(1142314, 1)) {
                    cm.gainItem(2431174, -100);
                    cm.gainItem(4000463, -30);
                    cm.gainItem(4310030, -100);
                    cm.gainItem(4310036, -2000);
                    cm.gainItem(1142314, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142315)).copy(); // 生成一個Equip類                    
            toDrop.setStr(30); //裝備力量
            toDrop.setDex(30); //裝備敏捷
            toDrop.setInt(30); //裝備智力
            toDrop.setLuk(30); //裝備運氣
            toDrop.setMatk(30); //物理攻擊
            toDrop.setWatk(30); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[少尉]全屬性+30");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 30 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 100 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 2000 個\r\n#b需要#t1142314#：\t#r" + cm.itemQuantity(1142314) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==7){
                if (cm.haveItem(2431174, 100) && cm.haveItem(4000463, 30) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 100) && cm.haveItem(4310036, 2000) && cm.haveItem(1142315, 1)) {
                    cm.gainItem(2431174, -100);
                    cm.gainItem(4000463, -30);
                    cm.gainItem(4310030, -100);
                    cm.gainItem(4310036, -2000);
                    cm.gainItem(1142315, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142316)).copy(); // 生成一個Equip類                    
            toDrop.setStr(35); //裝備力量
            toDrop.setDex(35); //裝備敏捷
            toDrop.setInt(35); //裝備智力
            toDrop.setLuk(35); //裝備運氣
            toDrop.setMatk(35); //物理攻擊
            toDrop.setWatk(35); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[中尉]全屬性+35");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 30 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 100 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 2000 個\r\n#b需要#t1142315#：\t#r" + cm.itemQuantity(1142315) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==8){
                if (cm.haveItem(2431174, 100) && cm.haveItem(4000463, 30) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 100) && cm.haveItem(4310036, 4000) && cm.haveItem(1142316, 1)) {
                    cm.gainItem(2431174, -100);
                    cm.gainItem(4000463, -30);
                    cm.gainItem(4310030, -100);
                    cm.gainItem(4310036, -4000);
                    cm.gainItem(1142316, -1);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142317)).copy(); // 生成一個Equip類                    
            toDrop.setStr(40); //裝備力量
            toDrop.setDex(40); //裝備敏捷
            toDrop.setInt(40); //裝備智力
            toDrop.setLuk(40); //裝備運氣
            toDrop.setMatk(40); //物理攻擊
            toDrop.setWatk(40); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[上尉]全屬性+40");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 100 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 30 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 100 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 4000 個\r\n#b需要#t1142316#：\t#r" + cm.itemQuantity(1142316) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==9){
                if (cm.haveItem(2431174, 200) && cm.haveItem(4000463, 50) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 500) && cm.haveItem(4310036, 5000) && cm.haveItem(1142317, 1) && cm.haveItem(4001126, 1000) && cm.haveItem(4033356, 20) && cm.getPlayer().getLevel() > 200) {
                    cm.gainItem(2431174, -200);
                    cm.gainItem(4000463, -50);
                    cm.gainItem(4310030, -500);
                    cm.gainItem(4310036, -5000);
                    cm.gainItem(1142317, -1);
                    cm.gainItem(4001126, -1000);
                    cm.gainItem(4033356, -20);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142318)).copy(); // 生成一個Equip類                    
            toDrop.setStr(50); //裝備力量
            toDrop.setDex(50); //裝備敏捷
            toDrop.setInt(50); //裝備智力
            toDrop.setLuk(50); //裝備運氣
            toDrop.setMatk(50); //物理攻擊
            toDrop.setWatk(50); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[少校]全屬性+50★★");
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[少校]全屬性+50★★");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n#g等級需要達到200級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 50 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 500 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 5000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 1000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 20 個\r\n#b需要#t1142317#：\t#r" + cm.itemQuantity(1142317) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==10){
                if (cm.haveItem(2431174, 200) && cm.haveItem(4000463, 200) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 500) && cm.haveItem(4310036, 5000) && cm.haveItem(1142318, 1) && cm.haveItem(4001126, 3000) && cm.haveItem(4033356, 40) && cm.getPlayer().getLevel() > 220) {
                    cm.gainItem(2431174, -200);
                    cm.gainItem(4000463, -200);
                    cm.gainItem(4310030, -500);
                    cm.gainItem(4310036, -5000);
                    cm.gainItem(1142318, -1);
                    cm.gainItem(4001126, -3000);
                    cm.gainItem(4033356, -40);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142319)).copy(); // 生成一個Equip類                    
            toDrop.setStr(60); //裝備力量
            toDrop.setDex(60); //裝備敏捷
            toDrop.setInt(60); //裝備智力
            toDrop.setLuk(60); //裝備運氣
            toDrop.setMatk(60); //物理攻擊
            toDrop.setWatk(60); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[中校]全屬性+60★★★");
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[中校]全屬性+60★★★");
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[中校]全屬性+60★★★");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n#g等級需要達到220級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 200 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 500 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 5000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 3000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 40 個\r\n#b需要#t1142318#：\t#r" + cm.itemQuantity(1142318) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==11){
                if (cm.haveItem(2431174, 200) && cm.haveItem(4000463, 300) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 1000) && cm.haveItem(4310036, 10000) && cm.haveItem(1142319, 1) && cm.haveItem(4001126, 5000) && cm.haveItem(4033356, 40) && cm.getPlayer().getLevel() > 230) {
                    cm.gainItem(2431174, -200);
                    cm.gainItem(4000463, -300);
                    cm.gainItem(4310030, -1000);
                    cm.gainItem(4310036, -10000);
                    cm.gainItem(1142319, -1);
                    cm.gainItem(4001126, -5000);
                    cm.gainItem(4033356, -40);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142320)).copy(); // 生成一個Equip類                    
            toDrop.setStr(70); //裝備力量
            toDrop.setDex(70); //裝備敏捷
            toDrop.setInt(70); //裝備智力
            toDrop.setLuk(70); //裝備運氣
            toDrop.setMatk(70); //物理攻擊
            toDrop.setWatk(70); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[上校]全屬性+70★★★");
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[上校]全屬性+70★★★");
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[上校]全屬性+70★★★");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n#g等級需要達到230級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 300 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 1000 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 10000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 5000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 40 個\r\n#b需要#t1142319#：\t#r" + cm.itemQuantity(1142319) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==12){
                if (cm.haveItem(2431174, 300) && cm.haveItem(4000463, 500) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 1000) && cm.haveItem(4310036, 10000) && cm.haveItem(1142320, 1) && cm.haveItem(4001126, 8000) && cm.haveItem(4033356, 100) && cm.getPlayer().getLevel() > 240) {
                    cm.gainItem(2431174, -300);
                    cm.gainItem(4000463, -500);
                    cm.gainItem(4310030, -1000);
                    cm.gainItem(4310036, -10000);
                    cm.gainItem(1142320, -1);
                    cm.gainItem(4001126, -8000);
                    cm.gainItem(4033356, -100);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142321)).copy(); // 生成一個Equip類                    
            toDrop.setStr(100); //裝備力量
            toDrop.setDex(100); //裝備敏捷
            toDrop.setInt(100); //裝備智力
            toDrop.setLuk(100); //裝備運氣
            toDrop.setMatk(100); //物理攻擊
            toDrop.setWatk(100); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[團長]全屬性+100★★★★★");
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[團長]全屬性+100★★★★★");
            //cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[團長]全屬性+100★★★★★");
            //cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[團長]全屬性+100★★★★★");
            //cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[團長]全屬性+100★★★★★");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n#g等級需要達到240級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 300 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 500 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 1000 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 10000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 8000 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 100 個\r\n#b需要#t1142320#：\t#r" + cm.itemQuantity(1142320) + " / 1 個#k");
            cm.dispose();
                }
            } else if(typed==13){
                if (cm.haveItem(2431174, 4200) && cm.haveItem(4000463, 4200) && cm.getSpace(1) >= 1 && cm.haveItem(4310030, 5000) && cm.haveItem(4310036, 7000) && cm.haveItem(1142317, 1) && cm.haveItem(4001126, 60) && cm.haveItem(4033356, 20) && cm.getPlayer().getLevel() > 200) {
                    cm.gainItem(2431174, -4200);
                    cm.gainItem(4000463, -4200);
                    cm.gainItem(4310030, -5000);
                    cm.gainItem(4310036, -7000);
                    cm.gainItem(1142317, -1);
                    cm.gainItem(4001126, -60);
                    cm.gainItem(4033356, -20);
            var ii = cm.getItemInfo();                
            var toDrop = ii.randomizeStats(ii.getEquipById(1142318)).copy(); // 生成一個Equip類                    
            toDrop.setStr(50); //裝備力量
            toDrop.setDex(50); //裝備敏捷
            toDrop.setInt(50); //裝備智力
            toDrop.setLuk(50); //裝備運氣
            toDrop.setMatk(50); //物理攻擊
            toDrop.setWatk(50); //魔法攻擊 
            cm.addFromDrop(cm.getC(), toDrop, false);
            //cm.gainNX(1, 2);
            cm.sendOk("恭喜您晉級成功.");
            cm.getMap().startMapEffect("恭喜玩家 "+cm.getChar().getName()+" 晉級軍銜成功", 5120002);
            cm.worldSpouseMessage(0x20, "『軍事新聞』 : 恭喜士兵 " + cm.getChar().getName() + " 成功晉級為[少校]");
            cm.dispose();
                } else {
            cm.sendOk("晉級失敗：  #e#r勳章需要放在背包裡升級\r\n#g等級需要達到200級\r\n#b需要#t2431174#：\t\t#r " + cm.itemQuantity(2431174) + " / 4200 個\r\n#b需要#t4000463#：\t\t#r" + cm.itemQuantity(4000463) + " / 4200 個\r\n#b需要#t4310030#：\t\t#r" + cm.itemQuantity(4310030) + " / 5000 個\r\n#b需要#t4310036#：\t\t#r" + cm.itemQuantity(4310036) + " / 7000 個\r\n#b需要#t4001126#：\t\t#r" + cm.itemQuantity(4001126) + " / 60 個\r\n#b需要#t4033356#：\t\t#r" + cm.itemQuantity(4033356) + " / 20 個\r\n#b需要#t1142317#：\t#r" + cm.itemQuantity(1142317) + " / 1 個#k");
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
            cm.worldSpouseMessage(0x20, "[任務公告] : 恭喜 " + cm.getChar().getName() + " 在市場<普通服務員>處晉級了法弗納雙風翼弩.");
            cm.dispose();
                } else {
            cm.sendOk("合成失敗：\r\n\r\n#b需要#t4021012#：\t\t\t\t #r " + cm.itemQuantity(4021012) + " / 30 個\r\n#b需要#t4021010#： \t\t\t\t\t\t#r" + cm.itemQuantity(4021010) + " / 30 個\r\n#b需要#t4021011#： \t\t\t\t  #r" + cm.itemQuantity(4021011) + " / 30 個\r\n#b需要#t4000082#： \t\t\t\t  #r" + cm.itemQuantity(4000082) + " / 400 個\r\n#b需要#t4000124#：\t\t\t#r" + cm.itemQuantity(4000124) + " / 50 個\r\n#b需要#t4310015#：\t\t\t\t\t\t#r" + cm.itemQuantity(4310015) + " / 3 個\r\n#b需要#t4021019#：\t\t\t\t\t\t  #r" + cm.itemQuantity(4021019) + " / 1 個\r\n#b需要#t4033356#：\t\t\t\t\t   #r" + cm.itemQuantity(4033356) + " / 50 個\r\n#b需要#t4310030#： \t\t\t\t\t\t#r" + cm.itemQuantity(4310030) + " / 5000 個#k");
            cm.dispose();
                }
           }
      }
   }
 }