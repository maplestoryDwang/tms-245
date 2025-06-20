var status = -1;

function action(mode, type, selection) {
    status++;
    switch (ms.getMapId()) {
        case 807100010:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.showEffect(false, "JPKenji/text0");
                ms.setDelay(7000);
            } else {
                ms.dispose();
                ms.warp(807100000, 0);
            }
            break;
        case 807100000:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.setForcedInput(1);
                ms.setDelay(4300);
                ms.setInGameCurNodeEventEnd(true);
            } else {
                ms.setForcedInput(0);
                ms.dispose();
                ms.openNpc(500001);
            }
            break;
        case 807100011:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.showEffect(false, "JPKenji/text1");
                ms.setDelay(7000);
                ms.setInGameCurNodeEventEnd(true);
            } else {
                ms.dispose();
                ms.resetMap(807100001);
                ms.warp(807100001, 0);
            }
            break;
        case 807100001:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.spawnMonster(9421505, -630, 32);
                ms.spawnMonster(9421507, -450, 32);
                ms.spawnMonster(9421505, -270, 32);
                ms.spawnMonster(9421507, -90, 32);
                ms.spawnMonster(9421505, 90, 32);
                ms.spawnMonster(9421507, 270, 32);
                ms.spawnMonster(9421505, 450, 32);
                ms.spawnMonster(9421507, 630, 32);
                ms.teachSkill(40011183, 1, 1);
                ms.teachSkill(40011184, 1, 1);
                ms.teachSkill(40011185, 1, 1);
                ms.teachSkill(40011186, 1, 1);
                ms.sendDirectionEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0", 0, 0, -120, 0, 0);
                ms.setDelay(2000);
                ms.setInGameCurNodeEventEnd(true);
            } else if (status == 1) {
                ms.sendDirectionEffectPlay("Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/2", 0, 0, -120, 0, 0);
                ms.setDelay(2000);
                ms.setInGameCurNodeEventEnd(true);
            } else {
                ms.EnableUI(0);
                ms.topMsg("打敗所有敵人打開東門吧！");
                ms.showEffect(false, "aran/tutorialGuide2");
                ms.dispose();
            }
            break;
        case 807100012:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.showEffect(false, "JPKenji/text2");
                ms.setDelay(7000);
            } else {
                ms.dispose();
                ms.warp(807100003, 0);
            }
            break;
        case 807100003:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.setForcedInput(1);
                ms.setDelay(2200);
                ms.setInGameCurNodeEventEnd(true);
            } else {
                ms.setForcedInput(0);
                ms.dispose();
                ms.openNpc(9131000);
            }
            break;
        case 807100005:
            if (status == 0) {
                ms.setInGameCurNodeEventEnd(true);
                ms.EnableUI(1);
                ms.DisableUI(true);
                ms.playMovie("JPHayato.avi",true);
            } else {
                ms.EnableUI(0);
        ms.DisableUI(false);
                ms.dispose();
                ms.warp(807040000, 0);
            }
            break;
        default:
            ms.dispose();
    }
}