status = -1;
var itemList = Array(
//玩具
Array(1402014, 100, 1, 3),//溫度計
//絕版點裝
Array(1002846, 300, 1, 1),//華爾茲絲帶貝雷帽
Array(1050152, 300, 1, 1),//水兵服(男)
Array(1051180, 300, 1, 1),//水兵服(女)
Array(1042104, 300, 1, 1), //小綠葉T恤
Array(1042105, 300, 1, 1),//小紅葉T恤
Array(1002845, 300, 1, 1),//粉紅兔耳帽
Array(1052224, 300, 1, 1),//草莓baby裝
Array(1702228, 300, 1, 1), //可可香蕉
Array(1002721, 300, 1, 1),//狸毛護耳
Array(1002568, 300, 1, 1),//手工編織髮夾
Array(1702155, 300, 1, 1),//絢麗彩虹
Array(1042142, 300, 1, 1),//彩虹條背心
Array(1062093, 300, 1, 1),//嫩綠休閒短褲
Array(1112904, 300, 1, 1),//彩虹星環繞戒指
Array(1041142, 300, 1, 1),//巨星蛋糕吊帶
Array(1061148, 300, 1, 1),//巨星粉色短裙
Array(1702182, 300, 1, 1),//洛麗波板糖
Array(1002888, 300, 1, 1),//絲帶髮箍(紅色)
Array(1002890, 300, 1, 1),//絲帶髮箍(藍色)
Array(1052200, 300, 1, 1),//羅麗粉色娃娃套服
Array(1702208, 300, 1, 1),//搞怪鱷魚
Array(1002863, 300, 1, 1),//小熊熊可愛帽
Array(1052061, 300, 1, 1),//巴西足球服No.9
Array(1052059, 300, 1, 1),//法國足球服No.14
Array(1003207, 300, 1, 1),//胡蘿蔔兔爆炸頭
Array(1702285, 300, 1, 1),//藍色蝴蝶結手提包
Array(1012131, 300, 1, 1),//好白的牙
Array(1702302, 300, 1, 1),//杯具
Array(1072337, 300, 1, 1),//喜洋洋拖鞋
Array(1112238, 300, 1, 1),//水墨花聊天戒指
Array(1112135, 300, 1, 1),//水墨花名片戒指
Array(1702261, 300, 1, 1),//櫻花棒
Array(1702091, 300, 1, 1),//網球拍
Array(1702168, 300, 1, 1),//閃亮聖誕樹
Array(1003051, 300, 1, 1),//小狐狸
Array(1003048, 300, 1, 1),//聖誕裝飾帽
Array(1002995, 300, 1, 1),//皇家海軍帽
Array(1003012, 300, 1, 1),//嫦娥髮式
Array(1002876, 300, 1, 1),//聖誕紅髮夾
Array(1002839, 300, 1, 1),//南瓜棒球帽
Array(1001048, 300, 1, 1),//鬼娃娃帽
Array(1102225, 300, 1, 1),//嫦娥披風
Array(1102217, 300, 1, 1),//九尾披風
Array(1102157, 300, 1, 1),//傀儡枷鎖
Array(1051131, 300, 1, 1),//聖誕女孩子服
Array(1112916, 300, 1, 1),//寂寞單身戒指
Array(1012179, 300, 1, 1),//鹿鼻子
Array(1051152, 300, 1, 1),//玫瑰紅晚宴裙
Array(1112118, 300, 1, 1),//可樂名片戒指
Array(1112119, 300, 1, 1),//可樂(Red) 名片戒指
Array(1112120, 300, 1, 1),//可樂(White) 名片戒指
Array(1112228, 300, 1, 1),//可樂聊天戒指
Array(1112229, 300, 1, 1),//可樂(Red)聊天戒指
Array(1112230, 300, 1, 1), //可樂(White)聊天戒指
Array(1112103, 450, 1, 1), //嫩黃名片戒指 在角色的下面出來黃底黑字角色名。
Array(1004211, 450, 1, 1), //哈尼絨絨耳 由中國玩家「小術」設計的哈尼絨絨耳。
Array(1042330, 450, 1, 1), //露肩baby裝 由中國玩家「小術」設計的露肩baby裝。
Array(1012134, 450, 1, 1), //淚滴 (無描述)
Array(1072337, 450, 1, 1), //喜洋洋拖鞋 (無描述)
Array(1112290, 400, 1, 1), //夢幻雪景聊天戒指 由中國玩家「小術」設計的夢幻雪景聊天戒指。角色對話時，會出現夢幻般的雪花場景。
Array(1112159, 400, 1, 1), //非洲之星名片戒指 由中國玩家"小術"設計的非洲之星名片戒指。角色造型下面以非洲之星的形式，以白色字體顯示角色名。
Array(1112271, 400, 1, 1), //非洲之星聊天戒指 由中國玩家"小術"設計的非洲之星聊天戒指。角色聊天窗變成非洲之星的樣子。
Array(1112135, 400, 1, 1), //水墨花名片戒指 在角色腳底下，用以水墨畫背景用白色的字體顯示角色名字。
Array(1112238, 400, 1, 1), //水墨花聊天戒指 角色在聊天時，會出現水墨畫對話框。
Array(1004126, 400, 1, 1), //彩糖熊耳帽 由中國楓之谷玩家"小術"設計。
Array(1042320, 400, 1, 1), //海鷗印花T恤 由中國玩家"小術"設計的海鷗印花T恤。
Array(1042315, 400, 1, 1), //藍色萌萌象T恤 由中國玩家「小術」設計的T恤。和藍色小象噴灑出的水泡沫，一起驅逐夏天的炎熱吧。
Array(1042316, 400, 1, 1), //粉色萌萌象T恤 由中國玩家「小術」設計的T恤。和粉色小象噴灑出的水泡沫，一起驅逐夏天的炎熱吧。
Array(1012105, 450, 1, 1), //奶嘴 (無描述)
Array(1112142, 450, 1, 1), //木乃伊名片戒指 在角色下面的繃帶上顯示角色名。
Array(1112253, 450, 1, 1), //木乃伊對話框戒指 角色對話時, 顯示繃帶對話框。
Array(1003268, 450, 1, 1), //粉嫩愛心帽 (無描述)
Array(1002839, 450, 1, 1), //南瓜棒球帽 (無描述)
Array(1004137, 450, 1, 1), //兔兔熊帽 由中國楓之谷玩家"小術"設計。
Array(1004029, 450, 1, 1), //北極熊無邊帽 (無描述)
Array(1002720, 450, 1, 1), //鹿角聖誕帽 (無描述)
Array(1004193, 450, 1, 1), //搞怪翅膀帽 (無描述)
Array(1112150, 450, 1, 1), //天使降臨名片戒指 由中國玩家「小術」設計。極具歐美風的戒指，帶上它，如同天使降臨。
Array(1112262, 450, 1, 1), //天使聊天戒指 由中國玩家「小術」設計。極具歐美風的戒指，帶上它，如同天使降臨。
Array(1702155, 450, 1, 1), //絢麗彩虹 可裝備在#c所有的主武器#上。
Array(1702302, 450, 1, 1), //杯具 可裝備在#c除了/手炮/雙弩槍/以外的主武器#上。
Array(1702508, 450, 1, 1), //草莓牛奶武器 由中國玩家"小術"設計的甜蜜草莓牛奶武器。可裝備在#c所有的主武器#上。

//椅子
// -----價格為 60000 樂豆點 --------
Array(3010183, 250, 1, 2), //胡蘿蔔椅子 兔子喜歡的胡蘿蔔,胡蘿蔔富有豐富的維生素A噢.每10秒鐘恢復HP,MP各50.
Array(3010788, 50, 1, 3), //巨無霸年夜飯 由中國玩家「小術」設計。農曆除夕，在鞭炮聲中圍座在一起，共同辭舊迎新一起享受美味的巨無霸團圓飯。坐上時，每秒恢復HP、MP各500。
Array(3010594, 150, 1, 2), //藍莓蛋糕椅 楓之谷用戶'小術'設計的椅子。充滿美味蛋糕的蛋糕店。要先吃什麼呢？每10秒恢復HP200，MP200。
Array(3010516, 150, 1, 2), //嚕嚕啦啦印第安小孩 成為了淘氣的印第安小孩們的俘虜。每10秒HP恢復50點，MP恢復50點。
Array(3010643, 50, 1, 3), //10週年慶祝蛋糕 坐在10週年慶祝蛋糕上，可以每10秒恢復各50的HP和MP。
Array(3010754, 50, 1, 3), //百鬼夜行 傳說中出現在夏日夜晚的妖怪大遊行椅子。坐下時，每10秒中，可恢復HP,MP各50.
Array(3010751, 50, 1, 3), //鯨魚椅子 可愛的藍色鯨魚椅子。坐下時，每10秒中，可恢復HP,MP各50.
Array(3010877, 150, 1, 3), //人魚珊瑚礁 由中國玩家「小術」設計的人魚珊瑚礁椅子。可以暫時感受變成人魚。#c每10秒中恢復HP，MP各500。#
Array(3012024, 150, 1, 3), //沙灘排球椅子 由中國玩家「小術」設計的沙灘排球椅子。兩個人靠近時會出現特效。#c每10秒中恢復HP，MP各500。#
Array(3010851, 150, 1, 3), //夏日沁飲椅子 炎炎夏日，只有它才能讓你清涼舒爽。坐下時，每10秒中，可恢復HP，MP各50。
Array(3015009, 150, 1, 3), //小蘋果椅子 小蘋果椅子。坐下後，每10秒HP、MP各恢復500。
Array(3010621, 50, 1, 3), //蛤蛤仙人椅 降伏了巨大的妖怪仙人，坐在上面每10秒恢復HP和MP各50.
Array(3010459, 50, 1, 3), //天使舞台椅 我是你的鐵桿粉絲! 可以感受諾巴人對天使破壞者的熱愛。坐下每10秒恢復50點HP和MP。
Array(3010876, 250, 1, 2), //楓之谷行星椅子 為紀念楓之谷10週年，特別製作的楓之谷行星椅子。每10秒中恢復HP，MP各500。
Array(3010824, 250, 1, 2), //水星椅子 又小又很熱！但可以緩解肌肉酸痛。每10秒鐘恢復HP,MP各60。
Array(3010825, 250, 1, 2), //金星椅子 很厚又冒煙並且非常非常熱！如果你可以忍受，它就像毛毯一樣為你保暖。\n每10秒鐘恢復HP,MP各60。
Array(3010826, 250, 1, 2), //地球椅子 這藍色星球是充滿生氣的，非常熟悉的地方。\n每10秒鐘恢復HP,MP各60。
Array(3010827, 250, 1, 2), //火星椅子 這裡有水嗎？這裡有外星人嗎？請坐在這椅子上找出他們！\n每10秒鐘恢復HP,MP各60。
Array(3010828, 250, 1, 2), //木星椅子 這是為宇宙掌控者的又大、又猛烈的椅子。\n每10秒鐘恢復HP,MP各60。
Array(3010829, 250, 1, 2), //土星椅子 當厭倦超過對手時，就坐在這椅子上，看對手們跑。\n每10秒鐘恢復HP,MP各60。
Array(3010830, 250, 1, 2), //天王星椅子 又冷又很遙遠的椅子，但萬萬沒想到想到這椅子會如此的舒服。\n每10秒鐘恢復HP,MP各60。
Array(3010831, 250, 1, 2), //海王星椅子 坐在太陽系最邊緣的椅子上，享受其壯觀視野。\n每10秒鐘恢復HP,MP各60。
Array(3010832, 50, 1, 3), //太陽椅子 熱，熱，熱！你有勇氣做在這燃燒的王中王椅子上嗎？\n每10秒鐘恢復HP,MP各60。
Array(3010606, 50, 1, 3), //未上色的名畫椅子 這幅空的畫布，呼喚你為它塗上絢麗的色彩。坐在上面時，每10秒HP恢復10點，MP恢復10點。


Array(3010002, 500, 1, 1),//綠色時尚轉椅
Array(3010003, 500, 1, 1),//紅色時尚轉椅
Array(3010006, 500, 1, 1),//黃色時尚轉椅
Array(3010004, 500, 1, 1),//黃藍休閒椅
Array(3010005, 500, 1, 1),//紅藍休閒椅
Array(3010018, 500, 1, 1),//椰子樹沙灘椅
Array(3010029, 500, 1, 1),//藍環凳
Array(3010030, 500, 1, 1),//黑環凳
Array(3010031, 500, 1, 1),//紅環凳
Array(3010032, 500, 1, 1),//黃環凳
Array(3010033, 500, 1, 1),//綠環凳
Array(3010043, 500, 1, 1),//魔女的飛掃把
Array(3013002, 500, 1, 1),//煙花祭
Array(3010166, 500, 1, 1),//影武同門
// -----價格為 90000 樂豆點 --------
Array(3010007, 400, 1, 2),//粉色海豹靠墊
Array(3010008, 400, 1, 2),//藍色海豹靠墊
Array(3010010, 400, 1, 2),//白色海豹靠墊
Array(3010016, 400, 1, 2),//黑色海豹靠墊
Array(3010017, 400, 1, 2),//金色海豹靠墊
Array(3010024, 400, 1, 2),//玩具粉熊椅
Array(3010025, 400, 1, 2),//楓葉紀念凳
// -----價格為 120000 樂豆點 --------
Array(3010014, 300, 1, 2),//月亮彎
Array(3010019, 300, 1, 2),//壽司椅
Array(3010021, 300, 1, 2),//暖暖桌
Array(3010034, 300, 1, 2),//悠長假期(紅)
Array(3010035, 300, 1, 2),//悠長假期(藍)
Array(3010037, 300, 1, 2),//豬豬凳
Array(3010038, 300, 1, 2),//空氣沙發
Array(3010040, 300, 1, 2),//蝙蝠椅
Array(3010041, 300, 1, 2),//骷髏王座
Array(3010044, 300, 1, 2),//同一紅傘下
Array(3010045, 300, 1, 2),//寒冰椅子
Array(3010049, 300, 1, 2),//雪房子
Array(3010068, 300, 1, 2),//露水椅子
Array(3010050, 300, 1, 2),//公主凳
Array(3010069, 300, 1, 2),//大黃風
Array(3010093, 300, 1, 2),//鮮美的火雞
Array(3010094, 300, 1, 2),//漂漂豬椅子
Array(3010095, 300, 1, 2),//石頭人座椅
// -----價格為 130000 樂豆點 --------
Array(3010009, 200, 1, 2),//塌塌凳
Array(3010028, 200, 1, 2),//海盜的俘虜
Array(3010036, 200, 1, 2),//浪漫鞦韆
Array(3010046, 200, 1, 2),//紅龍椅
Array(3010047, 200, 1, 2),//藍龍椅
Array(3010048, 200, 1, 2),//聖誕樹椅子
Array(3010051, 200, 1, 2),//沙漠兔子靠墊1
Array(3010052, 200, 1, 2),//沙漠兔子靠墊2
Array(3010054, 200, 1, 2),//呼嚕呼嚕床
Array(3010057, 200, 1, 2),//血色玫瑰
Array(3010058, 200, 1, 2),//世界末日
Array(3010071, 200, 1, 2),//神獸椅
Array(3010073, 200, 1, 2),//baby皮卡啾
Array(3010075, 200, 1, 2),//我為音樂狂
Array(3010077, 200, 1, 2),//貓頭鷹椅子
Array(3010096, 200, 1, 2),//恐龍化石寶座
Array(3010098, 200, 1, 2),//電視宅人
Array(3010099, 200, 1, 2),//北極熊椅子
Array(3010100, 200, 1, 2),//財神椅子
Array(3010110, 200, 1, 2),//舒適大白熊椅子
Array(3010111, 200, 1, 2),//虎虎生威
Array(3010112, 200, 1, 2),//情書櫃子
Array(3010116, 200, 1, 2),//搖滾之魂椅子
Array(3010117, 200, 1, 2),//魔法書椅子
Array(3010118, 200, 1, 2),//糖果音符椅子
Array(3010119, 200, 1, 2),//羊羊椅子
Array(3010120, 200, 1, 2),//彩蛋籃子
Array(3010123, 200, 1, 2),//夏日花朵
Array(3010124, 200, 1, 2),//都納斯噴氣椅子
Array(3010125, 200, 1, 2),//尼貝隆戰艦椅
Array(3010126, 200, 1, 2),//蝙蝠魔王座
Array(3012001, 200, 1, 2),//篝火
Array(3012002, 200, 1, 2),//浴桶
Array(3010066, 200, 1, 2),//深藍色絨毛沙發
Array(3010067, 200, 1, 2),//紅色設計師椅
Array(3010080, 200, 1, 2),//柿子樹鞦韆 
Array(3010081, 200, 1, 2),//紅帽月妙抱枕椅
Array(3010082, 200, 1, 2),//藍帽月妙抱枕椅
Array(3010083, 200, 1, 2),//扇子月妙抱枕椅
Array(3010084, 200, 1, 2),//太平蕭月妙抱枕椅
Array(3010107, 200, 1, 2),//龍龍的蛋殼椅
Array(3010108, 200, 1, 2),//幼龍鞦韆
Array(3010109, 200, 1, 2),//暖爐椅
Array(3010113, 200, 1, 2),//幽魂發條熊椅子
Array(3010055, 200, 1, 2),//冰雪糕丸子椅
Array(3010145, 200, 1, 2),//週年慶水晶楓葉椅
Array(3010136, 200, 1, 2),//6週年怪物王座
Array(3010137, 200, 1, 2),//神龍椅子
Array(3010149, 200, 1, 2),//貓咪風扇椅
Array(3010144, 200, 1, 2),//七夕椅子
Array(3010155, 200, 1, 2),//影武者的貓頭鷹
Array(3010078, 200, 1, 2),//大熊貓椅子
Array(3010132, 200, 1, 2),//撒嬌貓咪椅
Array(3010133, 200, 1, 2),//帳篷椅
// -----價格為 180000 樂豆點 --------
Array(3012003, 100, 1, 2),//愛心椅子
Array(3012006, 100, 1, 2),//風吹稻香
Array(3012010, 100, 1, 2),//巧克力蛋糕戀人
Array(3012011, 100, 1, 2),//我愛巧克力火鍋
Array(3010156, 100, 1, 2),//浮游飛行器
Array(3010152, 100, 1, 2),//黃三角帳篷椅
Array(3010162, 100, 1, 2),//果月椅子
Array(3010163, 100, 1, 2),//滿月椅
Array(3010135, 100, 1, 2),//節日獨角獸椅子
Array(3010139, 100, 1, 2),//私密空間
Array(3010168, 100, 1, 2),//友誼萬歲椅子
Array(3010172, 100, 1, 2),//星空椅子
Array(3010173, 100, 1, 2),//萬聖節塔羅椅子
Array(3010175, 100, 1, 2),//名畫家椅子
Array(3010179, 100, 1, 2),//燕尾服貓咪椅
Array(3010169, 100, 1, 2),//紙箱裡(求領養)
Array(3010171, 100, 1, 2),//過來抱抱椅
Array(3010174, 100, 1, 2),//女巫煉藥椅
Array(3010182, 100, 1, 2),//兔子公會椅
Array(3010183, 100, 1, 2),//胡蘿蔔椅子
Array(3010053, 100, 1, 2),//兔子紀念版椅子
Array(3010142, 100, 1, 2),//水族館椅子
Array(3010209, 100, 1, 2),//草莓冰淇淋月餅椅
Array(3010210, 100, 1, 2),//香草冰淇淋月餅椅
Array(3010197, 100, 1, 2),//英雄的椅子-狂狼勇士
Array(3010200, 100, 1, 2),//英雄的椅子-龍魔導士
Array(3010201, 100, 1, 2),//英雄的椅子-暗影
Array(3010161, 100, 1, 2),//鼠鼠椅
Array(3010226, 100, 1, 2),//月光仙子椅子
Array(3010085, 50, 1, 3),//鬼娃娃椅子
Array(3013000, 50, 1, 3),//櫻花樹下
Array(3010177, 50, 1, 3),//手柄座椅
Array(3010070, 30, 1, 3), //巨無霸皮卡啾
//傷害皮膚

Array(2431965, 300, 1, 1), //默認傷害皮膚
Array(2431966, 300, 1, 2), //數碼式傷害皮膚
Array(2432084, 300, 1, 2), //數碼式傷害皮膚
Array(2433104, 300, 1, 2), //數碼式傷害皮膚
Array(2431967, 300, 1, 2), //克裡蒂亞斯傷害皮膚
Array(2432131, 300, 1, 2), //組隊任務傷害皮膚
Array(2432153, 300, 1, 2), //衝擊式傷害皮膚
Array(2432603, 300, 1, 2), //衝擊式傷害皮膚
Array(2432638, 300, 1, 2), //衝擊式傷害皮膚
Array(2432659, 300, 1, 2), //衝擊式傷害皮膚
Array(2432154, 300, 1, 3), //甜美傳統韓果傷害皮膚
Array(2432637, 300, 1, 3), //甜美傳統韓果傷害皮膚
Array(2432658, 300, 1, 3), //甜美傳統韓果傷害皮膚
Array(2433106, 300, 1, 3), //甜美傳統韓果傷害皮膚
Array(2432207, 300, 1, 3), //弓箭手村俱樂部傷害皮膚
Array(2432354, 300, 1, 3), //聖誕快樂傷害皮膚
Array(2432355, 300, 1, 3), //雪花傷害皮膚
Array(2432972, 300, 1, 3), //雪花傷害皮膚
Array(2432465, 300, 1, 3), //阿麗莎的傷害皮膚
Array(2433199, 300, 1, 3), //阿麗莎的傷害皮膚
Array(2432479, 300, 1, 3), //桃樂絲的傷害皮膚
Array(2432526, 300, 1, 3), //鍵盤劍士傷害皮膚
Array(2432639, 300, 1, 3), //鍵盤劍士傷害皮膚
Array(2432660, 300, 1, 3), //鍵盤劍士傷害皮膚
Array(2433105, 300, 1, 3), //鍵盤劍士傷害皮膚
Array(2432532, 300, 1, 3), //輕柔春風傷害皮膚
Array(2433107, 300, 1, 3), //輕柔春風傷害皮膚
Array(2432592, 300, 1, 3), //單身部隊傷害皮膚
Array(2433132, 300, 1, 3), //單身部隊傷害皮膚
Array(2432640, 300, 1, 3), //回憶傷害皮膚
Array(2432661, 300, 1, 3), //回憶傷害皮膚
Array(2432710, 300, 1, 3), //花蘑菇傷害皮膚
Array(2432836, 300, 1, 3), //王冠傷害皮膚
Array(2432973, 300, 1, 3), //灰白傷害皮膚
Array(2433063, 300, 1, 3), //Star Planet傷害皮膚
Array(2432591, 300, 1, 3), //櫻吹雪傷害皮膚
Array(2432695, 300, 1, 3), //金燦燦傷害皮膚
Array(2432748, 300, 1, 3), //血色傷害皮膚
Array(2432749, 300, 1, 3), //殭屍傷害皮膚
Array(2432804, 300, 1, 3), //紫色妖姬傷害皮膚
Array(2433112, 300, 1, 3), //臥虎藏龍傷害皮膚
Array(2433113, 300, 1, 3), //冰淇淋傷害皮膚
Array(2433038, 300, 1, 3), //粉筆效果傷害皮膚
Array(2433197, 300, 1, 3), //蘑菇公主傷害皮膚
Array(2433182, 300, 1, 3), //萬聖節南瓜傷害皮膚
Array(2433183, 300, 1, 3), //萬聖節幽靈傷害皮膚

//高級裝備
//法師
Array(1012220, 300, 1, 1), //閃亮紅色魔法師徽章       等級: 130
Array(1003178, 300, 1, 1), //艾裡格斯血色頭箍         等級: 130
Array(1003444, 300, 1, 1), //君主記憶頭箍             等級: 130
Array(1003590, 300, 1, 1), //豪華艾裡格斯頭箍         等級: 130
Array(1102281, 300, 1, 1), //艾裡格斯血色披風         等級: 130
Array(1102363, 300, 1, 1), //君主記憶披風             等級: 130
Array(1102446, 300, 1, 1), //豪華艾裡格斯披風         等級: 130
Array(1082301, 300, 1, 1), //艾裡格斯血色手套         等級: 130
Array(1082417, 300, 1, 1), //君主記憶手套             等級: 130
Array(1082467, 300, 1, 1), //豪華艾裡格斯手套         等級: 130
Array(1052320, 300, 1, 1), //艾裡格斯血色鎖子甲       等級: 130
Array(1052430, 300, 1, 1), //君主記憶鎖子甲           等級: 130
Array(1052499, 300, 1, 1), //豪華艾裡格斯鎖子甲       等級: 130
Array(1092089, 300, 1, 1), //狂狼勇士賢者盾               等級: 130
Array(1072491, 300, 1, 1), //艾裡格斯血色鞋           等級: 130
Array(1072642, 300, 1, 1), //君主記憶靴               等級: 130
Array(1072704, 300, 1, 1), //豪華艾裡格斯靴           等級: 130
Array(1212013, 300, 1, 1), //艾裡格斯血色閃亮克魯       等級: 130
Array(1212034, 300, 1, 1), //君主閃亮克魯               等級: 130
Array(1212043, 300, 1, 1), //豪華艾裡格斯閃亮克魯       等級: 130
Array(1372039, 300, 1, 1), //爆炎之杖                 等級: 130
Array(1372040, 300, 1, 1), //劇毒之杖                 等級: 130
Array(1372041, 300, 1, 1), //寒冰之杖                 等級: 130
Array(1372042, 300, 1, 1), //狂雷之杖                 等級: 130
Array(1372085, 300, 1, 1), //艾裡格斯血色短杖         等級: 130
Array(1372130, 300, 1, 1), //君主權杖                 等級: 130
Array(1372140, 300, 1, 1), //豪華艾裡格斯短杖         等級: 130
Array(1382105, 300, 1, 1), //艾裡格斯血色笞鞭         等級: 130
Array(1382158, 300, 1, 1), //君主長杖                 等級: 130
Array(1382169, 300, 1, 1), //豪華艾裡格斯笞鞭         等級: 130
Array(1092110, 300, 1, 1), //外星人之盾(法師)         等級: 135
Array(1212044, 300, 1, 1), //無愛閃亮克魯               等級: 135
Array(1372137, 300, 1, 1), //外星人之短杖             等級: 135
Array(1372161, 300, 1, 1), //無愛蝶翼杖               等級: 135
Array(1372168, 300, 1, 1), //布萊克繽短杖             等級: 135
Array(1382167, 300, 1, 1), //外星人之長杖             等級: 135
Array(1382192, 300, 1, 1), //無愛冰輪杖               等級: 135
Array(1382199, 300, 1, 1), //布萊克繽長杖             等級: 135
Array(1003173, 300, 1, 2), //龍尾法師帽子             等級: 140
Array(1102276, 300, 1, 2), //龍尾法師披風             等級: 140
Array(1082296, 300, 1, 2), //龍尾法師手套             等級: 140
Array(1052315, 300, 1, 2), //龍尾法師長袍             等級: 140
Array(1072486, 300, 1, 2), //龍尾法師鞋               等級: 140
Array(1212014, 300, 1, 2), //龍尾黑甲凶靈             等級: 140
Array(1372084, 300, 1, 2), //龍尾精靈短杖             等級: 140
Array(1382104, 300, 1, 2), //龍尾戰鬥長杖             等級: 140
Array(1132175, 200, 1, 3), //暴君赫爾梅斯腰帶         等級: 150
Array(1102482, 200, 1, 3), //暴君赫爾梅斯披風         等級: 150
Array(1072744, 200, 1, 3), //暴君赫爾梅斯靴           等級: 150
Array(1382049, 200, 1, 3), //朱雀長杖                 等級: 163
Array(1382050, 200, 1, 3), //玄武長杖                 等級: 163
Array(1382051, 200, 1, 3), //白虎長杖                 等級: 163
Array(1382052, 200, 1, 3), //青龍長杖                 等級: 163
Array(1142010, 150, 1, 3), //聖賢者勳章               等級: 200
//盜賊
Array(1012232, 300, 1, 1), //閃亮紅色盜賊徽章         等級: 130
Array(1003180, 300, 1, 1), //赫爾巴斯血色頭箍         等級: 130
Array(1003446, 300, 1, 1), //君主迅捷頭箍             等級: 130
Array(1003592, 300, 1, 1), //豪華赫爾巴斯頭箍         等級: 130
Array(1102283, 300, 1, 1), //赫爾巴斯血色披風         等級: 130
Array(1102365, 300, 1, 1), //君主迅捷披風             等級: 130
Array(1102448, 300, 1, 1), //豪華赫爾巴斯披風         等級: 130
Array(1082303, 300, 1, 1), //赫爾巴斯血色手套         等級: 130
Array(1082419, 300, 1, 1), //君主迅捷手套             等級: 130
Array(1082469, 300, 1, 1), //豪華赫爾巴斯手套         等級: 130
Array(1052322, 300, 1, 1), //赫爾巴斯血色鎖子甲       等級: 130
Array(1052432, 300, 1, 1), //君主迅捷鎖子甲           等級: 130
Array(1052501, 300, 1, 1), //豪華赫爾巴斯鎖子甲       等級: 130
Array(1092088, 300, 1, 1), //狂狼勇士黑暗盾               等級: 130
Array(1072493, 300, 1, 1), //赫爾巴斯血色鞋           等級: 130
Array(1072644, 300, 1, 1), //君主迅捷靴               等級: 130
Array(1072706, 300, 1, 1), //豪華赫爾巴斯靴           等級: 130
Array(1332131, 300, 1, 1), //赫爾巴斯血色屠殺者       等級: 130
Array(1332184, 300, 1, 1), //君主屠殺者               等級: 130
Array(1332194, 300, 1, 1), //豪華赫爾巴斯獵手         等級: 130
Array(1342035, 300, 1, 1), //紅花青梅刀               等級: 130
Array(1342064, 300, 1, 1), //君主刀                   等級: 130
Array(1362018, 300, 1, 1), //地獄之路血腥手杖         等級: 130
Array(1362056, 300, 1, 1), //君主手杖                 等級: 130
Array(1362068, 300, 1, 1), //豪華赫爾巴斯手杖         等級: 130
Array(1472123, 300, 1, 1), //赫爾巴斯血色手套         等級: 130
Array(1472174, 300, 1, 1), //君主拳套                 等級: 130
Array(1472180, 300, 1, 1), //豪華赫爾巴斯手套         等級: 130
Array(1092111, 300, 1, 1), //外星人之盾(盜賊)         等級: 135
Array(1332192, 300, 1, 1), //外星人之短劍             等級: 135
Array(1332205, 300, 1, 1), //無愛狂鯊鋸               等級: 135
Array(1332214, 300, 1, 1), //布萊克繽短劍             等級: 135
Array(1342070, 300, 1, 1), //外星人之刀               等級: 135
Array(1342075, 300, 1, 1), //無愛之刃                 等級: 135
Array(1342079, 300, 1, 1), //布萊克繽影武             等級: 135
Array(1362074, 300, 1, 1), //無愛手杖                 等級: 135
Array(1362081, 300, 1, 1), //布萊克繽手杖             等級: 135
Array(1472178, 300, 1, 1), //外星人之拳套             等級: 135
Array(1472197, 300, 1, 1), //無愛大悲賦               等級: 135
Array(1472205, 300, 1, 1), //布萊克繽拳套             等級: 135
Array(1003175, 300, 1, 2), //渡鴉之魂追蹤者帽         等級: 140
Array(1102278, 300, 1, 2), //渡鴉之魂獵人披風         等級: 140
Array(1082298, 300, 1, 2), //渡鴉之魂追蹤者手套       等級: 140
Array(1052317, 300, 1, 2), //渡鴉之魂追蹤者盔甲       等級: 140
Array(1072488, 300, 1, 2), //渡鴉之魂追蹤者鞋         等級: 140
Array(1332130, 300, 1, 2), //渡鴉之魂短劍             等級: 140
Array(1342036, 300, 1, 2), //精靈角暗影刀             等級: 140
Array(1362019, 300, 1, 2), //渡鴉之魂真紅手杖         等級: 140
Array(1472122, 300, 1, 2), //渡鴉之魂鋼鐵拳套         等級: 140
Array(1132177, 200, 1, 3), //暴君利卡昂腰帶           等級: 150
Array(1102484, 200, 1, 3), //暴君利卡昂披風           等級: 150
Array(1072746, 200, 1, 3), //暴君利卡昂靴             等級: 150
Array(1142012, 150, 1, 3), //影盜賊勳章               等級: 200
//弓箭手
Array(1012226, 300, 1, 1), //閃亮紅色弓箭手徽章       等級: 130
Array(1003179, 300, 1, 1), //伊布斯血色頭箍           等級: 130
Array(1003445, 300, 1, 1), //君主鋒銳頭箍             等級: 130
Array(1003591, 300, 1, 1), //豪華伊布斯頭箍           等級: 130
Array(1102282, 300, 1, 1), //伊布斯血色披風           等級: 130
Array(1102364, 300, 1, 1), //君主鋒銳披風             等級: 130
Array(1102447, 300, 1, 1), //豪華伊布斯披風           等級: 130
Array(1082302, 300, 1, 1), //伊布斯血色手套           等級: 130
Array(1082418, 300, 1, 1), //君主鋒銳手套             等級: 130
Array(1082468, 300, 1, 1), //豪華伊布斯手套           等級: 130
Array(1052321, 300, 1, 1), //伊布斯血色鎖子甲         等級: 130
Array(1052431, 300, 1, 1), //君主鋒銳鎖子甲           等級: 130
Array(1052500, 300, 1, 1), //豪華伊布斯鎖子甲         等級: 130
Array(1072492, 300, 1, 1), //伊布斯血色鞋             等級: 130
Array(1072643, 300, 1, 1), //君主鋒銳靴               等級: 130
Array(1072705, 300, 1, 1), //豪華伊布斯靴             等級: 130
Array(1452112, 300, 1, 1), //伊布斯血色長弓           等級: 130
Array(1452162, 300, 1, 1), //君主長弓                 等級: 130
Array(1452171, 300, 1, 1), //豪華伊布斯長弓           等級: 130
Array(1462100, 300, 1, 1), //伊布斯血色弩             等級: 130
Array(1462152, 300, 1, 1), //君主弩                   等級: 130
Array(1462160, 300, 1, 1), //豪華伊布斯弩             等級: 130
Array(1522017, 300, 1, 1), //史詩血腥雙弩槍           等級: 130
Array(1522064, 300, 1, 1), //君主雙弩槍               等級: 130
Array(1522072, 300, 1, 1), //豪華伊布斯雙弩槍         等級: 130
Array(1452168, 300, 1, 1), //外星人之弓               等級: 135
Array(1452189, 300, 1, 1), //無愛驚電弓               等級: 135
Array(1452196, 300, 1, 1), //布萊克繽弓               等級: 135
Array(1462157, 300, 1, 1), //外星人之弩               等級: 135
Array(1462177, 300, 1, 1), //無愛冥雷弩               等級: 135
Array(1462184, 300, 1, 1), //布萊克繽弩               等級: 135
Array(1522078, 300, 1, 1), //無愛鮮花弩槍             等級: 135
Array(1522085, 300, 1, 1), //布萊克繽雙弩槍           等級: 135
Array(1003174, 300, 1, 2), //鷹翼哨兵便帽             等級: 140
Array(1102277, 300, 1, 2), //鷹翼哨兵披風             等級: 140
Array(1082297, 300, 1, 2), //鷹翼哨兵手套             等級: 140
Array(1052316, 300, 1, 2), //鷹翼哨兵服               等級: 140
Array(1072487, 300, 1, 2), //鷹翼哨兵鞋               等級: 140
Array(1452111, 300, 1, 2), //鷹翼組合弓               等級: 140
Array(1462099, 300, 1, 2), //鷹翼重弩                 等級: 140
Array(1522018, 300, 1, 2), //龍翼巨弩槍               等級: 140
Array(1132176, 200, 1, 3), //暴君凱倫腰帶             等級: 150
Array(1102483, 200, 1, 3), //暴君凱倫披風             等級: 150
Array(1072745, 200, 1, 3), //暴君凱倫靴               等級: 150
Array(1142011, 150, 1, 3), //狙擊王勳章               等級: 200
//海盜
Array(1012238, 300, 1, 1), //閃亮紅色海盜徽章         等級: 130
Array(1003181, 300, 1, 1), //維帕爾血色頭箍           等級: 130
Array(1003447, 300, 1, 1), //君主熾熱頭箍             等級: 130
Array(1003593, 300, 1, 1), //豪華維帕爾頭箍           等級: 130
Array(1102284, 300, 1, 1), //維帕爾血色披風           等級: 130
Array(1102366, 300, 1, 1), //君主熾熱披風             等級: 130
Array(1102449, 300, 1, 1), //豪華維帕爾披風           等級: 130
Array(1082304, 300, 1, 1), //維帕爾血色手套           等級: 130
Array(1082420, 300, 1, 1), //君主熾熱手套             等級: 130
Array(1082470, 300, 1, 1), //豪華維帕爾手套           等級: 130
Array(1052323, 300, 1, 1), //維帕爾血色鎖子甲         等級: 130
Array(1052433, 300, 1, 1), //君主熾熱鎖子甲           等級: 130
Array(1052502, 300, 1, 1), //豪華維帕爾鎖子甲         等級: 130
Array(1072494, 300, 1, 1), //維帕爾血色鞋             等級: 130
Array(1072645, 300, 1, 1), //君主熾熱靴               等級: 130
Array(1072707, 300, 1, 1), //豪華維帕爾靴             等級: 130
Array(1222013, 300, 1, 1), //維帕爾血月               等級: 130
Array(1222034, 300, 1, 1), //君主血月                 等級: 130
Array(1222043, 300, 1, 1), //豪華維帕爾血月           等級: 130
Array(1482085, 300, 1, 1), //維帕爾血色拳甲           等級: 130
Array(1482135, 300, 1, 1), //君主指虎                 等級: 130
Array(1482141, 300, 1, 1), //豪華維帕爾指虎手套       等級: 130
Array(1492086, 300, 1, 1), //維帕爾血色之鷹           等級: 130
Array(1492135, 300, 1, 1), //君主沙漠之鷹             等級: 130
Array(1492153, 300, 1, 1), //豪華維帕爾之鷹           等級: 130
Array(1532017, 300, 1, 1), //維帕爾血腥火神炮         等級: 130
Array(1532068, 300, 1, 1), //君主火炮                 等級: 130
Array(1532075, 300, 1, 1), //豪華維帕爾火炮           等級: 130
Array(1222044, 300, 1, 1), //無愛紫龍                 等級: 135
Array(1482139, 300, 1, 1), //外星人之指虎             等級: 135
Array(1482151, 300, 1, 1), //無愛孔雀翎               等級: 135
Array(1482159, 300, 1, 1), //布萊克繽指虎             等級: 135
Array(1492149, 300, 1, 1), //外星人之火槍             等級: 135
Array(1492162, 300, 1, 1), //無愛鳳凰銃               等級: 135
Array(1492170, 300, 1, 1), //布萊克繽火槍             等級: 135
Array(1532081, 300, 1, 1), //無愛救世炮               等級: 135
Array(1532089, 300, 1, 1), //布萊克繽火炮             等級: 135
Array(1003176, 300, 1, 2), //鯊齒船長帽               等級: 140
Array(1102279, 300, 1, 2), //鯊齒船長披風             等級: 140
Array(1082299, 300, 1, 2), //鯊齒船長手套             等級: 140
Array(1052318, 300, 1, 2), //鯊齒船長外套             等級: 140
Array(1072489, 300, 1, 2), //鯊齒船長鞋               等級: 140
Array(1222014, 300, 1, 2), //鯊齒靈魂汲取者           等級: 140
Array(1482084, 300, 1, 2), //鯊齒巨鷹爪               等級: 140
Array(1492085, 300, 1, 2), //鯊齒銳利手銃             等級: 140
Array(1532018, 300, 1, 2), //鯊齒火焰炮               等級: 140
Array(1132178, 200, 1, 3), //暴君阿爾泰腰帶           等級: 150
Array(1102485, 200, 1, 3), //暴君阿爾泰披風           等級: 150
Array(1072747, 200, 1, 3), //暴君阿爾泰靴             等級: 150
Array(1352304, 200, 1, 3), //超越的八卦寶盒           等級: 160
Array(1142013, 150, 1, 3), //海盜王勳章               等級: 200
//劍士
Array(1012214, 300, 1, 1), //閃亮紅色劍士徽章         等級: 130
Array(1003177, 300, 1, 1), //阿加雷斯血色頭箍         等級: 130
Array(1003443, 300, 1, 1), //君主英勇頭箍             等級: 130
Array(1003589, 300, 1, 1), //豪華阿加雷斯頭箍         等級: 130
Array(1102280, 300, 1, 1), //阿加雷斯血色披風         等級: 130
Array(1102362, 300, 1, 1), //君主英勇披風             等級: 130
Array(1102445, 300, 1, 1), //豪華阿加雷斯披風         等級: 130
Array(1082300, 300, 1, 1), //阿加雷斯血色手套         等級: 130
Array(1082416, 300, 1, 1), //君主英勇手套             等級: 130
Array(1082466, 300, 1, 1), //豪華阿加雷斯手套         等級: 130
Array(1052319, 300, 1, 1), //阿加雷斯血色鎖子甲       等級: 130
Array(1052429, 300, 1, 1), //君主英勇鎖子甲           等級: 130
Array(1052498, 300, 1, 1), //豪華阿加雷斯鎖子甲       等級: 130
Array(1092087, 300, 1, 1), //狂狼勇士勇士盾               等級: 130
Array(1072490, 300, 1, 1), //阿加雷斯血色鞋           等級: 130
Array(1072641, 300, 1, 1), //君主英勇靴               等級: 130
Array(1072703, 300, 1, 1), //豪華阿加雷斯靴           等級: 130
Array(1302153, 300, 1, 1), //阿加雷斯血色拳刃         等級: 130
Array(1302207, 300, 1, 1), //君主單手劍               等級: 130
Array(1302228, 300, 1, 1), //豪華阿加雷斯拳刃         等級: 130
Array(1312066, 300, 1, 1), //阿加雷斯血色斧           等級: 130
Array(1312110, 300, 1, 1), //君主斧                   等級: 130
Array(1312117, 300, 1, 1), //豪華阿加雷斯頭盔         等級: 130
Array(1322097, 300, 1, 1), //阿加雷斯血色錘           等級: 130
Array(1322150, 300, 1, 1), //君主錘                   等級: 130
Array(1322163, 300, 1, 1), //豪華阿加雷斯錘           等級: 130
Array(1402096, 300, 1, 1), //阿加雷斯血色巨劍         等級: 130
Array(1402142, 300, 1, 1), //君主雙手劍               等級: 130
Array(1402152, 300, 1, 1), //豪華阿加雷斯雙手劍       等級: 130
Array(1412066, 300, 1, 1), //阿加雷斯血色大斧         等級: 130
Array(1412099, 300, 1, 1), //君主雙手斧               等級: 130
Array(1412105, 300, 1, 1), //豪華阿加雷斯拳套         等級: 130
Array(1422067, 300, 1, 1), //阿加雷斯血色大槌         等級: 130
Array(1422102, 300, 1, 1), //君主巨錘                 等級: 130
Array(1422108, 300, 1, 1), //豪華阿加雷斯大槌         等級: 130
Array(1432087, 300, 1, 1), //阿加雷斯血色槍           等級: 130
Array(1432131, 300, 1, 1), //君主槍                   等級: 130
Array(1432139, 300, 1, 1), //豪華阿加雷斯之矛         等級: 130
Array(1442117, 300, 1, 1), //阿加雷斯血色矛           等級: 130
Array(1442170, 300, 1, 1), //君主矛                   等級: 130
Array(1442183, 300, 1, 1), //豪華阿加雷斯之矛         等級: 130
Array(1092109, 300, 1, 1), //外星人之盾(劍士)         等級: 135
Array(1302070, 300, 1, 1), //布萊克繽單手劍           等級: 135
Array(1302224, 300, 1, 1), //外星人之單手劍           等級: 135
Array(1302248, 300, 1, 1), //無愛破甲劍               等級: 135
Array(1312115, 300, 1, 1), //外星人之單手斧           等級: 135
Array(1312135, 300, 1, 1), //無愛斷蚺斧               等級: 135
Array(1312142, 300, 1, 1), //布萊克繽單手斧           等級: 135
Array(1322100, 300, 1, 1), //布萊克繽單手棍         等級: 135
Array(1322161, 300, 1, 1), //外星人之單手棍         等級: 135
Array(1322181, 300, 1, 1), //無愛驚破天               等級: 135
Array(1402150, 300, 1, 1), //外星人之雙手劍           等級: 135
Array(1402172, 300, 1, 1), //無愛玄冥劍               等級: 135
Array(1402185, 300, 1, 1), //布萊克繽雙手劍           等級: 135
Array(1412103, 300, 1, 1), //外星人之雙手斧           等級: 135
Array(1412122, 300, 1, 1), //無愛碎黿斧               等級: 135
Array(1412126, 300, 1, 1), //布萊克繽雙手斧           等級: 135
Array(1422106, 300, 1, 1), //外星人之雙手棍         等級: 135
Array(1422124, 300, 1, 1), //無愛威震天               等級: 135
Array(1422129, 300, 1, 1), //布萊克繽雙手棍         等級: 135
Array(1432137, 300, 1, 1), //外星人之槍               等級: 135
Array(1432150, 300, 1, 1), //無愛顯聖槍               等級: 135
Array(1432158, 300, 1, 1), //布萊克繽長槍             等級: 135
Array(1442181, 300, 1, 1), //外星人之矛               等級: 135
Array(1442202, 300, 1, 1), //無愛神光戟               等級: 135
Array(1442209, 300, 1, 1), //布萊克繽長矛             等級: 135
Array(1003172, 300, 1, 2), //獅心戰鬥頭盔             等級: 140
Array(1102275, 300, 1, 2), //獅心戰鬥披風             等級: 140
Array(1082295, 300, 1, 2), //獅心戰鬥護腕             等級: 140
Array(1052314, 300, 1, 2), //獅心戰鬥鎖子甲           等級: 140
Array(1072485, 300, 1, 2), //獅心戰鬥鞋               等級: 140
Array(1302152, 300, 1, 2), //獅心彎刀                 等級: 140
Array(1312065, 300, 1, 2), //獅心勇士斧               等級: 140
Array(1322096, 300, 1, 2), //獅心震雷釘               等級: 140
Array(1402095, 300, 1, 2), //獅心戰鬥彎刀             等級: 140
Array(1412065, 300, 1, 2), //獅心戰鬥斧               等級: 140
Array(1422066, 300, 1, 2), //獅心巨錘                 等級: 140
Array(1432086, 300, 1, 2), //獅心長槍                 等級: 140
Array(1442116, 300, 1, 2), //獅心矛                   等級: 140
Array(1132174, 200, 1, 3), //暴君西亞戴斯腰帶         等級: 150
Array(1102481, 200, 1, 3), //暴君西亞戴斯披風         等級: 150
Array(1072743, 200, 1, 3), //暴君西亞戴斯靴           等級: 150
Array(1402179, 200, 1, 3), //被詛咒的凱瑟利安         等級: 150
Array(1402180, 200, 1, 3), //解放的凱瑟利安           等級: 150
Array(1142009, 100, 1, 3), //戰武神勳章               等級: 200
//全職業
Array(1012172, 200, 1, 3), //恐怖鬼娃的傷口           等級: 130
Array(1012239, 200, 1, 3), //旭日臉部彩繪             等級: 130
Array(1012252, 200, 1, 3), //閃亮紅色特殊徽章         等級: 130
Array(1012283, 200, 1, 3), //烈日臉飾                 等級: 130
Array(1032088, 200, 1, 3), //體力獵犬耳環             等級: 130
Array(1032089, 200, 1, 3), //魔力獵犬耳環             等級: 130
Array(1032090, 200, 1, 3), //超級獵犬耳環             等級: 130
Array(1032091, 200, 1, 3), //敏捷獵犬耳環             等級: 130
Array(1032093, 200, 1, 3), //旭日耳環                 等級: 130
Array(1032110, 200, 1, 3), //烈日耳環                 等級: 130
Array(1032136, 200, 1, 3), //地獄火焰                 等級: 130
Array(1122091, 200, 1, 3), //巨熊紫色吊墜             等級: 130
Array(1122095, 200, 1, 3), //貓頭鷹紫色吊墜           等級: 130
Array(1122099, 200, 1, 3), //野狼紫色吊墜             等級: 130
Array(1122103, 200, 1, 3), //孔雀紫色吊墜             等級: 130
Array(1122104, 200, 1, 3), //旭日吊墜                 等級: 130
Array(1122148, 200, 1, 3), //無雙吊墜                 等級: 130
Array(1122149, 200, 1, 3), //烈日吊墜                 等級: 130
Array(1132053, 200, 1, 3), //堅韌極限腰帶             等級: 130
Array(1132063, 200, 1, 3), //智慧極限腰帶             等級: 130
Array(1132073, 200, 1, 3), //銳利極限腰帶             等級: 130
Array(1132083, 200, 1, 3), //幸運極限腰帶             等級: 130
Array(1132085, 200, 1, 3), //旭日腰帶                 等級: 130
Array(1132104, 200, 1, 3), //烈日腰帶                 等級: 130
Array(1132141, 200, 1, 3), //君主腰帶                 等級: 130
Array(1142372, 200, 1, 3), //時間旅行者               等級: 130
Array(1142541, 200, 1, 3), //最強勳章                 等級: 130
Array(1152046, 200, 1, 3), //堅韌閃亮皇家護肩         等級: 130
Array(1152047, 200, 1, 3), //智慧閃亮皇家護肩         等級: 130
Array(1152048, 200, 1, 3), //銳利閃亮皇家護肩         等級: 130
Array(1152049, 200, 1, 3), //幸運閃亮皇家護肩         等級: 130
Array(1152079, 200, 1, 3), //君主護肩                 等級: 130
Array(1112579, 200, 1, 3), //力量戒指Ⅶ               等級: 130
Array(1112580, 200, 1, 3), //智慧戒指Ⅶ               等級: 130
Array(1112581, 200, 1, 3), //敏捷戒指Ⅶ               等級: 130
Array(1112582, 200, 1, 3), //幸運戒指Ⅶ               等級: 130
Array(1112584, 200, 1, 3), //旭日戒指                 等級: 130
Array(1112590, 200, 1, 3), //威力戒指Ⅳ               等級: 130
Array(1112662, 200, 1, 3), //烈日戒指                 等級: 130
Array(1112712, 200, 1, 3), //君主戒指                 等級: 130
Array(1022144, 200, 1, 3), //混沌皮卡啾瞳印           等級: 135
Array(1032142, 200, 1, 3), //外星人之耳環             等級: 135
Array(1122197, 200, 1, 3), //外星人之吊墜             等級: 135
Array(1132152, 200, 1, 3), //外星人之腰帶             等級: 135
Array(1003540, 200, 1, 3), //外星人之頭盔             等級: 135
Array(1003621, 200, 1, 3), //混沌皮卡啾帽             等級: 135
Array(1003622, 200, 1, 3), //布萊克繽帽               等級: 135
Array(1082432, 200, 1, 3), //外星人之手套             等級: 135
Array(1052460, 200, 1, 3), //外星人之套裝             等級: 135
Array(1052526, 200, 1, 3), //混沌皮卡啾大衣           等級: 135
Array(1052527, 200, 1, 3), //布萊克繽大衣             等級: 135
Array(1112738, 200, 1, 3), //外星人之戒指             等級: 135
Array(1072664, 200, 1, 3), //外星人之靴               等級: 135
Array(1122012, 150, 1, 3), //永恆玉珮                 等級: 140
Array(1122150, 150, 1, 3), //統治者吊墜               等級: 140
Array(1003719, 150, 1, 3), //進階精靈帽               等級: 140
Array(1003720, 150, 1, 3), //進階半半頭盔             等級: 140
Array(1003721, 150, 1, 3), //進階女王王冠             等級: 140
Array(1003722, 150, 1, 3), //進階貝倫頭盔             等級: 140
Array(1112597, 150, 1, 3), //西格諾斯的鑽石戒指         等級: 140
Array(1122085, 150, 1, 3), //至尊不速之客項鏈         等級: 145
Array(1012173, 150, 1, 3), //恐怖鬼娃的傷口           等級: 150
Array(1142395, 150, 1, 3), //阿斯旺不死鳥             等級: 170
Array(1142396, 150, 1, 3), //熟悉希拉的人             等級: 170
Array(1142397, 150, 1, 3), //阿斯旺之光               等級: 170
Array(1012174, 150, 1, 3), //恐怖鬼娃的傷口           等級: 180
Array(1142133, 150, 1, 3), //英雄狂狼勇士勳章             等級: 200
Array(1142158, 150, 1, 3), //英雄的後裔               等級: 200
Array(1142246, 150, 1, 3), //特別課程畢業生           等級: 200
Array(1142340, 150, 1, 3), //精靈之王                 等級: 200
Array(1142345, 150, 1, 3), //復仇的化身               等級: 200
Array(1142379, 150, 1, 3), //怪盜幻影                 等級: 200
Array(1142403, 150, 1, 3), //真正的光之騎士           等級: 200
Array(1142483, 150, 1, 3), //命運的對抗者             等級: 200
Array(1142488, 150, 1, 3), //到達極意的人             等級: 200
Array(1142499, 50, 1, 3) //超級巨星★               等級: 200

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用嗎？…我可冰凍了各類#b奇特座椅或卷軸、裝備、新奇道具#k哦！");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (im.getHyPay(1) >= 5) {
            im.sendYesNo("神秘之冰E中有各類#b裝備、卷軸或稀有新奇的道具#k噢！\r\n你遇見我不容易哦 使用5幻幣就能進行一次抽獎哦\r\n含:絕版點裝/椅子/玩具/高級裝備/技能皮膚/傷害皮膚/等...\r\n是否要進行抽獎呢?");
        } else {
            im.sendOk("你沒有5幻幣不能進行抽獎喲!!!\r\n好東西等你拿:(絕版點裝/椅子/玩具/高級裝備/技能皮膚/傷害皮膚/等...)");
            im.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 700);
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
            item = im.gainGachaponItem(itemId, quantity, "神秘之冰E", notice);
            if (item != -1) {
                im.addHyPay(5);
                im.gainItem(2431885, -1);
                im.sendOk("你獲得了 #b#t" + item + "##k " + quantity + "個。");
            } else {
                im.sendOk("你確實有5幻幣嗎？如果是，請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的運氣可真差，什麼都沒有拿到。\r\n(獲得了安慰獎：星星 100個。)");
            im.addHyPay(5);
            im.gainItem(4001839, 100);
            im.gainItem(2431885, -1);
            im.safeDispose();
        }
    }
}