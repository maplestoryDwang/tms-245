status = -1;
var itemList = Array(
// ------ 卷軸 ------
    Array(4033924, 500, 1, 3), //神話耳環藍圖
    Array(2432013, 500, 1, 3),  //女神之淚
    Array(2432014, 100, 1, 3), //女神之血滴
    Array(1113077, 300, 1, 3),  //絕對之戒
    Array(5062010, 500, 1, 3),  //終極方塊
    Array(1032205, 200, 1, 3),  //神話耳環
    Array(2431354, 100, 1, 3),  //星火幸運箱子
    Array(4033356, 200, 1, 3),  //正義火種
    Array(3010879, 100, 1, 3), 
    Array(3010895, 300, 1, 3), 
    Array(3010896, 300, 1, 3), 
    Array(3010897, 300, 1, 3), 
    Array(3010898, 300, 1, 3), // 迷你神獸椅子, 300), /
    Array(3010899, 300, 1, 3), // 擺鐘椅子, 300), // 
    Array(3010900, 300, 1, 3), // 寶石楓葉椅子, 300), 
    Array(3010901, 300, 1, 3), // 熱情的紅色藥水椅子, 300), /
    Array(3010902, 300, 1, 3), // 新鮮的藍色藥水椅子, 300), 
    Array(3010903, 300, 1, 3), // 兔子椅子, 300), // 
    Array(3010904, 300, 1, 3), // 椰子樹沙灘椅, 300), 
    Array(3010905, 300, 1, 3), // 柿子樹鞦韆, 300), 
    Array(3010906, 300, 1, 3), // 雲朵洗手間椅子, 300), // 
    Array(3010907, 300, 1, 3), // 公沙沙兔靠墊, 300), // 
    Array(3010908, 300, 1, 3), // 海藍天鵝絨沙發, 300), // 
    Array(3010909, 300, 1, 3), // 紅色設計師椅子, 300), // 
    Array(3010910, 300, 1, 3), // 艾莉珍椅子, 300), // 
    Array(3010911, 300, 1, 3), // 紅帽月妙抱枕椅, 300), 
    Array(3010912, 300, 1, 3), // 藍帽月妙抱枕椅, 300), 
    Array(3010913, 300, 1, 3), // 扇子月妙抱枕椅, 300), 
    Array(3010914, 300, 1, 3), // 太平蕭月妙抱枕椅, 300),
    Array(3010915, 300, 1, 3), // 惡靈附身的娃娃椅子, 300), 
    Array(3010916, 300, 1, 3), // 粉紅沙灘遮陽傘, 300), 
    Array(3010917, 300, 1, 3), // 紅色龍椅, 300), // 
    Array(3010918, 300, 1, 3), // 藍色龍椅, 300), //。
    Array(3010919, 300, 1, 3), // 精靈王座, 300), // 
    Array(3010920, 300, 1, 3), // 水晶月亮, 300), // 
    Array(3010921, 300, 1, 3), // 彩蛋籃子, 300), // 
    Array(3010922, 300, 1, 3), // 悠長假期(紅色), 300),
    Array(3010923, 300, 1, 3), // 10週年椅子, 300), // 
    Array(3010936, 100, 1, 3), // 青蛙跳樓機, 300), // 
    Array(3010894, 200, 1, 3), // 一杯咖啡的悠閒, 300), 
    Array(3010747, 300, 1, 3), // 和風紙鳶椅子, 300), 
    Array(3010748, 300, 1, 3), // 日式拉麵椅, 300), //
    Array(3010750, 300, 1, 3), // 焦糖布丁椅子, 300), // 
    Array(3010795, 100, 1, 3), // 森林中休息處(椅子), 300), // 
    Array(3010794, 200, 1, 3), // 抖動的舌頭椅子, 300), // 
    Array(3010799, 300, 1, 3), // 墳墓幽靈椅子, 300), // 
    Array(3010714, 300, 1, 3), // 堆王冠, 300), // 
    Array(3010732, 200, 1, 3), // 翅膀自行車椅子, 300), 
    Array(3012019, 300, 1, 3) // 愛琴海椅子, 300), // 
);

