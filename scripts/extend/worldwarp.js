/* Joyce
    Event NPC
*/

var status = -1;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";


var monstermaps = Array(
    //Array(50000,0,"大蘑菇（適合 1級 ~ 10級 的玩家）"), 
    //Array(100010100,0,"夢境小道（適合 3級 ~ 10級 的玩家）"),
    //Array(100040100,0,"石人寺院1（適合 10級 ~ 30級 的玩家）"),
    //Array(103020310,0,"1號線第2區間（適合 30級 ~ 70級 的玩家）"),
    //Array(102030400,0,"灰燼之地（適合 50級 ~ 70級 的玩家）"),
    //Array(105010301,0,"螞蟻洞2#r#e[2星級推薦]#b#n（適合 55級 ~ 70級 的玩家）"),
    //Array(200010130,0,"藍色庭院（適合 60級 ~ 80級 的玩家）"),
    //Array(925100100,0,"海盜船（適合 60級 ~ 80級 的玩家）"),
    //Array(600020300,0,"機械蜘蛛洞穴（適合 70級 ~ 90級 的玩家）"),
    //Array(300010400,0,"山腳（適合 80級 ~ 90級 的玩家）"),
    //Array(300010400,0,"石頭山入口#r#e[3星級推薦]#b#n（適合 90級 ~ 140級 的玩家）"),
    //Array(251010402,0,"紅鼻子海盜團老巢2#r#e[4星級推薦]#b#n（適合 125級 ~ 150級 的玩家）"),
    //Array(220060200,0,"扭曲的時間<3>（適合 110級 ~ 120級 的玩家）"),
    //Array(220060201,0,"時間異常之地（適合 120級以上 的玩家）"),
    //Array(240040510,0,"死龍巢穴（適合 130級以上 的玩家）"),
    //Array(270030100,0,"忘卻之路1（適合 140級 的玩家）"),
    //Array(271000100,0,"變形的提姆森林（適合 150級 的玩家）"),
    //Array(610040230,0,"外星基地走廊6（適合 140~170級 的玩家）"),
    //Array(273040100,0,"被遺棄的挖掘地區2#r#e[4星級推薦]#b#n（適合 180級 的玩家）"),
    Array(100040100,0,"石巨人的寺院1 (適合等級 10)"),
    Array(100040400,0,"石巨人的寺院4 (適合等級 10~30)"),
    Array(103020310,0,"1號線第2區段 (適合等級 30~60)"),
    Array(105010301,0,"螞蟻洞2 (適合等級 60~75)"),
    Array(261020401,0,"閒人勿入 (適合等級 75~79)"),
    Array(610040230,0,"外星基地走廊6 (適合等級 90~140)"),
    Array(251010403,0,"金勾海盜團基地3 (適合等級 140~170)"),
    Array(240040300,0,"峽谷西側路 (建議星力65) (適合等級 140~200)"),
    Array(271000100,0,"變形的提諾森林 (適合等級 140~200)"),
    Array(273040100,0,"被遺棄的挖掘地區2 (適合等級 190以上)"),
    Array(310070100,0,"機械墳墓入口 (適合等級 200以上)"),
    Array(310070210,0,"天際線1 (適合等級 210以上)"),
    Array(310070300,0,"黑色天堂甲板1 (適合等級 220以上)"),
    Array(310070330,0,"黑色天堂甲板3 (適合等級 230以上)"),
    Array(310070480,0,"黑色天堂內部迷宮6 (適合等級 240以上)") ,
    Array(450001000,0,"無名村"),
    Array(450002202,0,"啾啾岛")
);


var bossmap = Array(
//Array("[簡單/普通] 魔王巴洛古！", 105100100),
Array("[普通] 拉圖斯！", 220080000),
//Array("[普通] 暴力熊/心疤獅王！", 551030100),
//Array("[普通] 新加坡 - 千年樹精王遺跡Ⅱ", 541020700),
Array("[簡單/普通/進階] 殘暴炎魔任務！", 211042300),
Array("[普通] 妖精女王 - 艾菲尼婭", 300030300),
Array("[普通/進階] 闇黑龍王", 240040700),
Array("[簡單/普通] 次元縫隙 - 阿卡伊農祭壇", 272030300),
Array("[簡單/普通] 獅子王之城 - 凡雷恩", 211070000),
Array("[普通/困難] 阿斯旺 - 希拉", 262010000),
Array("#d[普通/困難] 西格諾斯的庭院 - 女皇", 271030600),
Array("[普通/混沌] 時間寵兒 - 皮卡啾", 270050000),
Array("#d[普通/強化] 強化鑽機,弱小勿進(New~)", 703020000),
Array("#d[普通/進階] 魯塔比斯 - 四大天王BOSS 。", 105200000),
Array("#r[噩夢牢籠] 桑凱梅爾茲 - 航海入口", 865000001),
Array("#r[噩夢牢籠] 心樹守護者之地 - 培羅德入口", 863000100),
Array("#r[噩夢牢籠] 暴君城堡戰場 - 暴君梅格耐斯", 401053002),
Array("#r[噩夢牢籠] 秘密祭壇 - 森蘭丸(New~)", 807300100),
Array("#r[噩夢牢籠] 比睿山 - 濃姬(New~)", 811000099),
Array("#r[噩夢牢籠] 黑色天堂 - 史烏(New~)", 310070490)
                                        ); 
        
