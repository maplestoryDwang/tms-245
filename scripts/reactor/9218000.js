function act() {
    var em = rm.getEventManager("Prison");
    var eim = rm.getEventInstance();
    if (em != null && eim != null) {
        eim.setProperty("openDoor", String(parseInt(eim.getProperty("openDoor")) + 1));
        rm.removeItem(4001528);
    }
    if (eim.getProperty("openDoor").equals("4")) {
        rm.startMapEffect("呼，多虧了你，終於可以從監獄裡逃出去了。", 5120053);
    }
}