var itemList2 = Array(
    Array(3010813, 300, 1, 3), // 愛情水晶球的回憶, 300), 
    Array(3012020, 100, 1, 3), // 紫籐花吊籃椅, 300), // 
    Array(3010820, 100, 1, 3), // 迷你玩具別墅椅子, 300), 
    Array(3010806, 300, 1, 3), // 桃櫻芳菲椅, 300), // 
    Array(3010780, 300, 1, 3), // 旋轉木馬, 300), // 
    Array(3010779, 300, 1, 3), // 金馬祥雲轎, 300), 
    Array(3010781, 200, 1, 3), // 馬上有你, 300), 
    Array(3010788, 100, 1, 3), // 巨無霸年夜飯, 300), 
    Array(3010783, 100, 1, 3), // 藍色邦尼屋, 300), 
    Array(3010797, 300, 1, 3), // 新娘春節椅子, 300), 
    Array(3010798, 300, 1, 3), // 焰火椅子, 300), // 
    Array(3010800, 300, 1, 3), // 小學生月妙拜年椅子, 300), 
    Array(3010801, 300, 1, 3), // 學齡前月妙拜年椅子, 300), 
    Array(3010802, 300, 1, 3), // 中學生月妙拜年椅子, 300), 
    Array(3010803, 300, 1, 3), // 高3月妙拜年椅子, 300), 
    Array(3010804, 300, 1, 3), // 軍人月妙拜年椅子, 300), 
    Array(3010810, 300, 1, 3), // 火車旅行椅, 300), // 
    Array(3010811, 300, 1, 3), // 嫩芽椅, 300), // 
    Array(3010812, 300, 1, 3), // 旋轉木馬椅, 300), // 
    Array(3010814, 300, 1, 3), // 粉絲抱枕椅子, 300), // 
    Array(3010815, 300, 1, 3), // 單身部隊海報椅, 300), // 
    Array(3010835, 300, 1, 3), // 愛情水晶球記憶椅, 300), // 
    Array(3010844, 300, 1, 3), // 麻辣教室椅子, 300), // 
    Array(3010851, 300, 1, 3), // 夏日沁飲椅子, 300), // 
    Array(3010852, 300, 1, 3), // 鮮花椅, 300), // 
    Array(3010854, 300, 1, 3), // 神秘怪物共聚一堂！, 300),
    Array(3010789, 300, 1, 3), // 爆竹聲聲, 300), // 
    Array(3010606, 300, 1, 3), // 未上色的名畫椅子, 300), //
    Array(3010608, 300, 1, 3), // 完美的名畫椅子, 300), // 
    Array(1072337, 100, 1, 3), // 喜洋洋拖鞋, 100), // (無描述)
    Array(1112254, 100, 1, 3), // 豪華珍珠聊天戒指, 100), 
    Array(1112143, 100, 1, 3), // 豪華珍珠名片戒指, 100), 
    Array(1112118, 100, 1, 3), // 可樂名片戒指, 100), // 
    Array(1112119, 100, 1, 3), // 可樂(Red) 名片戒指, 100), 
    Array(1112120, 100, 1, 3), // 可樂(White) 名片戒指, 100), 
    Array(1112228, 100, 1, 3), // 可樂聊天戒指, 100), // 
    Array(1112229, 100, 1, 3), // 可樂(Red)聊天戒指, 100), 
    Array(1112230, 100, 1, 3), // 可樂(White)聊天戒指, 100), 
    Array(1002524, 100, 1, 3), // 可樂帽, 100), // (無描述)
    Array(1702533, 100, 1, 3), // 奶兔立拍得, 100), //
    Array(1702020, 100, 1, 3), // 棒棒糖, 100), // 
    Array(1702459, 100, 1, 3), // 棉花糖武器, 100),
    Array(1702302, 100, 1, 3), // 杯具, 100), // 
    Array(1042285, 100, 1, 3), // 拼色點點T恤, 100), // (無描述)
    Array(1042204, 100, 1, 3), // 漢堡T恤, 100), // (無描述)
    Array(1112103, 100, 1, 3), // 嫩黃名片戒指, 100), // 
    Array(1112253, 100, 1, 3), // 木乃伊對話框戒指, 100), //
    Array(1112142, 100, 1, 3), // 木乃伊名片戒指, 100), 
    Array(1112135, 100, 1, 3), // 水墨花名片戒指, 100), 
    Array(1112238, 100, 1, 3), // 水墨花聊天戒指, 100),
    Array(1003588, 100, 1, 3), // 玩具粉熊帽子, 100), // 
    //130裝備
    Array(1232040, 290, 1, 3), // 豪華阿加雷斯猩紅黃道劍
    Array(1302228, 290, 1, 3), // 豪華阿加雷斯拳刃
    Array(1312117, 290, 1, 3), // 豪華阿加雷斯頭盔(名字顯示有問題）
    Array(1322163, 290, 1, 3), // 豪華阿加雷斯錘
    Array(1402152, 290, 1, 3), // 豪華阿加雷斯雙手劍
    Array(1412105, 290, 1, 3), // 豪華阿加雷斯拳套（名字顯示有問題)
    Array(1422108, 290, 1, 3), // 豪華阿加雷斯大槌
    Array(1432139, 290, 1, 3) // 豪華阿加雷斯之矛
);

