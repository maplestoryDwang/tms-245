var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
    cm.dispose();
    return;
    } else if (mode == 1){
    status++;
    } else {
    status--;
    }

    switch (status) {
        case 0: 
      cm.warp(220000006, 0);
            cm.dispose();
            break;
        case 1: //
            cm.dispose();//這是結束腳本，請按照實際情況使用
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
