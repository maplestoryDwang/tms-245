/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：隱藏的椅子
 *  @Author Kent 
 */

var a = 0;
var luckyItem = Array();
var selectedItem;
var pass = true;
var needOnlineTime = 720;        //需要在線時間
var Allitem = Array(
        3010984, //蘋果
        3010020, //一代不速之客 指虎
        3010021, //三代不速之客弓
        3010024, //傳說狂龍怒斬
        3010025, //二代不速之客 指虎
        3010026, //楓之谷寶石斧
        3010028, //耳環智力卷軸65%
        3010029, //耳環裝飾敏捷卷軸65%
        3010030, //耳環裝飾運氣卷軸65%
        3010031, //上衣力量卷軸65%
        3010032, //上衣運氣卷軸65%
        3010033, //全身盔甲敏捷卷軸65%
        3010034, //全身盔甲幸運卷軸65%
        3010035, //全身盔甲智力卷軸65%
        3010036, //全身盔甲力量卷軸65%
        3010037, //褲裙防禦卷軸65%
        3010038, //鞋子跳躍卷軸65%
        3010039, //手套敏捷卷軸65%
        3010040, //褲裙敏捷卷軸65%
        3010041, //手套攻擊卷軸65%
        3010042, //盾牌力量卷軸65%
        3010043, //披風智力卷軸65%
        3010044, //盾牌運氣卷軸65%
        3010045, //披風敏捷卷軸65%
        3010046, //披風幸運卷軸65%
        3010047, //單手劍攻擊卷軸65%
        3010048, //單手斧攻擊卷軸65%
        3010049, //單手棍攻擊卷軸65%
        3010050, //刀攻擊力卷軸65%
        3010051, //短杖魔力卷軸65%
        3010052, //短劍攻擊卷軸65%
        3010053, //長杖魔力卷軸65%
        3010054, //雙手劍攻擊卷軸65%
        3010055, //雙手斧攻擊卷軸65%
        3010056, //雙手棍攻擊卷軸65%
        3010057, //單手棍命中卷軸65%
        3010058, //槍攻擊卷軸65%
        3010059, //矛攻擊卷軸65%
        3010060, //弓攻擊卷軸65%
        3010061, //弩攻擊卷軸65%
        3010062, //拳套攻擊卷軸65%
        3010063, //拳甲攻擊卷軸65%
        3010064, //指虎命中卷軸65%
        3010065, //火槍攻擊卷軸65%
        3010066, //雙弩槍攻擊力卷軸65%
        3010067, //50%混沌卷
        3010068, //60%混沌卷
        3010069, //皮製手提包
        3010070, //007提包
        3010071, //馬桶吸
        3010072, //方形鐵鏟
        3010073, //三角鐵鏟
        3010074, //紅色磚頭
        3010075, //粉色花邊游泳圈
        3010076, //永恆驚破天
        3010077, //重生驚破天
        3010078, //聖誕六翼天使武器(單手棍)
        3010079, //採礦鐵鍬
        3010080, //野外燒烤串
        3010081, //楓葉3年旗
        3010082, //粉色花邊游泳圈
        3010083, //初級盜賊的短劍
        3010084, //新手刮鬍刀
        3010085, //高原之劍
        3010086, //半月巨刀
        3010087, //鋼鐵劍
        3010088, //木球棍
        3010089, //鋁球棍
        3010090, //無極劍
        // 椅子部分
        3010106,
//雪狼戰椅
//狂狼勇士最愛的雪狼。\n每10秒HP和MP各恢復50。

        3010107,
//龍龍的蛋殼椅
//坐在上面時，每10秒恢復HP的龍龍的蛋殼。是只有龍魔導士可以擁有的特殊椅子。

        3010108,
//幼龍鞦韆
//幼龍晃動的鞦韆椅。坐在上面，每10秒HP恢復40，MP恢復20。

        3010109,
//暖爐椅
//讓人感覺溫暖的椅子，使用後每10秒恢復HP 40、MP 20。

        3010110,
//舒適大白熊椅子
//抱著非常的溫暖，每10秒鐘回復HP、MP各50。

        3010111,
//虎虎生威
//王者最愛的椅子。坐在上面每10秒鐘可恢復HP50、MP30。

        3010112,
//情書櫃子
//堆滿情書的櫃子,適合送給戀人的椅子..\n每10秒鐘恢復HP 50.

        3010113,
//幽魂發條熊椅子
//使用後每10秒恢復HP 50。
//
        3016000, //大象蹺蹺板椅子
        3015272, //紫蛙蛙滑梯椅子
        3015227, //與莫拉野餐椅子
        3015225, //和大象一起自拍椅子
        3010715, //幸福9週年蛋糕椅子
        3015227, //夢幻水晶球椅子    
        3015157, //安德洛墨達椅子
        3015182, //蝶戀花椅子
        3015193, //被馴服的鯨魚椅子
        3015096, //羊羊幻想牧場椅子
        3015109, //花花幻想曲
        3015053, //鬆軟三重綿羊椅
        3015304, //嘩啦啦大水車
        // 能手冊部分！
        2290245, //傑諾的神秘能手冊
        2290285, //[能手冊]神秘能手冊
        2290448, //英雄的神秘能手冊
        2290449, //聖騎士的神秘能手冊
        2290450, //黑騎士的神秘能手冊
        2290451, //火毒魔導師的神秘能手冊
        2290452, //冰雷魔導師的神秘能手冊
        2290453, //主教的神秘能手冊
        2290454, //箭神的神秘能手冊
        2290455, //神射手的神秘能手冊
        2290456, //暗影神偷的神秘能手冊
        2290457, //夜使者的神秘能手冊
        2290458, //影武者的神秘能手冊
        2290459, //拳霸的神秘能手冊
        2290460, //船長的神秘能手冊
        2290461, //重砲指揮官的神秘能手冊
        2290462, //狂狼勇士的神秘能手冊
        2290463, //龍魔導士的神秘能手冊
        2290464, //精靈遊俠的神秘能手冊
        2290465, //惡魔殺手的神秘能手冊
        2290466, //喚靈斗師的神秘能手冊
        2290467, //狂豹獵人的神秘能手冊
        2290468, //機甲戰神的神秘能手冊
        2290571, //幻影的神秘能手冊
        2290602, //米哈逸的神秘能手冊
        2290723, //凱撒神秘能手冊
        2290724, //天使破壞者神秘能手冊
        2290868, //英雄的神秘能手冊
        2290869, //聖騎士的神秘能手冊
        2290870, //黑騎士的神秘能手冊
        2290871, //火毒魔導師的神秘能手冊
        2290872, //冰雷魔導師的神秘能手冊
        2290873, //主教的神秘能手冊
        2290874, //箭神的神秘能手冊
        2290875, //神射手的神秘能手冊
        2290876, //暗影神偷的神秘能手冊
        2290877, //夜使者的神秘能手冊
        2290878, //影武者的神秘能手冊
        2290879, //拳霸的神秘能手冊
        2290880, //船長的神秘能手冊
        2290881, //重砲指揮官的神秘能手冊
        2290882, //狂狼勇士的神秘能手冊
        2290883, //龍魔導士的神秘能手冊
        2290884, //精靈遊俠的神秘能手冊
        2290885, //惡魔殺手的神秘能手冊
        2290886, //喚靈斗師的神秘能手冊
        2290887, //狂豹獵人的神秘能手冊
        2290888, //機甲戰神的神秘能手冊
        2290889, //幻影的神秘能手冊
        2290891, //凱撒神秘能手冊
        2290892, //天使破壞者神秘能手冊
        2290914, //惡魔復仇者的神秘能手冊
        2290915, //惡魔復仇者的神秘能手冊
        2291137 //隱月的神秘能手冊
        );

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            if (cm.getPlayer().getOnlineTime() < needOnlineTime) {
                cm.sendNextS("您當前在線時間不足#r" + needOnlineTime + "#k分鐘,無法參與該活動,\r\n請#r" + (needOnlineTime - cm.getPlayer().getOnlineTime()) + "#k分鐘後再試.", 3);
                cm.dispose();
                return;
            } else if (cm.getPQLog('HOTTIME隱藏椅子的箱子') > 0) {
                cm.sendNextS("今天你不能再參加這個活動了。\r\n隱藏椅子的箱子活動一天只能進行一次。", 3);
                cm.dispose();
                return;
            }
            for (var i = 1; i < 5; i++) {
                if (cm.getSpace(i) < 1) {
                    pass = false;
                }
            }
            if (cm.getSpace(2) >= 1 && cm.getSpace(4) >= 1) {
                var text = " #e今天我可能領取到的物品為：#n\r\n#r  - 請仔細看好您要的裝備，稍後會打亂目錄。\r\n  - 打亂目錄後的道具將以問號箱子顯示。\r\n  - 屆時只要點擊你想要的問號椅子箱子，就可以領取道具了！\r\n\r\n#b";
                Allitem.sort(function () {
                    return 0.5 - Math.random();
                });//隨機打亂道具池
                for (var i = 0; i < Allitem.length; i++) {
                    if (i % 5 == 0 && i % 3 == 0) {
                        luckyItem.push(Allitem[i]);//特定計算部分加載到 可領取數組裡面
                    }
                }
                for (var i = 0; i < luckyItem.length; i++) {
                    text += "#i" + luckyItem[i] + "# #z" + luckyItem[i] + "#\r\n";
                }
                cm.sendNextS(text, 3);
                cm.setPQLog('HOTTIME隱藏椅子的箱子');
            } else {
                cm.sendOk("請讓你的所有背包欄空出一個格子。");
                cm.dispose();
            }
        } else if (a == 1) {
            luckyItem.sort(function () {
                return 0.5 - Math.random();
            });//隨機打亂道具池
            var text = "今天的獎品都變成了可疑椅子的箱子，並且被打亂了。\r\n咦，到底是哪個呢？\r\n\r\n#b";
            for (var i = 0; i < luckyItem.length; i++) {
                text += "#L" + i + "##fUI/UIWindow.img/QuestIcon/5/0#    打開便知曉!#l\r\n";

            }
            cm.sendSimpleS(text, 3);
        } else if (a == 2) {
            var n = selection + 1;
            var text = "我剛才選擇的是第" + n + "個道具.現在秘密的椅子箱子裡面的道具跑出來了:\r\n - 點擊下一步領取物品。\r\n\r\n#b";
            selectedItem = luckyItem[selection]
            for (var i = 0; i < luckyItem.length; i++) {
                if (selection == i) {
                    text += "#e#i" + luckyItem[i] + "#    #z" + luckyItem[i] + "#   (您選擇的椅子箱子 )\r\n#n";
                } else {
                    text += "#i" + luckyItem[i] + "#    #z" + luckyItem[i] + "#\r\n";
                }
            }
            cm.sendNextS(text, 3);
        } else if (a == 3) {
            cm.gainItem(selectedItem, 1);
            cm.sendOk("成功打開箱子，我贈送給你了 #b#t" + selectedItem + "##k。");
            cm.dispose();
        }//a
    }//mode
}//f