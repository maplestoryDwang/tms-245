/*
 
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
    ms.showWZEffect("Effect/Direction12.img/XenonTutorial/SceneLogo");
    ms.setInGameCurNodeEventEnd(true);
    ms.EnableUI(1);
        ms.setVansheeMode(1);
        ms.setDelay(100);
    } else if (status == 1) {
        ms.setDelay(6300);
    } else {
        ms.dispose();
        ms.warp(931050900, 0);
        ms.enableActions();
    }
}

