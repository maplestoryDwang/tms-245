/*
    任務: 克裡塞的拯救者
    描述: 擊敗了薛西斯，拯救了克裡塞。
    需要: 1142259 - 克裡塞拯救者
*/
var status = -1;

function start(mode, type, selection) {
    if (qm.haveItem(1142259, 1) && qm.getPlayer().getLevel() >= 10) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.haveItem(1142259, 1) && qm.getPlayer().getLevel() >= 10) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
