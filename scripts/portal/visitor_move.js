function enter(pi) {
    var eim = pi.getEventInstance();
    if (eim != null) {
        var mapid = pi.getMapId();
        var nextMap = -1;
        var stage = parseInt((mapid % 1000) / 100);
        switch (stage) {
            case 0:
                nextMap = 861000100;
                break;
            case 1://Stage 1
            case 2://Stage 2
            case 3://Stage 3
            case 4://Stage 4
                if (!eim.getProperty("stage" + stage).equals("0"))
                    nextMap = mapid + 100;
                break;
            case 5://BOSS
                if (!eim.getProperty("stage" + stage).equals("0")) {
                    nextMap = 861000001;
                }
                break;
        }
        if (nextMap > 0) {
            eim.setProperty("stage", parseInt(stage + 1));
            eim.setProperty("killed", "0");
            pi.warpParty(nextMap, 0);
            eim.restartEventTimer(5 * 60 * 1000);
        } else {
            pi.playerMessage("請消滅指定數量的怪物以進入下一階段!");
        }
    }
}
