
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("還挺膽小的哦～ 不相信我嗎？");
            cm.dispose();
            return;
        }
        if (status == 1 && mode == 0) {
            cm.sendNext("？？？？");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if(status == 0){
            cm.sendAcceptDecline("你想要靠近秘密祭壇？？");
        } else if(status == 1){
            cm.sendNext("好，那就過去吧。。");
        } else if(status == 2){
            cm.warp(807300100,0);
            cm.dispose();
            
        }
    }
}
