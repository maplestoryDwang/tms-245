/* 樂豆點商店 */

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
        zyms = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追憶 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n";

        zyms += "#k金卷餘額:#r" + cm.getJQ() + "#k張 購買物品前請看好在購買。\r\n";
        zyms += "#L1##b雙倍道具#l #L2##b椅子商店#l #L3##b點裝商店#l #L4##b玩具商店#l\r\n\r\n";
        zyms += "                  #L5##r喇叭商店#l\r\n\r\n";
        zyms += "      #L6##r道具卷軸#l     #fMob/0130101.img/move/0# #L7##r騎寵商店#l\r\n";
        zyms += "                  #L8##r破攻石頭#l\r\n\r\n";
        zyms += "#L9##b戒指商店#l #L10##b翅膀商店#l #L11##r140裝備店#l #L12##r150裝備店#l";
        cm.sendSimple(zyms);

    } else if (status == 1) {
        switch (selection) {
            case 1:
                cm.dispose();
                cm.openNpc(2140005, 1); //雙倍道具
                break;
            case 2:
                cm.dispose();
                cm.openNpc(2140005, 2); //椅子商店
                break;
            case 3:
                cm.dispose();
                cm.openNpc(2140005, 3); //點裝商店
                break;
            case 4:
                cm.dispose();
                cm.openNpc(2140005, 4); //玩具商店
                break;
            case 5:
                cm.dispose();
                cm.openNpc(2140005, 5); //喇叭商店
                break;
            case 6:
                cm.dispose();
                cm.openNpc(2140005, 6); //道具商店
                break;
            case 7:
                cm.dispose();
                cm.openNpc(2140005, 7); //騎寵商店
                break;
            case 8:
                cm.dispose();
                cm.openNpc(2140005, 8); //破攻石頭
                break;
            
            case 9:
                cm.dispose();
                cm.openNpc(2140005, 9); //戒指商店
                break;
            
            case 10:
                cm.dispose();
                cm.openNpc(2140005, 10); //翅膀商店
                break;    
        
            case 11:
                cm.dispose();
                //cm.openNpc(2140005, 9); //戒指商店
                break;
            
            case 12:
                cm.dispose();
                //cm.openNpc(2140005, 10); //翅膀商店
                break; 



        }
    }
}
