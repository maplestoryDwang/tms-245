/*
Stage 2: Key door - Guild Quest

@Author Lerk
*/

function enter(pi) {
    if (pi.getMap().getReactorByName("stonegate").getState() == 1) {
        pi.warp(990000430, 0);
        return true;
    } else {
        pi.playerMessage("現在關閉了縮地石。");
        return false;
    }
}
