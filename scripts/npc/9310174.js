/*
傳送NPC
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
            cm.sendNext("好的,想去了再來找我吧。");
            cm.dispose();
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("你想奇趣好玩的轉蛋屋嗎?");
    } else if (status == 1) {
        cm.warp(749050400,0);
        cm.dispose();
    }
  }
