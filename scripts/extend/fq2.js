var status;
var partyLdr;
var chatState;
var party;
var preamble;
var stage8question;
var stage8answer;
if(preamble == null){
var random = java.lang.Math.floor(Math.random() * 4 + 1);
}
if(random == 1){
stage8question = Array("10+2=?", "10+2=?");
stage8answer = Array(Array(1, 1, 0, 0), Array(1, 1, 0, 0));
} else if(random == 2){
stage8question = Array("20+3=?", "20+3=?");
stage8answer = Array(Array(0, 1, 1, 0), Array(0, 1, 1, 0));
} else if(random == 3){
stage8question = Array("30+4=?", "30+4=?");
stage8answer = Array(Array(0, 0, 1, 1), Array(0, 0, 1, 1));
} else if(random == 4){
stage8question = Array("10+4=?", "10+4=?");
stage8answer = Array(Array(1, 0, 0, 1), Array(1, 0, 0, 1));
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        boxStage(cm);
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("2stageclear", "true");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
    cm.givePartyExp(5040, eim.getPlayers());
    // stage 9 does not have a door, might be cause of DC error
}

function failstage(eim, cm) {
    cm.showEffect(true, "quest/party/wrong_kor");
    cm.playSound(true, "Party1/Failed");
}

function boxStage(cm) {
    var debug = false;
    var eim = cm.getEventInstance();
    var nthtext = "eighth";
    var nthobj = "boxes";
    var nthverb = "stand";
    var nthpos = "stand too close to the edges";
    var curcombo = stage8answer;
    var currect = cm.getMap().getAreas();
    var objset = [0, 0, 0, 0];

    if (cm.isLeader()) { // leader
        if (status == 0) {
            party = eim.getPlayers();
            preamble = eim.getProperty("leader1" + nthtext + "preamble");
            if (preamble == null) {
                cm.sendNext("你好。歡迎來到第2階段，在我旁邊，有4個籐蔓。需要2個隊友爬在籐蔓上，隊長在來點擊我，看是否正確。祝你好運！");
                eim.setProperty("leader1" + nthtext + "preamble", "done");
                var as = Math.floor(Math.random() * stage8answer.length);
                eim.setProperty("stage" + nthtext + "combo", as);
                cm.getMap().startSimpleMapEffect(stage8question[as], 5120018);
                cm.dispose();
            } else { // otherwise, check for stage completed
                var complete = eim.getProperty("2stageclear");
                if (complete != null) {
                    var mapClear = "2stageclear";
                    eim.setProperty(mapClear, "true"); // Just to be sure
            //cm.warpParty(910340300);
                    cm.sendNext("恭喜你！ 你成功通過了第2階段！快點，向第3階段前進吧！");
                } else {
                    var totplayers = 0;
                    for (i = 0; i < objset.length; i++) {
                        var present = cm.getMap().getNumPlayersItemsInArea(i);
                        if (present != 0) {
                            objset[i] = objset[i] + 1;
                            totplayers = totplayers + 1;
                        }
                    }
                    if (totplayers == 2 || debug) {
                        var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        var testcombo = true;
                        for (i = 0; i < objset.length; i++) {
                            if (combo[i] != objset[i]) {
                                testcombo = false;
                            }
                        }
                        if (testcombo || debug) {
                            clear(8, eim, cm);
                            if (cm.getEventInstance().getProperty("s8start") != null) {
                                var starts4Time = cm.getEventInstance().getProperty("s8start");
                                var nowTime = new Date().getTime();
                                if ((nowTime - starts4Time) < 90000) cm.getEventInstance().setProperty("s8achievement", "true"); // give via portal script.
                            }
                            cm.dispose();
                        } else {
                            failstage(eim, cm);
                            cm.dispose();
                        }
                    } else {
                        if (debug) {
                            var outstring = "Objects contain:"
                            for (i = 0; i < objset.length; i++) {
                                outstring += "\r\n" + (i + 1).toString() + ". " + objset[i].toString();
                            }
                            cm.sendNext(outstring);
                            var combo = curcombo[parseInt(eim.getProperty("stage" + nthtext + "combo"))];
                        } else {
                            cm.sendNext("需要 2名隊員爬在籐蔓上 組成不同的組合. 只允許 2名隊員爬在籐蔓上, 請記住你們已經使用過的錯誤組合,方便快速通關.");
                            cm.dispose();
                        }
                    }
                }
            }
        } else {
            cm.dispose();
        }
    } else { // not leader
        if (status == 0) {
                cm.sendNext("恭喜你！ 你成功通過了第2階段！快點，向第3階段前進吧！");
                cm.dispose();
        } else {
                cm.sendNext("恭喜你！ 你成功通過了第2階段！快點，向第3階段前進吧！");
                cm.dispose();
        }
    }
}