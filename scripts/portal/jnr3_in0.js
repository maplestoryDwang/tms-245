function enter(pi) {
    if (pi.getMap().getReactorByName("jnr3_out1").getState() > 0) {
        pi.warp(926110201, 0);
    } else {
        pi.playerMessage(5, "實驗室大門是關閉的!");
    }
}