var tiaotiaomaps = Array(
//Array(100000202,0,"寵物公園（射手跳跳）"),
Array(220000006,0,"玩具城寵物訓練場（玩具城跳跳）"),
Array(280020000,0,"火力心藏I （火山的心臟）"),
Array(109040001,0,"向高地<第1階段> (共4階段）"),
Array(910130000,0,"忍苦樹林 (第1階段) "),
Array(109030001,0,"上樓~上樓~<第1階段> （上樓找出口）"),
Array(910360002,0,"第一區域 （地鐵b1）"),
Array(910360102,0,"第一區域 （地鐵b2）"),
Array(910360203,0,"第一區域 （地鐵b3）")                            
                                        ); 




var yewaiguaimaps = Array(
//Array(100000202,0,"寵物公園（每日任務-射手跳跳）"),
//Array(220000006,0,"玩具城寵物訓練場（每日任務-玩具城跳跳）"),
Array(280020000,0,"火力心藏I （火山的心臟）"),
Array(109040001,0,"向高地<第1階段> (共4階段）"),
Array(910130000,0,"忍苦樹林 (第1階段) "),
Array(109030001,0,"上樓~上樓~<第1階段> （上樓找出口）"),
Array(910360002,0,"第一區域 （地鐵b1）"),
Array(910360102,0,"第一區域 （地鐵b2）"),
Array(910360203,0,"第一區域 （地鐵b3）")                            
                                        ); 

    
                                        
var bossmaps = Array( 
220080000,//"[普通] 挑戰拉圖斯！
551030100,//"[普通] 暴力熊、心疤獅王！"
541020800,//"[世界BOSS] 新加坡 - 千年樹精王遺跡Ⅱ"),
211070000,//"[凡雷恩] 獅子王之城 - 接見室走廊"),
211042300,//"[簡單/進階] 1 2線為普通殘暴炎魔、3線為進階殘暴炎魔！"),
240040700,//"[普通/進階] 3線為進階黑龍王，2和4線為普通黑龍王"),
270050000,//"[普通/混沌] 1線為普通皮卡啾，2線為混沌皮卡啾"),
703020000,//"#r[進階]底下鑽探機 - 強化鑽機"),
272020110,//"[普通] 次元縫隙-阿卡伊農祭壇"),
262030000,//"[黑暗軍團]解放阿斯旺 - 希拉之塔"),
105200000,//"#r[巨大樹根] 魯塔比斯 - 四大天王BOSS 。"),
//300030300,//"[普通] 妖精女王-艾菲尼婭"),
271040000,//"[騎士團] 女皇 - 西格諾斯的庭院"),
863000100,//"#d[噩夢的牢籠] 心樹守護者之地 - 培羅德入口(New~)"),
807300100,//"#d[森蘭丸BOSS] 通往秘密祭壇的路(New~)"),    
401060000);//"[噩夢的牢籠] 暴君城堡戰場 - 暴君梅格耐斯(New~)")


var selectedMap = -1;
var selectedArea = -1;