var itemList3 = Array(
    Array(1442183, 290, 1, 3), // 豪華阿加雷斯之矛
    Array(1332194, 290, 1, 3), // 豪華赫爾巴斯獵手
    Array(1362068, 290, 1, 3), // 豪華赫爾巴斯手杖         
    Array(1472180, 290, 1, 3), // 豪華赫爾巴斯手套
    Array(1212043, 290, 1, 3), // 豪華艾裡格斯閃亮克魯
    Array(1372140, 290, 1, 3), // 豪華艾裡格斯短杖
    Array(1382169, 290, 1, 3), // 豪華艾裡格斯笞鞭
    Array(1252030, 290, 1, 3), // 豪華艾裡格斯貓梳魔法棒
    Array(1452171, 290, 1, 3), // 豪華伊布斯長弓
    Array(1462160, 290, 1, 3), // 豪華伊布斯弩
    Array(1522072, 290, 1, 3), // 豪華伊布斯雙弩槍
    Array(1222043, 290, 1, 3), // 豪華維帕爾血月
    Array(1242046, 290, 1, 3), // 豪華維帕爾獅蠍劍
    Array(1482141, 290, 1, 3), // 豪華維帕爾指虎手套
    Array(1492153, 290, 1, 3), // 豪華維帕爾之鷹
    Array(1532075, 290, 1, 3), // 豪華維帕爾火炮
    Array(1003589, 290, 1, 3), // 豪華阿加雷斯頭箍
    Array(1003592, 290, 1, 3), // 豪華赫爾巴斯頭箍
    Array(1003590, 290, 1, 3), // 豪華艾裡格斯頭箍
    Array(1003591, 290, 1, 3), // 豪華伊布斯頭箍
    Array(1003593, 290, 1, 3), // 豪華維帕爾頭箍
    Array(1052498, 290, 1, 3), // 豪華阿加雷斯鎖子甲
    Array(1052501, 290, 1, 3), // 豪華赫爾巴斯鎖子甲
    Array(1052499, 290, 1, 3), // 豪華艾裡格斯鎖子甲
    Array(1052500, 290, 1, 3), // 豪華伊布斯鎖子甲
    Array(1052502, 290, 1, 3), // 豪華維帕爾鎖子甲
    Array(1102445, 290, 1, 3), // 豪華阿加雷斯披風
    Array(1102448, 290, 1, 3), // 豪華赫爾巴斯披風
    Array(1102446, 290, 1, 3), // 豪華艾裡格斯披風
    Array(1102447, 290, 1, 3), // 豪華伊布斯披風
    Array(1102449, 290, 1, 3), // 豪華維帕爾披風
    Array(1082466, 290, 1, 3), // 豪華阿加雷斯手套
    Array(1082469, 290, 1, 3), // 豪華赫爾巴斯手套
    Array(1082467, 290, 1, 3), // 豪華艾裡格斯手套
    Array(1082468, 290, 1, 3), // 豪華伊布斯手套
    Array(1082470, 290, 1, 3), // 豪華維帕爾手套
    Array(1072703, 290, 1, 3), // 豪華阿加雷斯靴
    Array(1072706, 290, 1, 3), // 豪華赫爾巴斯靴
    Array(1072704, 290, 1, 3), // 豪華艾裡格斯靴
    Array(1072705, 290, 1, 3), // 豪華伊布斯靴
    Array(1072707, 290, 1, 3) // 豪華維帕爾靴
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用嗎？…我的肚子裡有各類#b奇特座椅或卷軸、裝備、新奇道具#k哦！");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        for (var i = 0; i < itemList2.length; i++) {
            if (itemList2[i][1] >= chance) {
                finalitem.push(itemList2[i]);
            }
        }
        for (var i = 0; i < itemList3.length; i++) {
            if (itemList3[i][1] >= chance) {
                finalitem.push(itemList3[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "楓之谷8週年箱子", notice);
            if (item != -1) {
        im.gainItem(2430289, -1);
               // im.warp(910000000, 0);
                im.sendOk("恭喜你獲得了 #b#t" + item + "##k ");
            } else {
                im.sendOk("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的運氣可真差，什麼都沒有拿到。");
            im.safeDispose();
        }
    }
}