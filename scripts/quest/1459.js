/* Samuel
    Leafre : Forest of the Priest (240010501)
    4th Job Advancer/Quests.
        Made by TheGM
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else if (status == 3) {
            qm.sendOk("考慮好後再來找我吧。");
            qm.dispose();
            return;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("無數個勇者在冒險世界，但只有少數值得和我見面。你已經獲得了令人難以置信的力量…但是不把力量與偉大混淆了。");
        }else if(status == 1) {
            qm.sendNextPrev("#b4轉#k將給予你更大的威力, 但它也帶來了新的責任。你必須用你的力量主持正義。這將是你#b領導冒險世界走向未來#k的職責。");
        }else if(status == 2) {
            qm.sendNextPrev("也許你無憂無慮的周遊世界，只是為了樂趣。現在是時候成為一個英雄，並幫助你周圍的人。");
        }else if(status == 3) {
            qm.sendYesNo("現在，這對你的考驗時間。#r天鷹#k和#r火焰龍#k 有權承認真正的英雄。你的任務是擊敗他們，獲得#b#t4031343##k和#b#t4031344##k。");
        }else if(status == 4) {
            qm.forceStartQuest();
            qm.sendOk("你願意幫助冒險世界嗎?");
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
                qm.sendYesNo("幹得漂亮, 你確定要進行4轉了嗎?");
        } else if(status == 1) {
            if (qm.haveItem(4031860, 1) || qm.haveItem(4031861, 1) ) {
                qm.removeAll(4031860);//英雄五角星
                qm.removeAll(4031861);//英雄之星
                qm.gainItem(1142110, 1);//Master Adventure medal
                if (qm.getJob() == 511) {
                    qm.changeJob(512);
                } else if (qm.getJob() == 521) {
                    qm.changeJob(522);
                } else if (qm.getJob() == 531) {
                    qm.changeJob(532);
                } else {
                    qm.sendOk("出現未知錯誤");
                    qm.dispose();
                }
                qm.sendNext("你已經成功4轉了, 恭喜你！");
                //qm.gainSp(2);
                qm.forceCompleteQuest();
                qm.dispose();
            }
        } else {
            qm.sendOk("嗯, 考慮好後再來找我吧。");
            qm.dispose();
        }
    }
}
