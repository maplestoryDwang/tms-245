   //-----------------//
  //　Careless 製作  //
 // qq 50009219     //
//-----------------//
var status = 0;
var random = java.lang.Math.floor(Math.random() * 4);
var a = "#fEffect/CharacterEff/1082565/0/0#";  //餅乾兔子
var b = "#fEffect/CharacterEff/1112904/0/0#"; //彩色星星
var c = "#fEffect/CharacterEff/1003271/0/0#";  //紅色心心
var d = "#fEffect/CharacterEff/1112946/4/1#";  //鑽石
var e = "#fEffect/CharacterEff/1082229/0/0#";  //紅心
var f = "#fUI/Basic/LevelNo/0#"; //[1]+1
var j = "#fUI/Basic/LevelNo/1#"; //[1]+1
var h = "#fUI/Basic/LevelNo/2#"; //[1]+1
var i1 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var g = "#fUI/Basic/LevelNo/4#"; //[1]+1
var k = "#fUI/Basic/LevelNo/5#"; //[1]+1
var l1 = "#fUI/Basic/LevelNo/6#"; //[1]+1
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        //cm.openNpc(2470018);
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
        cm.sendOk("很遺憾，您因為違反用戶守則被禁止遊戲活動，如有異議請聯繫管理員.")
        cm.dispose();
    } else if (status == 0) {
        var selStr = "#e#d鬥牛進行時 Π　氣勢洶洶的牛牛已經迫不及待衝出圍欄\r\n[#r#h ##d]　勇士 快來挑戰阻止這頭牛牛吧！\r\n";
        selStr += "#e#d尊敬的玩家 [ #h # ]\r\n\r\n#r#L8#確認進入[ 鬥牛挑戰殿堂 ]#l#k#n";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0://進入鬥牛
                cm.dispose();

                break;
        }
    }
}