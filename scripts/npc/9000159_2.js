var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {//如果你有#b#t05152053##k 使用皇家整容院優惠券
        cm.sendSimple("歡迎參加活動,接下來的#b2分鐘#k你可以隨意抽取#b皇家髮型#k。免費的喲,千萬別錯過了!!\r\n#b#L0#立即抽取皇家髮型(免費)#l");
    } else if (status == 1) {
        cm.sendYesNo("整容後無法還原,你現在確定要更換臉型嗎？");
    } else if (status == 2) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20055, 20056, 20057];
        } else {
            facetype = [21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21053, 21054, 21055];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
         //if (cm.setRandomAvatar(4001246, hair_Colo_new) == 1) {
         if (cm.setRandomAvatar(4001246, facetype) == 1) {   
         cm.sendOk("好了,你的朋友們一定認不出你了!");
        } else {
            cm.sendOk("你最少需要1個#v4310057#才可以免費抽取。");
        }
        cm.safeDispose();
    }
}
