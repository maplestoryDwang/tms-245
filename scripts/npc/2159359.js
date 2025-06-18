/*
    製作：WSY工作室
    功能：挑戰BOSS
    時間：2017年1月15日
*/
var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
var status = -1;
var text;
var icon1 = "#fUI/Gateway/WorldSelect/icon/0#";
var icon2 = "#fUI/UIWindow/Quest/icon2/7#";
var supericon = "#fUI/Basic.img/BtClaim/normal/0#";
var warning = "#fUI/CashShop.img/CSBeauty/hairColor/Enable/1#";
var icon3 = "#fUI/GuildMark.img/Mark/Etc/00009003/3#"; //劍
var icon4 = "#fUI/GuildMark.img/Mark/Etc/00009003/10#"; //劍
var icon5 = "#fUI/GuildMark.img/Mark/Etc/00009003/14#"; //劍
var icon6 = "#fEtc/pachinkoCygnus.img/controller/base/2#"
var selection1;
var secondsel = false;

var bosslist = [
    ["鬧  鍾", 220080000, [8500002]],
    ["希  拉", 262030000, [9300600]],
    ["濃  姬", 811000099, [9450022]],
    ["扎  昆", 211042300, [8800002, 8800102]],
    ["鑽  機", 703020000, [9600086, 9600087]],
    ["黑  龍", 240050400, [8810018, 8810122]],
    ["妖女王", 300030300, [5250007]],
    ["皮卡啾", 270050000, [8820014, 8820304]],
    ["獅子王", 211070000, [8840010]],
    ["西格諾斯", 271040000, [8850012]],
    ["森蘭丸", 807300100, [9421581, 9421583]],
    ["大蝙蝠", 105100100, [8830007, 8830000]],
    ["阿卡伊", 272030300, [9300303]],
]

var bosslist2 = [
    ["【武陵道場】", 925020000],
    ["【BOSS競技】", 932200000],
    ["【四大天王】", 105200000],
    ["【烏鴉天狗】", 104020110],
    ["【起源之塔】", 992000000],
    ["【貝勒·德】", 863000100],
    ["【梅格耐斯】", 401060000],
    ["【烏魯·斯】", 970072200],
    ["【黑暗史烏】", 350060300],
    ["【戴米·安】", 105300303],
    ["【露西·德】", 450003600],

]

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            text = "\t\t\t\t\t#b#v3994060##v3994073##v3991072##v3991072#\r\n"
            bosslist.forEach(function (value, index, array) {
                text += "#L" + index + "#" + icon4 + "【" + value[0] + "】" + "#l" + ((index + 1) % 3 == 0 ? "\r\n" : "  ");
            });
            text += "\r\n\r\n#r";
            bosslist2.forEach(function (value, index, array) {
                text += ((index + 1) % 2 == 1 ? "" : "") + "#L" + (index + 100) + "#" + icon5 + value[0] + "#l" + ((index + 1) % 3 == 0 ? "\r\n" : "#l");
            })
            text += "#n\r\n#L1003#" + icon6 + "#e#d【BOSS次數查詢】 #L1004#" + icon6 + "#e#d【BOSS次數重置】#l#l";
            cm.sendSimple(text);
        } else if (status == 1) {
            selection1 = selection;
            if (selection < 100) { // bosslist
                var idd = bosslist[selection1][1];
                if (idd < 100000000) {
                    cm.dispose();
                    cm.openNpc(idd);
                } else {
                    var bosss = bosslist[selection1][2];
                    if (bosss != null && bosss.length > 1) {
                        secondsel = true;
                        cm.sendSimple("你這個無知的傻瓜，那麼請選擇吧！\r\n#L0# #v3994116# #l#L1# #v3994117# #l");
                    } else if (bosss != null) {
                        showEnterBoss(bosslist[selection1][0], bosss[0], -1);
                    } else {
                        cm.sendOk("發生未知錯誤.");
                        cm.dispose();
                    }
                }
            } else if (selection < 1000) { // bosslist2
                cm.warp(bosslist2[selection1 - 100][1]);
                cm.dispose();
            } else if (selection == 1000) { // 休閒副本
                cm.sendOk("休閒副本");
                cm.dispose();
            } else if (selection == 1001) { // 組隊副本
                cm.sendOk("組隊副本");
                cm.dispose();
            } else if (selection == 1002) { // 超級副本
                cm.sendOk("超級副本");
                cm.dispose();
            } else if (selection == 1003) { // BOSS次數查詢
                cm.dispose();
                cm.openNpc(2159359, 1)
            } else if (selection == 1004) { // BOSS次數重置
                cm.dispose();
                cm.openNpc(2159359, 2)
            } else {
                cm.sendOk("未知選項");
                cm.dispose();
            }
        } else if (status == 2) {
            if (secondsel) {
                showEnterBoss(bosslist[selection1][0], bosslist[selection1][2][selection], selection);
            } else {
                if (selection == 2) {
                    status = -1;
                    action(1, 0, 0);
                } else {
                    cm.warp(bosslist[selection1][1]);
                    cm.dispose();
                }
            }
        } else if (status == 3) {
            if (selection == 2) {
                status = -1;
                action(1, 0, 0);
            } else {
                cm.warp(bosslist[selection1][1]);
                cm.dispose();
            }
        }
    }
}

function getIcon(index) {
    if (index > 0 && index < 10) {
        return "#fUI/Basic/LevelNo/" + index + "#";
    } else {
        return "";
    }
}

function showEnterBoss(basename, bossid, type) {
    var text = "\r\n#L0# #r#e開始挑戰#n#b#l\t#L1# #e放棄挑戰#n#l #L2##d#e<<<返回到上一步#n#l\r\n\r\n\r\n#b"
    text += "BOSS名稱：" + (type == -1 ? "" : type == 0 ? "簡單" : "困難") + basename + "\r\n";
    text += "BOSS掉寶：" + cm.checkDrop(bossid) + "\r\n"
    cm.sendSimple(text)
}
