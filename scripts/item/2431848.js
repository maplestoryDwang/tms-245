var status = -1;

function start() {
    var menu = im.getSkillMenu(10);
    if (menu == "" || im.getJob() < 430 || im.getJob() > 434) {
        im.sendOkS("你還沒學可以使用秘笈的技能,或是沒有現在此精通秘笈可以套用的技能.請確認一下再使用.\r\n\r\n#r#L0# #fn字體##fs14##e取消使用精通秘笈 .#n#fs##fn##l", 4, 1056000);
        im.dispose();
    } else {
        im.sendSimpleS("你可以提升的技能清單如下.\r\n" + menu + "\r\n\r\n#r#L0# #fn字體##fs14##e取消使用精通秘笈 .#n#fs##fn##l", 5, 1056000);
    }
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (selection > 0 && im.canUseSkillBook(selection, 10) && im.used()) {
            im.useSkillBook(selection, 10);
        } else if (selection != 0) {
            im.sendOkS("目前想使用精通秘笈的話,你選擇的技能等級還太低.請你提升該技能到等級5以上吧.", 4, 1056000);
        }
        im.dispose();
    } else {
        im.dispose();
    }
}