function start() {
    var map = cm.getMap();
    // if (map != null && (map.getFieldLimit() & 0x40) != 0) {
    //     cm.dispose();
    //     cm.getPlayer().dropMessage(1, "該區域無法進行傳送。");
    //     return;
    // }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2 || status == 0) {
            cm.dispose();
            return;
        }
        status--;
    }

    if (status == 0) {
        var menu = "";
        menu += "#L0#" + eff + "#r城鎮傳送#k#l";
        menu += "\r\n#L1#" + eff + "#r快速練級#k#l";
        menu += "\r\n#L3#" + eff + "#rBOSS傳送#k#l";
        menu += "\r\n#L19#" + eff + "#r怪物公園#k#b#l";
        menu += "\r\n#L2000#" + eff + "#r農楓幣圖#k#b#l";
        menu += "\r\n#L201#" + eff + "#r組隊副本#k#b#l";
        menu += "\r\n#L200#" + eff + "#r結婚禮堂#k#b#l";
        menu += "\r\n#L202#" + eff + "#r打開VUI#k#b#l";
        if (cm.getPlayer().isIntern()) {
            menu += "\r\n#L100#" + eff + "#r工作場所#k#b#l";
        }
        cm.sendSimple("#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#您好 #r#h ##k 請選擇您要傳送的項目:\r\n\r\n" + menu);
    } else if (status == 1) {
        var selStr = "請選擇您的目的地: #b";
        if (selection == 0) {
            cm.dispose();
            cm.openNpc(3000012);
            return;
        } else if (selection == 2) {
            cm.dispose();
            cm.openNpc(9010022);
            return;
        } else if (selection == 3) {
            cm.dispose();
            cm.openNpc(9010022,"BOSSwarp");
            return;
        } else if (selection == 19) {
            cm.warp(951000000,0);
                cm.dispose();
                return;
        } else if (selection == 200) {
            cm.warp(680000000,0);
                cm.dispose();
                return;
        } else if (selection == 100) {
                cm.dispose();
                if (!cm.getPlayer().isIntern()) {
                    return;
                }
                cm.warp(180000000,0);
                return;
        } else if (selection == 2000) {
            selStr += "\r\n#L1201# [#d刷遊戲幣#k]- #m271000100##l\r\n";
            selStr += "#L1202# [#d刷遊戲幣#k]- #m310070480##l\r\n\r\n";
            selStr += "#L1000# [#b結晶經驗二合一超贊地圖#k]- #m310070210##l\r\n\r\n";
            selStr += "#L1002# [#g刷楓幣#k]- #m273040100##l\r\n\r\n";
            selStr += "#L1003# [#r刷結晶#k]- #m50000##l\r\n";
            selStr += "#L1004# [#r刷紅楓葉#k]- #m273040000##l\r\n";
        } else if (selection == 21) {
                cm.dispose();
                cm.warp(910002000,0);
                return;
        } else if (selection == 201) {
                cm.dispose();
                cm.openNpc(9000086, "TeamEvent");
                return;
        } else if (selection == 202) {
            cm.openUI(1130);
            cm.dispose();
            return;
        }
        else if (selection == 8) {
                           for (var i = 0; i < tiaotiaomaps.length; i++) {
                    selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                           }    
        } else if (selection == 4) {
            //for (var i = 0; i < bossmaps.length; i++) {
                        //selStr += "\r\n#L" + i + "##m" + bossmaps[i] + "# #l";
                //    }               
                           for (var i = 0; i < bossmap.length; i++) {
                    selStr += "\r\n#L" + i + "#" + bossmap[i][2] + "";
                           }
        } else if (selection == 8) {       
                           for (var i = 0; i < tiaotiaomaps.length; i++) {
                    selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                           }    
     // } else if (selection == 7) {
            //for (var i = 0; i < tiaotiaomaps.length; i++) {
                    //selStr += "\r\n#L" + i + "#" + tiaotiaomaps[i][2] + "";
                        //}   
        } else if (selection == 5) {
                cm.warp(100000103,0);
                cm.dispose();
                return;
        } else {
            for (var i = 0; i < monstermaps.length; i++) {
                selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
            }
        } 
        //if(selection<1000&&selection>1003){
        selectedArea = selection;
        //}
        cm.sendSimple(selStr);
    } else if (status == 2) {
            //if (selection==20){
            //    selectedArea = selection;
            //}
        if(selection==1000||selection==1002||selection==1003||selection==1004||selection==1201||selection==1202){
            selectedArea = selection;
        }
        //cm.sendYesNo("看來這裡的事情都已經處理完了啊。您真的要移動到 #m" + (selectedArea == 0 ? maps[selection] : monstermaps[selection]) + "# 嗎？");
        cm.sendYesNo("看來這裡的事情都已經處理完了啊。您真的要移動嗎？");
        selectedMap = selection;
    } else if (status == 3) {
        if (selectedMap >= 0) {
        if(selectedArea == 0){
            cm.dispose();
            cm.warp(maps[selectedMap],0);
        }else if(selectedArea == 4){
            cm.dispose();
            cm.warp(bossmaps[selectedMap],0);
        }else if(selectedArea == 8){
            cm.dispose();
            cm.warp(tiaotiaomaps[selectedMap][0],0);
        }else if(selectedArea == 1000){
            cm.dispose();
            cm.warp(310070210,0);
        }else if(selectedArea == 1201){
            cm.dispose();
            cm.warp(271000100,0);
        }else if(selectedArea == 1202){
            cm.dispose();
            cm.warp(310070480,0);
        }else if(selectedArea == 1203){
            cm.dispose();
            cm.warp(450001261,0);
        }else if(selectedArea == 1002){
            cm.dispose();
            cm.warp(273040100,0);
        }else if(selectedArea == 1003){
            cm.dispose();
            cm.warp(50000,0);
        }else if(selectedArea == 1004){
            cm.dispose();
            cm.warp(273040000,0);
            
        }else{
            cm.warp(monstermaps[selectedMap][0],0);
        }
            //cm.warp(selectedArea == 0 ? maps[selectedMap] : monstermaps[selectedMap], 0);
        }
        cm.dispose();
    } else if (status == 6) {
        cm.dispose();
    }
}