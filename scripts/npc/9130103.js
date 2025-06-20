var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            cm.sendSimple("你想要做什麼呢?\r\n#b#L0#傳送到比睿山本堂前[濃姬副本]#k\r\n#b#L1#離開這裡#k");
            break;
        case 1: //
            if (selection == 0) {
                cm.saveLocation("MULUNG_TC");
                cm.warp(811000999, 0);
            } else {
                var returnMap = cm.getSavedLocation("MULUNG_TC");
                cm.clearSavedLocation("MULUNG_TC");
                if (cm.getMapId() != returnMap) {
                    cm.warp(returnMap, 0);
                }
            }
            cm.dispose();
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
