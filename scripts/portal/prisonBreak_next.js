function enter(pi) {
    if (pi.getPlayer().getParty() != null) {
        var cleared = false;
        switch (pi.getMapId() / 100) {
            case 9211601:
            case 9211605:
                cleared = true;
                break;
            case 9211602:
            case 9211604:
                cleared = pi.getMap().getAllMonster().size() == 0;
                break;
            case 9211606:
                cleared = pi.getPlayer().getEventInstance() != null && pi.getPlayer().getEventInstance().getProperty("openDoor") != null && pi.getPlayer().getEventInstance().getProperty("openDoor").equals("4");
                break;
        }
        if (cleared) {
            pi.warpParty(pi.getMapId() + 100);
            pi.playPortalSE();
        } else {
            pi.playerMessage(5, "傳送口未開啟..");
        }
    } else {
        pi.playerMessage(5, "傳送口已關閉.");
    }
}
