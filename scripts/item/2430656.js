status = -1;
var itemList;
var random = java.lang.Math.floor(Math.random() * 7 + 1);
if(random == 1){
itemList = Array(
// ------ 卷軸 ------
Array(2049100, 500, 1, 3), //混沌卷軸60%
Array(2048052, 500, 1, 3), //寵物裝備攻擊力卷軸 40%
Array(2048052, 500, 1, 3), //寵物裝備魔力卷軸 40%
Array(2531001, 500, 1, 3), //防爆卷軸
Array(2040811, 500, 1, 3), //手套攻擊詛咒卷軸
Array(2040807, 500, 1, 3), //手套攻擊詛咒卷軸
Array(2340000, 500, 1, 3), //祝福卷軸
Array(2046319, 500, 1, 3), //飾品魔力卷軸
Array(2040814, 500, 1, 3), //手套魔力詛咒卷軸70%
Array(2040815, 500, 1, 3), //手套魔力詛咒卷軸30%
Array(2048026, 500, 1, 3), //寵物裝備攻擊力卷軸
Array(2048027, 500, 1, 3), //寵物裝備魔法攻擊力卷軸
Array(2049300, 500, 1, 3), //高級裝備強化卷軸
Array(2049700, 500, 1, 3), //A級潛能卷軸
Array(2049752, 500, 1, 3), //S級潛能卷軸 30%
Array(2040917, 500, 1, 3), //盾牌攻擊詛咒卷軸30%
Array(2040922, 500, 1, 3), //盾牌魔力詛咒卷軸30%
Array(2040852, 500, 1, 3), //皮卡啾手套攻擊力卷軸
Array(2040853, 500, 1, 3), //皮卡啾手套攻擊力卷軸
Array(2049132, 500, 1, 3), //驚人混沌卷軸30%
Array(2045004, 500, 1, 3), //白醫卷軸—仙
Array(2045005, 500, 1, 3), //白醫卷軸—神
Array(2049012, 500, 1, 3), //詛咒白醫卷軸
Array(2045000, 500, 1, 3), //白醫卷軸
Array(2045001, 500, 1, 3), //白醫卷軸
Array(2045002, 500, 1, 3), //白醫卷軸
Array(2049122, 500, 1, 3)  //正向混沌卷
);
} else if(random == 2){
itemList = Array(
// ------ 藥品 ------
Array(2022956, 500, 1, 3), //火紅玫瑰
Array(5121003, 500, 1, 3), //參雞湯
Array(5121004, 500, 1, 3), //鬆糕  
Array(5121005, 500, 1, 3), //韓果  
Array(5121006, 500, 1, 3), //小魔女  
Array(5121007, 500, 1, 3), //聖誕樹鈴鐺  
Array(5121008, 500, 1, 3), //祝你生日快樂  
Array(5121009, 500, 1, 3), //火紅玫瑰  
Array(5121010, 500, 1, 3), //浪漫櫻花  
Array(5121015, 500, 1, 3), //雪孩子  
Array(5121016, 500, 1, 3), //巧克力糖果  
Array(5121020, 500, 1, 3), //喜洋洋  
Array(5121025, 500, 1, 3), //2010勝利祈願 
Array(5122000, 500, 1, 3), //熊寶寶
Array(2210120, 500, 1, 3), //希拉變身藥水
Array(2210121, 500, 1, 3), //梅格耐斯變身藥水
Array(2210122, 500, 1, 3), //凡雷恩變身藥水
Array(2210123, 500, 1, 3), //阿卡伊農變身藥水
Array(2022530, 500, 1, 3)  //迎春花花語
);
} else if(random == 3){
itemList = Array(
// ------ 坐騎 ------
Array(2430597, 500, 1, 3), //飛船3天使用券 [飛船]。 
Array(2430583, 500, 1, 3), //天馬3天使用券 [天馬]。 
Array(2430600, 500, 1, 3), //暗光龍3天使用券 [暗光龍]。 
Array(2430589, 500, 1, 3), //魔法掃帚3天使用券 [魔法掃帚]。 
Array(2430594, 500, 1, 3), //觔斗雲3天使用券 [觔斗雲]。 
Array(2430265, 500, 1, 3), //騎士團戰車3天使用券 [騎士團戰車]。 
Array(2430590, 500, 1, 3), //夢魘3天使用券 [夢魘]。 
//Array(2430413, 500, 1, 3), //巴洛古3天使用券 [巴洛古]。
Array(2430582, 500, 1, 3), //透明巴洛古3天使用券 [透明巴洛古]。
Array(2430271, 500, 1, 3), //貓頭鷹3天使用券 [貓頭鷹]。 
Array(2430578, 500, 1, 3), //直升機3天使用券 [直升機]。 
Array(2430587, 500, 1, 3), //妮娜的魔法3天使用券 [妮娜的魔法陣]。
//Array(2430417, 500, 1, 3), //青蛙3天使用券 [青蛙]。
//Array(2430418, 500, 1, 3), //小龜龜3天使用券 [小龜龜]。
//Array(2430419, 500, 1, 3), //無辜水牛7天使用券 [無辜水牛]。
//Array(2430420, 500, 1, 3), //玩具坦克7天使用券 [玩具坦克]。
//Array(2430421, 500, 1, 3), //維京戰車7天使用券 [維京戰車]。
//Array(2430422, 500, 1, 3), //打豆豆機器人7天使用券 [打豆豆機器人]。
Array(2430602, 500, 1, 3), //暴風摩托3天使用券 [暴風摩托]。
//Array(2430424, 500, 1, 3), //玩具木馬3天使用券 [玩具木馬]。
//Array(2430425, 500, 1, 3), //老虎只是傳說7天使用券 [老虎只是傳說]。
//Array(2430426, 500, 1, 3), //萊格斯的豺犬7天使用券 [萊格斯的豺犬]。
//Array(2430427, 500, 1, 3), //鴕鳥7天使用券 [鴕鳥]。
//Array(2430428, 500, 1, 3), //跑車7天使用券 [跑車]。
Array(2430588, 500, 1, 3), //拿破侖的白馬3天使用券 [拿破侖的白馬]。
//Array(2430430, 500, 1, 3), //鱷魚王7天使用券 [鱷魚王]。
Array(2430038, 500, 1, 3), //女女機車1天使用券 [女女機車]。
Array(2430037, 500, 1, 3), //男男機車1天使用券 [男男機車]。
//Array(2430433, 500, 1, 3), //賽車7天使用券 [賽車]。
Array(2430598, 500, 1, 3), //超能套裝3天使用券 [超能套裝]。
//Array(2430435, 500, 1, 3), //巨無霸兔子7天使用券 [巨無霸兔子]。
//Array(2430436, 500, 1, 3), //兔兔加油7天使用券 [兔兔加油]。
//Array(2430437, 500, 1, 3), //兔子車伕7天使用券 [兔子車伕]。
//Array(2430438, 500, 1, 3), //走路雞7天使用券 [走路雞]。
//Array(2430439, 500, 1, 3), //鋼鐵變形俠7天使用券 [鋼鐵變形俠]。
Array(2430036, 500, 1, 3), //黑鱷魚1天使用券 
Array(2430037, 500, 1, 3), //男男機車1天使用券
Array(2430038, 500, 1, 3), //女女機車1天使用券
Array(2430039, 500, 1, 3), //觔斗雲1天使用券
Array(2430040, 500, 1, 3)  //巴洛古1天使用券
);
} else if(random == 4){
itemList = Array(
// ------ 稱號 ------
Array(3700031, 500, 1, 3), //見習獵人資格證
Array(3700032, 500, 1, 3), //B級獵人資格證
Array(3700033, 500, 1, 3), //A級獵人資格證
Array(3700034, 500, 1, 3), //S級獵人資格證
Array(3700035, 500, 1, 3), //甜蜜情人節！
Array(3700036, 500, 1, 3), //情人節的糖果真甜
Array(3700037, 500, 1, 3), //楓樹管理員
Array(3700039, 500, 1, 3), //打架王
Array(3700040, 500, 1, 3), //復仇者
Array(3700041, 500, 1, 3), //擁有虛弱魅力的人
Array(3700042, 500, 1, 3), //鬥士
Array(3700043, 500, 1, 3), //最強鬥士
Array(3700044, 500, 1, 3), //我最受歡迎
Array(3700045, 500, 1, 3), //我也很受歡迎
Array(3700046, 500, 1, 3), //我也挺受歡迎
Array(3700047, 500, 1, 3), //角鬥士
Array(3700048, 500, 1, 3), //平定戰場的人
Array(3700049, 500, 1, 3), //與末日風暴同在的
Array(3700053, 500, 1, 3), //中秋動物農場
Array(3700054, 500, 1, 3), //LTE 尤茨 
Array(3700055, 500, 1, 3), //雙倍雙倍
Array(3700056, 500, 1, 3), //落火
Array(3700057, 500, 1, 3), //誰會成為豬呢
Array(3700058, 500, 1, 3), //告別尤茨遊戲菜鳥水平
Array(3700059, 500, 1, 3), //堅持尤茨遊戲
Array(3700060, 500, 1, 3), //尤茨特殊人才
Array(3700061, 500, 1, 3), //武陵巨熊
Array(3700062, 500, 1, 3), //神木村飛龍
Array(3700063, 500, 1, 3), //凡雷恩獅子
Array(3700064, 500, 1, 3), //克裡塞巨人
Array(3700065, 500, 1, 3), //萬神殿英雄
Array(3700066, 500, 1, 3), //烏山老虎
Array(3700067, 500, 1, 3), //殺人鯨雙胞胎
Array(3700068, 500, 1, 3), //弓箭手村老鷹
Array(3700073, 500, 1, 3), //開路先鋒
Array(3700074, 500, 1, 3), //熊的力量
Array(3700075, 500, 1, 3), //尼浩瑪
Array(3700076, 500, 1, 3), //哭哭狸
Array(3700077, 500, 1, 3), //光舞 
Array(3700079, 500, 1, 3), //我是動作英雄
Array(3700080, 500, 1, 3), //這才是高手
Array(3700081, 500, 1, 3), //歡迎任何人來和我對決 
Array(3700082, 500, 1, 3), //不要放棄
Array(3700083, 500, 1, 3), //楓之谷酷暑
Array(3700084, 500, 1, 3), //夏天就該吃冰激凌
Array(3700085, 500, 1, 3), //拼圖收藏家
Array(3700086, 500, 1, 3), //今天滿勤
Array(3700087, 500, 1, 3), //喜歡紅色
Array(3700088, 500, 1, 3)  //惡魔復仇者成就達成
);
} else if(random == 5){
itemList = Array(
// ------ 椅子 ------
Array(3010000, 500, 1, 3), //休閒椅
Array(3010001, 500, 1, 3), //藍色木椅
Array(3010002, 500, 1, 3), //綠色時尚轉椅
Array(3010003, 500, 1, 3), //紅色時尚轉椅
Array(3010004, 500, 1, 3), //黃藍休閒椅
Array(3010005, 500, 1, 3), //紅藍休閒椅
Array(3010006, 500, 1, 3), //黃色時尚轉椅
Array(3010007, 500, 1, 3), //粉色海豹靠墊
Array(3010008, 500, 1, 3), //藍色海豹靠墊
Array(3010009, 500, 1, 3), //榻榻凳
Array(3010010, 500, 1, 3), //白色海豹靠墊
Array(3010012, 500, 1, 3), //劍士 寶座
Array(3010013, 500, 1, 3), //悠長假期
Array(3010014, 500, 1, 3), //月亮彎
Array(3010016, 500, 1, 3), //黑色海豹靠墊
Array(3010017, 500, 1, 3), //金色海豹靠墊
Array(3010018, 500, 1, 3), //椰子樹沙灘椅
Array(3010019, 500, 1, 3), //壽司椅
Array(3010020, 500, 1, 3), //澎澎檜木桶
Array(3010021, 500, 1, 3), //暖暖桌
Array(3010024, 500, 1, 3), //玩具粉熊椅
Array(3010025, 500, 1, 3), //5週年楓葉紀念凳
Array(3010026, 500, 1, 3), //惡靈附身的回憶椅子
Array(3010028, 500, 1, 3), //海盜的俘虜
Array(3010029, 500, 1, 3), //藍環凳
Array(3010030, 500, 1, 3), //黑環凳
Array(3010031, 500, 1, 3), //紅環凳
Array(3010032, 500, 1, 3), //黃環凳
Array(3010033, 500, 1, 3), //綠環凳
Array(3010151, 500, 1, 3), //無人島椅子
Array(3010152, 500, 1, 3), //黃三角帳篷椅
Array(3010073, 500, 1, 3), //baby皮卡啾
Array(3010034, 500, 1, 3), //悠長假期(紅色)
Array(3010035, 500, 1, 3), //悠長假期(藍色)
Array(3010036, 500, 1, 3), //浪漫鞦韆
Array(3010037, 500, 1, 3), //豬豬凳
Array(3010038, 500, 1, 3), //空氣沙發
Array(3010039, 500, 1, 3), //黑色海狗靠墊
Array(3010040, 500, 1, 3), //蝙蝠椅
Array(3010041, 500, 1, 3), //骷髏王座
Array(3010043, 500, 1, 3), //魔女的飛掃把
Array(3010044, 500, 1, 3), //同一紅傘下
Array(3010045, 500, 1, 3), //寒冰椅子
Array(3010046, 500, 1, 3), //紅龍椅
Array(3010047, 500, 1, 3), //藍龍椅
Array(3010048, 500, 1, 3), //聖誕樹椅子
Array(3010049, 500, 1, 3), //雪房子
Array(3010050, 500, 1, 3), //公主凳
Array(3010051, 500, 1, 3), //沙漠兔子1靠墊
Array(3010052, 500, 1, 3), //沙漠兔子2靠墊
Array(3010053, 500, 1, 3), //兔子紀念版椅子
Array(3010054, 500, 1, 3), //呼嚕呼嚕床
Array(3010055, 500, 1, 3), //冰雪糕丸子椅
Array(3010057, 500, 1, 3), //血色玫瑰
Array(3010058, 500, 1, 3), //世界末日
Array(3010059, 500, 1, 3), //回憶的零食王座
Array(3010060, 500, 1, 3), //初心凳
Array(3010061, 500, 1, 3), //楓樹下
Array(3010062, 500, 1, 3), //竹凳
Array(3010063, 500, 1, 3), //月亮星星抱枕椅
Array(3010064, 500, 1, 3), //棕色砂兔抱枕椅
Array(3010065, 500, 1, 3), //粉紅海灘遮陽椅
Array(3010066, 500, 1, 3), //深藍色絨毛沙發
Array(3010067, 500, 1, 3), //紅色設計師椅
Array(3010068, 500, 1, 3), //露水椅子
Array(3010069, 500, 1, 3)  //大黃風
);
} else if(random == 6){
itemList = Array(
// ------ 裝備 ------
Array(1012319, 200, 1, 3), //8週年點點紅
Array(1112915, 500, 1, 3), //藍調戒指
Array(1202023, 500, 1, 3), //真·喬圖騰
Array(1202027, 500, 1, 3), //真·海麗蜜圖騰
Array(1202031, 500, 1, 3), //真·小龍圖騰
Array(1202035, 500, 1, 3), //真·李卡司圖騰
Array(1112586, 200, 1, 3), //黑天使的祝福
Array(1112663, 100, 1, 3), //白天使的祝福
Array(1113084, 500, 1, 3)  //黑龍傳說指環
);
} else if(random == 7){
itemList = Array(
// ------ 特殊 ------
Array(5064300, 500, 1, 3), //卷軸防護卷軸
Array(5062500, 500, 1, 3), //大師附加神奇方塊
Array(5062000, 500, 1, 3), //神奇方塊
Array(5064000, 500, 1, 3), //防爆卷軸
Array(4310030, 500, 1, 3), //運動會幣
Array(5064100, 500, 1, 3), //保護卷軸
Array(5062002, 500, 1, 3), //高級神奇方塊
Array(5220040, 500, 1, 3), //楓之谷轉蛋券
Array(2614006, 500, 1, 3), //突破一萬之石 30%
Array(2614009, 500, 1, 3), //突破一萬之石 30%
Array(2614012, 500, 1, 3), //突破一萬之石 50%
Array(2614015, 500, 1, 3)  //突破一萬之石 50%
);
}

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
        var chance = Math.floor(Math.random() * 1100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "每日禮物箱", notice);
            if (item != -1) {
        im.gainItem(2430656, -1);
                im.sendOk("你獲得了 #b#t" + item + "##k " + quantity + "個。");
            } else {
                im.sendOk("請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
            }
            im.safeDispose();
        } else {
        im.gainItem(2430656, -1);
            im.sendOk("今天的運氣可真差，什麼都沒有拿到。");
            im.safeDispose();
        }
    }
}