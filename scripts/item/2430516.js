var gift = new Array(
    3015400,
    3015378,
    3015395,
    3015342,
    3015331,
    3015330,
    3015329,
    3015257,
    3015263,
    3015236,
    3015272,
    3015227,
    3015262,
    3015225,
    3015182,
    3012028,
    3015211,
    3015193,
    3015183,
    3015143,
    3015161,
    3015120,
    3015118,
    3015111,
    3015078,
    3015015,
    3015016,
    3015017,
    3015018,
    3015019,
    3015020,
    3015021,
    3015022,
    3015023,
    3015024,
    3015025,
    3015026,
    3015096,
    3012027,
    3015080,
    3015092,
    3015091,
    3015047,
    3015047,
    3015034,
    3010939,
    3010938,
    3010937,
    3010964,
    3012026,
    3010936,
    3010879,
    3010843,
    3010842,
    3010838,
    3010783,
    3010715,
    3010620,
    3010528,
    3010145,
    3010522

    );



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        im.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }

    var item = im.gainGachaponItem(gift[Math.floor(Math.random() * gift.length)], 1, "O!μU°2μA½eEI±|Ii′u");
    if (item != -1) {
        im.remove(1);
        //im.gainItem(4310030, 10);
        im.sendOk("Aa»nμAAE #b#t" + item + "##k 1 ﹐o");
    } else {
        im.sendOk("CeAaE·EIOU±3°uμA×°±﹐￡¬IuoA￡¬AaEu′°¿UODEC·nODO»﹐nOOEIμA¿O¼a!￡");
    }
    im.safeDispose();
}