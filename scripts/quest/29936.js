/*
    任務: 廢都榮譽市民
    描述: 幫助內拉洗刷了廢都的污名，成為了#b廢都榮譽市民#k。
*/
var status = -1;

function start(mode, type, selection) {
    if (qm.getPlayer().getLevel() >= 10 && (qm.getPlayer().getJob() / 100) | 0 == 22) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.getPlayer().getLevel() >= 10 && (qm.getPlayer().getJob() / 100) | 0 == 22) {
        qm.forceStartQuest();
        qm.forceCompleteQuest();
    }
    qm.dispose();
}
