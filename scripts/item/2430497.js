function start() {
    if (im.getSpace(2) < 1 && im.getSpace(1) < 10 && im.getSpace(5) < 5) {
        im.sendOk("請讓你背包裝備欄騰出10個空格。");
        im.dispose();
    } else {
        im.remove(1);

        im.gainItem(1012057, 1);
        im.gainItem(1022048, 1);
        im.gainItem(1002186, 1);
        im.gainItem(1072153, 1);
        im.gainItem(1082102, 1);
        im.gainItem(1042096, 1);
        im.gainItem(1062098, 1);
        im.gainItem(1112116, 1);
        im.gainItem(1112226, 1);
        im.gainItem(1142263, 1);

        im.gainItem(2000005, 300);

        im.gainItem(3700012, 1);

        im.gainItem(5211047, 1);
        im.gainItem(5360014, 1);
        im.gainItem(5151036, 1);
        im.gainItem(5152057, 1);
        im.gainItem(5150052, 1);
        im.sendOk("請打開裝備欄、消耗欄、特殊欄查收。");
        im.dispose();
    }
}