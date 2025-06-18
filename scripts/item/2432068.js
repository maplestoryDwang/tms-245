var status = 0;
var z = "#fUI/UIWindow/Quest/icon5/1#";//"+z+"//美化

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        im.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#e#r請認真選擇下面的革命武器,選錯後果自負#k#n\r\n";
        selStr += "#L1##b"+z+"#z1212079##l\r\n";
        selStr += "#L2##b"+z+"#z1222074##l\r\n";
        selStr += "#L3##b"+z+"#z1232074##l\r\n";
        selStr += "#L4##b"+z+"#z1402210##l\r\n";
        selStr += "#L5##b"+z+"#z1242080##l\r\n";
        selStr += "#L6##b"+z+"#z1302289##l\r\n";
selStr += "#L7##b"+z+"#z1312165##l\r\n";
selStr += "#L8##b"+z+"#z1322215##l\r\n";
selStr += "#L9##b"+z+"#z1332238##l\r\n";
selStr += "#L10##b"+z+"#z1362101##l\r\n";
selStr += "#L11##b"+z+"#z1372188##l\r\n";
selStr += "#L12##b"+z+"#z1382101##l\r\n";
selStr += "#L13##b"+z+"#z1382222##l\r\n";
selStr += "#L14##b"+z+"#z1412147##l\r\n";
selStr += "#L15##b"+z+"#z1422152##l\r\n";
selStr += "#L16##b"+z+"#z1432178##l\r\n";
selStr += "#L17##b"+z+"#z1442234##l\r\n";
selStr += "#L18##b"+z+"#z1452216##l\r\n";

selStr += "#L20##b"+z+"#z1462204##l\r\n";
selStr += "#L21##b"+z+"#z1472226##l\r\n";
selStr += "#L22##b"+z+"#z1482179##l\r\n";
selStr += "#L23##b"+z+"#z1492080##l\r\n";
selStr += "#L24##b"+z+"#z1492190##l\r\n";
selStr += "#L25##b"+z+"#z1522105##l\r\n";
selStr += "#L26##b"+z+"#z1532109##l\r\n";
selStr += "#L27##b"+z+"#z1252046##l\r\n";
selStr += "#L28##b"+z+"#z1542074##l\r\n";
selStr += "#L29##b"+z+"#z1552074##l\r\n";
selStr += "#L30##b"+z+"#z1262021##l\r\n";
selStr += "#L31##b"+z+"#z1582000##l\r\n";


        im.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 30:
                im.gainItem(1262021,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了ESP武器。");
                im.dispose();
            break;
        case 1:
                im.gainItem(1212079,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
        case 2:
                im.gainItem(1222074,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 3:
                im.gainItem(1232074,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 4:
                im.gainItem(1402210,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 5:
                im.gainItem(1242080,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 6:
                im.gainItem(1302289,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 7:
                im.gainItem(1312165,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 8:
                im.gainItem(1322215,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 9:
                im.gainItem(1332238,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 10:
                im.gainItem(1362101,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 11:
                im.gainItem(1372188,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 12:
                im.gainItem(1382101,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 13:
                im.gainItem(1382222,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 14:
                im.gainItem(1412147,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 15:
                im.gainItem(1422152,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 16:
                im.gainItem(1432178,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 17:
                im.gainItem(1442234,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 18:
                im.gainItem(1452216,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();

            break;
            case 20:
                im.gainItem(1462204,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 21:
                im.gainItem(1472226,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 22:
                im.gainItem(1482179,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 23:
                im.gainItem(1492080,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 24:
                im.gainItem(1492190,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 25:
                im.gainItem(1522105,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 26:
                im.gainItem(1532109,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 27:
                im.gainItem(1252046,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 28:
                im.gainItem(1542074,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 28:
                im.gainItem(1582000,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
            case 29:
                im.gainItem(1552074,1);
                im.gainItem(2432068,-1);
                im.worldSpouseMessage(0x20, "『自選箱子』 : 恭喜 " + im.getPlayer().getName() + " 通過新手禮包自選箱子獲得了革命武器。");
                im.dispose();
            break;
        }
    }
}
