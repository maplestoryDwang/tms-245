var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花樣音符
var status = -1;
var itemList = Array(
        Array(1032041, 500, 1, 1), //楓葉型耳環
        Array(1032042, 500, 1, 1), //楓葉型耳環
        Array(1032047, 500, 1, 1), //可樂耳環
        Array(1032055, 500, 1, 1), //工作人員C的舊收信機
        Array(1032056, 500, 1, 1), //工作人員C的舊收信機
        Array(1032057, 500, 1, 1), //工作人員C的舊收信機
        Array(1032058, 500, 1, 1), //工作人員C鈦質收信機
//-------帽子-------

        Array(1002393, 300, 1, 1), //海盜頭巾(粉)
        Array(1002394, 300, 1, 1), //海盜頭巾(灰)
        Array(1002619, 300, 1, 1), //兵長頭巾
        Array(1002622, 300, 1, 1), //水兵帽
        Array(1002677, 50, 1, 1), //玩具匠人帽
        Array(1002699, 50, 1, 1), //南瓜帽子
        Array(1002773, 150, 1, 1), //金龍頭盔
        Array(1002776, 120, 1, 1), //永恆冠軍盔
        Array(1002777, 120, 1, 1), //永恆玄妙帽
        Array(1002778, 120, 1, 1), //永恆霓翎帽
        Array(1002779, 120, 1, 1), //永恆迷蹤帽
        Array(1002780, 120, 1, 1), //永恆海王星
        Array(1002790, 120, 1, 1), //重生冠軍盔
        Array(1002791, 120, 1, 1), //重生玄妙帽
        Array(1002792, 120, 1, 1), //重生霓翎帽
        Array(1002793, 120, 1, 1), //重生迷蹤帽
        Array(1002794, 120, 1, 1), //重生海王星
//------披風------
        Array(1102048, 100, 1, 1), //公爵披風
        Array(1102140, 100, 1, 1), //卡帕萊特披風
        Array(1102147, 220, 1, 1), //玩具匠人披風
        Array(1102172, 30, 1, 1), //永恆不滅披風
        Array(1102174, 400, 1, 1), //工作人員披風
        Array(1102168, 400, 1, 1), //楓葉披風
//------手套------

        Array(1082144, 300, 1, 1), //幻光手套(紅)
        Array(1082145, 100, 1, 1), //工地手套(黃)
        Array(1082146, 100, 1, 1), //工地手套(紅)
        Array(1082147, 100, 1, 1), //工地手套(藍)
        Array(1082148, 100, 1, 1), //工地手套(紫)
        Array(1082149, 100, 1, 1), //工地手套(褐)
        Array(1082150, 100, 1, 1), //工地手套(灰)
        Array(1082151, 350, 1, 0), //幻魔手套(綠)
        Array(1082159, 300, 1, 0), //藍色條紋手套
        Array(1082160, 300, 1, 0), //綠色條紋手套
        Array(1082178, 300, 1, 0), //馬紹爾手套(桃)
        Array(1082179, 300, 1, 0), //馬紹爾手套(黃)
        Array(1082234, 120, 1, 1), //永恆定邊手套
        Array(1082235, 120, 1, 1), //永恆逍遙手套
        Array(1082236, 120, 1, 1), //永恆白雲手套
        Array(1082237, 120, 1, 1), //永恆探雲手套
        Array(1082238, 120, 1, 1), //永恆撫浪手套
        Array(1082239, 120, 1, 1), //重生定邊手套
        Array(1082240, 120, 1, 1), //重生逍遙手套
        Array(1082241, 120, 1, 1), //重生白雲手套
        Array(1082242, 120, 1, 1), //重生探雲手套
        Array(1082243, 120, 1, 1), //重生撫浪手套
//-------武器------
        Array(1302016, 300, 1, 1), //黃色雨傘
        Array(1302017, 300, 1, 1), //藍色雨傘
        Array(1302018, 300, 1, 1), //湯勺
        Array(1302019, 300, 1, 1), //無名劍
        Array(1302020, 300, 1, 1), //楓葉戰劍
        Array(1302021, 300, 1, 1), //橡皮鎯頭
        Array(1302022, 300, 1, 1), //竹刀
        Array(1302023, 300, 1, 1), //六脈神劍
        Array(1302024, 300, 1, 1), //廢報紙卷
        Array(1302025, 300, 1, 1), //紅雨傘
        Array(1302026, 300, 1, 1), //黑雨傘
        Array(1302027, 300, 1, 1), //綠雨傘
        Array(1302028, 300, 1, 1), //紫雨傘
        Array(1302029, 300, 1, 1), //褐雨傘
        Array(1302030, 300, 1, 1), //楓葉劍
        Array(1302031, 300, 1, 1), //七星劍
        Array(1302032, 300, 1, 1), //烈焰之劍
        Array(1302035, 300, 1, 1), //楓葉旗
        Array(1302036, 300, 1, 1), //楓葉旗
        Array(1302042, 300, 1, 1), //湯勺
        Array(1302043, 300, 1, 1), //戰劍
        Array(1302044, 300, 1, 1), //樹靈之劍
        Array(1302045, 300, 1, 1), //奇型刀
        Array(1302049, 300, 1, 1), //光線鞭子
        Array(1302050, 300, 1, 1), //戰劍
        Array(1302051, 300, 1, 1), //樹靈之劍
        Array(1302052, 300, 1, 1), //奇型刀
        Array(1302053, 300, 1, 1), //奇型刀
        Array(1302054, 300, 1, 1), //湯勺
        Array(1302056, 300, 1, 1), //一刀兩斷
        Array(1302058, 300, 1, 1), //楓之谷傘
        Array(1302059, 300, 1, 1), //狂龍閃電劍
        Array(1302060, 300, 1, 1), //戰劍
        Array(1302061, 300, 1, 1), //蔓籐鞭子
        Array(1302063, 300, 1, 1), //燃燒的火焰刀
        Array(1302064, 300, 1, 1), //楓葉突擊劍
        Array(1302066, 300, 1, 1), //楓葉3年旗
        Array(1302067, 300, 1, 1), //楓葉慶典旗
        Array(1302068, 300, 1, 1), //薄光刃
        Array(1302071, 300, 1, 1), //粉色花邊游泳圈
        Array(1302077, 300, 1, 0), //新手劍士之劍
        Array(1302080, 300, 1, 1) //七彩霓虹燈泡
        );

var itemList2 = Array(
        Array(1302081, 120, 1, 1), //永恆破甲劍
        Array(1302084, 240, 1, 1), //火柴
        Array(1302085, 240, 1, 1), //叉子
        Array(1302086, 100, 1, 1), //重生破甲劍
        Array(1302087, 300, 1, 1), //火炬
        Array(1302104, 300, 1, 1), //魷魚劍
        Array(1302105, 100, 1, 0), //聖誕六翼天使武器(單手劍)
        Array(1312032, 300, 1, 1), //楓葉破擊斧
        Array(1312033, 300, 1, 1), //楓葉3年旗
        Array(1312034, 300, 1, 1), //粉色花邊游泳圈
        Array(1312037, 100, 1, 1), //永恆斷蚺斧
        Array(1312038, 100, 1, 1), //重生斷蚺斧
        Array(1312039, 100, 1, 1), //聖誕六翼天使武器(單手斧)
        Array(1322005, 300, 1, 1), //棍棒
        Array(1322006, 300, 1, 1), //鋼管
        Array(1322007, 300, 1, 1), //皮製手提包
        Array(1322008, 300, 1, 1), //007提包
        Array(1322009, 100, 1, 1), //馬桶吸
        Array(1322010, 300, 1, 1), //方形鐵鏟
        Array(1322011, 300, 1, 1), //三角鐵鏟
        Array(1322012, 100, 1, 1), //紅色磚頭
        Array(1322021, 300, 1, 1), //黑游泳圈
        Array(1322051, 300, 1, 1), //七夕
        Array(1322052, 300, 1, 1), //狂龍地錘
        Array(1322054, 300, 1, 1), //楓葉地震錘
        Array(1322055, 300, 1, 1), //楓葉3年旗
        Array(1322056, 300, 1, 1), //粉色花邊游泳圈
        Array(1322060, 100, 1, 1), //永恆驚破天
        Array(1322061, 100, 1, 1), //重生驚破天
        Array(1322065, 100, 1, 1), //聖誕六翼天使武器(單手棍)
        Array(1322071, 300, 1, 1), //採礦鐵鍬
        Array(1332000, 300, 1, 1), //三角刃
        Array(1332046, 300, 1, 1), //鳳凰刃
        Array(1332047, 300, 1, 1), //黑精靈拳刃
        Array(1332049, 300, 1, 1), //蟬翼龍牙破
        Array(1332050, 300, 1, 1), //半月龍鱗裂
        Array(1332051, 300, 1, 1), //黃金雙牙鉤
        Array(1332052, 300, 1, 1), //陰風碎魂刃
        Array(1332053, 300, 1, 1), //野外燒烤串
        Array(1332054, 300, 1, 1), //閃電飛刀
        Array(1332055, 300, 1, 1), //楓葉鎖魄鋏
        Array(1332056, 300, 1, 1), //楓葉追魂刺
        Array(1332057, 300, 1, 1), //楓葉3年旗
        Array(1332059, 300, 1, 1), //粉色花邊游泳圈
        Array(1332063, 300, 1, 1), //初級盜賊的短劍
        Array(1332066, 300, 1, 1), //新手刮鬍刀
        Array(1332073, 100, 1, 1), //永恆狂鯊鋸
        Array(1332074, 100, 1, 1), //永恆斷首刃
        Array(1332075, 100, 1, 1), //重生狂鯊鋸
        Array(1332076, 100, 1, 1), //重生斷首刃
        Array(1332081, 100, 1, 0), //聖誕六翼天使武器(短劍)
        Array(1372008, 300, 1, 0), //金屬短杖
        Array(1372030, 300, 1, 0), //天使之翼
        Array(1372031, 300, 1, 1), //聖賢短杖
        Array(1372032, 300, 1, 1), //佘太君龍杖
        Array(1372033, 300, 1, 1), //聖賢短杖
        Array(1372034, 300, 1, 0), //楓葉仙姬杖
        Array(1372035, 300, 1, 1), //火靈珠短杖
        Array(1372036, 300, 1, 1), //毒靈珠短杖
        Array(1372037, 300, 1, 1), //冰靈珠短杖
        Array(1372038, 300, 1, 1), //雷靈珠短杖
        Array(1372039, 100, 1, 1), //爆炎之杖
        Array(1372040, 100, 1, 1), //劇毒之杖
        Array(1372041, 100, 1, 1), //寒冰之杖
        Array(1372042, 100, 1, 1), //狂雷之杖
        Array(1372043, 300, 1, 0), //初級魔法師的杖
        Array(1372044, 100, 1, 1), //永恆蝶翼杖
        Array(1372045, 100, 1, 1), //重生蝶翼杖
        Array(1372046, 100, 1, 0), //聖誕六翼天使武器(短杖)
        Array(1382000, 300, 1, 0), //木製長杖
        Array(1382001, 300, 1, 0), //精靈長杖
        Array(1382002, 300, 1, 0), //法師長杖
        Array(1382003, 300, 1, 0), //藍寶石長杖
        Array(1382012, 300, 1, 0), //楓葉杖
        Array(1382013, 300, 1, 0), //烈焰之杖
        Array(1382014, 300, 1, 0), //孫家之杖
        Array(1382015, 50, 1, 1), //毒蘑菇
        Array(1382016, 50, 1, 1), //香菇
        Array(1382042, 300, 1, 0), //粉色花邊游泳圈
        Array(1402014, 50, 1, 1), //溫度計
        Array(1402015, 300, 1, 1), //亞歷山大之劍
        Array(1402019, 300, 1, 1), //大刀
        Array(1402034, 300, 1, 1), //亞歷山大之劍
        Array(1402035, 300, 1, 1), //斬天刀
        Array(1402036, 300, 1, 1), //飛龍巨劍
        Array(1402037, 100, 1, 1), //龍背刃
        Array(1402039, 300, 1, 1), //楓葉梟首劍
        Array(1402040, 300, 1, 1), //楓葉3年旗
        Array(1402041, 300, 1, 1), //粉色花邊游泳圈
        Array(1402044, 300, 1, 1), //南瓜燈籠
        Array(1402046, 100, 1, 1), //永恆玄冥劍
        Array(1402047, 100, 1, 1), //重生玄冥劍
        Array(1402053, 100, 1, 1), //聖誕六翼天使武器(雙手劍)
        Array(1412000, 300, 1, 1), //雙手斧
        Array(1412024, 300, 1, 1), //雷電斧
        Array(1412025, 300, 1, 1), //大力神之斧
        Array(1412026, 300, 1, 1), //煉獄魔龍斧
        Array(1412027, 300, 1, 1), //楓葉乾坤輪
        Array(1412028, 300, 1, 1), //楓葉3年旗
        Array(1412029, 300, 1, 1), //粉色花邊游泳圈
        Array(1412033, 100, 1, 1) //永恆碎黿斧
        );

var itemList3 = Array(
        Array(1412034, 100, 1, 1), //重生碎黿斧
        Array(1412035, 100, 1, 1), //聖誕六翼天使武器(雙手斧)
        Array(1422004, 300, 1, 1), //板手
        Array(1422030, 100, 1, 1), //粉紅海豹抱枕
        Array(1422031, 100, 1, 1), //藍色海豹抱枕
        Array(1422032, 300, 1, 1), //楓葉3年旗
        Array(1422033, 300, 1, 1), //粉色花邊游泳圈
        Array(1422036, 300, 1, 1), //玩具匠人的錘子
        Array(1422037, 100, 1, 1), //永恆威震天
        Array(1422038, 100, 1, 1), //重生威震天
        Array(1432009, 300, 1, 1), //木精靈槍
        Array(1432015, 300, 1, 1), //紅色滑雪板
        Array(1432016, 300, 1, 1), //橙色滑雪板
        Array(1432017, 300, 1, 1), //綠色滑雪板
        Array(1432018, 300, 1, 1), //藍色滑雪板
        Array(1432030, 300, 1, 1), //紅蓮落神槍
        Array(1432034, 300, 1, 1), //銀龍槍
        Array(1432035, 300, 1, 1), //奧丁手戟
        Array(1432037, 300, 1, 1), //楓葉大將旗
        Array(1432038, 30, 1, 1), //盤龍七沖槍
        Array(1432039, 300, 1, 1), //釣魚竿
        Array(1432040, 300, 1, 1), //楓葉鑽天槍
        Array(1432041, 300, 1, 1), //楓葉3年旗
        Array(1432042, 300, 1, 1), //粉色花邊游泳圈
        Array(1432046, 50, 1, 0), //聖誕樹手杖
        Array(1432047, 20, 1, 1), //永恆顯聖槍
        Array(1432048, 300, 1, 0), //鏟子
        Array(1432049, 50, 1, 1), //重生顯聖槍
        Array(1432050, 50, 1, 0), //聖誕六翼天使武器(槍)
        Array(1442012, 300, 1, 1), //天空雪板
        Array(1442013, 300, 1, 1), //滄海雪板
        Array(1442014, 300, 1, 1), //銀雪板
        Array(1442015, 300, 1, 1), //黃金雪板
        Array(1442016, 300, 1, 1), //黑雪板
        Array(1442017, 300, 1, 1), //赤血雪板
        Array(1442018, 50, 1, 1), //凍凍魚
        Array(1442019, 300, 1, 1), //月神刀
        Array(1442026, 300, 1, 1), //紅色衝浪板
        Array(1442027, 300, 1, 1), //綠色衝浪板
        Array(1442028, 300, 1, 1), //藍色衝浪板
        Array(1442029, 300, 1, 1), //紫色衝浪板
        Array(1442030, 300, 1, 1), //楓之雪板
        Array(1442044, 300, 1, 1), //戰魂鬥殺戟
        Array(1442045, 300, 1, 1), //血龍魔導士斧
        Array(1442046, 300, 1, 1), //超級滑雪板
        Array(1442051, 300, 1, 1), //楓葉強襲斧
        Array(1442052, 300, 1, 1), //楓葉3年旗
        Array(1442053, 300, 1, 1), //粉色花邊游泳圈
        Array(1442054, 300, 1, 1), //紅色滑水板
        Array(1442055, 300, 1, 1), //綠色滑水板
        Array(1442056, 300, 1, 1), //藍色滑水板
        Array(1442057, 300, 1, 1), //紫色滑水板
        Array(1442063, 20, 1, 1), //永恆神光戟
        Array(1442065, 300, 1, 1), //藍色衝浪板
        Array(1442066, 300, 1, 1), //紅色衝浪板
        Array(1442067, 20, 1, 1), //重生神光戟
        Array(1442069, 300, 1, 1), //紅色衝浪板
        Array(1442070, 300, 1, 1), //綠色衝浪板
        Array(1442071, 50, 1, 1), //聖誕六翼天使武器(矛)
        Array(1452000, 300, 1, 0), //戰鬥弓
        Array(1452025, 300, 1, 1), //藍色梅杜斯
        Array(1452026, 300, 1, 1), //黑色梅杜斯
        Array(1452044, 300, 1, 1), //金龍振翅弓
        Array(1452045, 300, 1, 0), //楓葉HAPPY弓
        Array(1452057, 20, 1, 1), //永恆驚電弓
        Array(1452059, 20, 1, 1), //重生驚電弓
        Array(1452062, 50, 1, 0), //聖誕六翼天使武器(弓)
        Array(1522013, 300, 1, 1), //翻天弩 - \n只能使用專用卷軸
        Array(1522014, 300, 1, 1), //金龍弩槍 - (無描述)
        Array(1462050, 20, 1, 1), //永恆冥雷弩
        Array(1522015, 20, 1, 1), //永恆鮮花弩槍
        Array(1462051, 50, 1, 1), //重生冥雷弩
        Array(1472049, 300, 1, 1), //龍之拳
        Array(1472051, 300, 1, 1), //寒木升龍拳
        Array(1472052, 300, 1, 1), //碧水落龍拳
        Array(1472053, 300, 1, 1), //逆龍咆哮拳
        Array(1472068, 50, 1, 1), //永恆大悲賦
        Array(1472071, 50, 1, 1), //重生大悲賦
        Array(1472077, 50, 1, 0), //聖誕六翼天使武器(拳套)
        Array(1472500, 300, 1, 1), //黃銅拳套
        Array(1482000, 300, 1, 1), //指套
        Array(1482001, 300, 1, 1), //拳甲
        Array(1482002, 300, 1, 1), //格鬥指虎
        Array(1482003, 300, 1, 1), //三日月衝拳
        Array(1482004, 300, 1, 1), //全覆式拳甲
        Array(1482005, 300, 1, 1), //雙翼拳甲
        Array(1482006, 300, 1, 1), //刺棘拳甲
        Array(1482007, 300, 1, 1), //蛇吻
        Array(1482008, 300, 1, 1), //列翼拳甲
        Array(1482009, 300, 1, 0), //強襲拳甲
        Array(1482023, 20, 1, 1), //永恆孔雀翎
        Array(1482024, 20, 1, 1) //重生孔雀翎
        );

var itemList4 = Array(
        Array(1482025, 300, 1, 1), //粉色花邊游泳圈
        Array(1482029, 50, 1, 1), //聖誕六翼天使武器(指虎)
        Array(1482030, 300, 1, 1), //楓葉3年旗
        Array(1492000, 300, 1, 1), //火槍
        Array(1492001, 300, 1, 1), //單發手銃
        Array(1492002, 300, 1, 1), //大型手銃
        Array(1492003, 300, 1, 1), //突擊手銃
        Array(1492004, 300, 1, 1), //銀槍
        Array(1492005, 300, 1, 1), //紅傑克
        Array(1492006, 300, 1, 1), //黑鬱金香
        Array(1492007, 300, 1, 1), //金錢豹
        Array(1492008, 300, 1, 1), //速射手銃
        Array(1492026, 300, 1, 1), //粉色花邊游泳圈
        Array(1492030, 50, 1, 0), //聖誕六翼天使武器(手槍)
        Array(1492034, 300, 1, 0), //楓葉3年旗
        Array(1302073, 300, 1, 1), //新加坡國旗（初學者）
        Array(1302074, 300, 1, 1), //馬來西亞國旗（初學者）
        Array(1302075, 300, 1, 1), //新加坡國旗（單手劍）
        Array(1302076, 300, 1, 1), //馬來西亞國旗（單手劍）
        Array(1312035, 300, 1, 1), //新加坡國旗（單手斧）
        Array(1312036, 300, 1, 1), //馬來西亞國旗（單手斧）
        Array(1322057, 300, 1, 1), //新加坡國旗（單手杖）
        Array(1322058, 300, 1, 1), //馬來西亞國旗（單手杖）
        Array(1332060, 300, 1, 1), //新加坡國旗（短劍）
        Array(1332061, 300, 1, 1), //馬來西亞國旗（短劍）
        Array(1382043, 300, 1, 1), //新加坡國旗（長杖）
        Array(1382044, 300, 1, 1), //馬來西亞國旗（長杖）
        Array(1402042, 300, 1, 1), //新加坡國旗（雙手劍）
        Array(1412030, 300, 1, 1), //新加坡國旗（雙手斧）
        Array(1412031, 300, 1, 1), //馬來西亞國旗（雙手斧）
        Array(1422034, 300, 1, 1), //新加坡國旗（雙手杖）
        Array(1432043, 300, 1, 1), //新加坡國旗（槍）
        Array(1432044, 300, 1, 1), //馬來西亞國旗（槍）
        Array(1442058, 300, 1, 1), //新加坡國旗（矛）
        Array(1452049, 300, 1, 1), //新加坡國旗（弓）
        Array(1452050, 300, 1, 1), //馬來西亞國旗（弓）
        Array(1462044, 300, 1, 1), //新加坡國旗（弩）
        Array(1462045, 300, 1, 1), //馬來西亞國旗（弩）
        Array(1472059, 300, 1, 1), //新加坡國旗（指虎）
        Array(1472060, 300, 1, 1), //馬來西亞國旗（指虎）
//------藥水------
        Array(2000004, 500, 20, 0), //特殊藥水
        Array(2000005, 500, 20, 0), //超級藥水
        Array(1492047, 100, 1, 1), //幽暗鴉之銃    
        Array(2000005, 500, 30, 0), //超級藥水
        Array(2022245, 500, 5, 0), //心跳停止糖
        Array(2049004, 200, 1, 1), //白醫卷軸10%
        Array(2049005, 100, 1, 1), //白醫卷軸20%
        Array(1382013, 200, 1, 1), //烈焰之杖
        Array(1382015, 100, 1, 1), //毒蘑菇
        Array(1382037, 140, 1, 1), //偃月之杖        
        Array(1472072, 140, 1, 1), //幽暗鴉之爪
        Array(1462053, 140, 1, 1), //幽暗鴉之瞳
        Array(1402049, 140, 1, 1), //幽暗鴉之翼
        Array(1332077, 140, 1, 1), //幽暗鴉之喙
        Array(1002894, 100, 1, 1), //粉色編織髮帶
        Array(1002895, 100, 1, 1), //紅色編織髮帶
        Array(1002896, 30, 1, 1), //紫色編織髮帶
        Array(1002897, 140, 1, 1), //橙色編織髮帶
        Array(1002898, 140, 1, 1), //綠色編織髮帶
        Array(1002899, 140, 1, 1), //黃色編織髮帶
        Array(1002900, 140, 1, 1), //藍色編織髮帶
        Array(1002914, 100, 1, 1), //蓋福克斯的帽子(力量)
        Array(1002915, 100, 1, 1), //蓋福克斯的帽子(敏捷)
        Array(1002916, 100, 1, 1), //蓋福克斯的帽子(智力)
        Array(1002917, 100, 1, 1), //蓋福克斯的帽子(幸運)
        Array(1132000, 200, 1, 1), //白色腰帶
        Array(1132001, 200, 1, 1), //黃色腰帶
        Array(1132002, 200, 1, 1), //藍色腰帶
        Array(1132003, 200, 1, 1), //紅色腰帶
        Array(1132004, 250, 1, 1), //黑賀腰帶
        Array(1132010, 200, 1, 1), //黃金豬豬腰帶
        Array(1132011, 100, 1, 1), //黃金豬豬腰帶
        Array(1132012, 100, 1, 1), //法老的腰帶
        Array(1132013, 100, 1, 1), //不滅的法老腰帶
        Array(1012011, 100, 1, 1), //聖誕鹿的鼻子
        Array(1012012, 100, 1, 1), //聖誕鹿的鼻子
        Array(1012013, 100, 1, 1), //聖誕鹿的鼻子
        Array(1012019, 100, 1, 1), //聖誕鹿的鼻子
        Array(1012020, 100, 1, 1), //聖誕鹿的鼻子
        Array(1012056, 100, 1, 1), //狗狗鼻
        Array(1012058, 100, 1, 1), //匹諾曹的鼻子
        Array(1012059, 100, 1, 1), //匹諾曹的鼻子
        Array(1012060, 100, 1, 1), //匹諾曹的鼻子
        Array(1012061, 100, 1, 1), //匹諾曹的鼻子
        Array(2101001, 100, 1, 1), //蝙蝠魔召喚
        Array(2100902, 100, 1, 1), //神秘召喚包
        Array(2101004, 100, 1, 1), //綠水靈王召喚
        Array(2040044, 500, 1, 1), //頭盔敏捷卷軸15%
        Array(2040100, 500, 1, 0), //臉部裝飾生命卷軸10%
        Array(2040105, 500, 1, 1), //臉部裝飾迴避率卷軸10%
        Array(2040106, 500, 1, 0), //臉部裝飾迴避率卷軸60%
        Array(2040108, 500, 1, 0), //臉部裝飾迴避率詛咒卷軸30%
        Array(2040109, 500, 1, 0), //臉部裝飾迴避率詛咒卷軸70%
        Array(2040200, 200, 1, 1), //眼部裝飾命中率卷軸10%
        Array(2040201, 200, 1, 1), //眼部裝飾命中率卷軸60%
        Array(2040203, 200, 1, 1), //眼部裝飾命中率詛咒卷軸30%
        Array(2040307, 200, 1, 0), //耳環敏捷卷軸30%
        Array(2040308, 500, 1, 0), //耳環防禦力詛咒卷軸70%
        Array(2040313, 100, 1, 1), //耳環智力卷軸65%
        Array(2040314, 200, 1, 1), //耳環智力卷軸15%
        Array(2040316, 100, 1, 0), //耳環敏捷卷軸100%
        Array(2040317, 100, 1, 0) //耳環敏捷卷軸60%
        );

var itemList5 = Array(
        Array(2040527, 400, 1, 0), //全身盔甲智力卷軸15%
        Array(2040528, 300, 1, 0), //全身盔甲幸運卷軸65%
        Array(2040529, 400, 1, 0), //全身盔甲幸運卷軸15%
        Array(2040530, 500, 1, 0), //全身盔甲力量卷軸100%
        Array(2040541, 500, 1, 1), //全身盔甲力量卷軸15%
        Array(2040600, 500, 1, 0), //褲/裙防禦卷軸100%
        Array(2040727, 500, 1, 0), //鞋子防滑卷軸10%
        Array(2040800, 300, 1, 1), //手套敏捷卷軸100%
        Array(2040801, 400, 1, 1), //手套敏捷卷軸60%
        Array(2040802, 300, 1, 1), //手套敏捷卷軸10%
        Array(2040803, 100, 1, 1), //手套攻擊卷軸100%
        Array(2040804, 400, 1, 1), //手套攻擊卷軸60%
        Array(2041108, 300, 1, 1), //戒指敏捷卷軸10%
        Array(2041111, 300, 1, 1), //戒指運氣卷軸10%
        Array(2041201, 300, 1, 1), //項鏈運氣卷軸10%
        Array(2041314, 300, 1, 1), //腰帶智力卷軸70%
        Array(2041315, 300, 1, 1), //腰帶智力卷軸30%
        Array(2041316, 300, 1, 1), //腰帶敏捷卷軸70%
        Array(2041317, 300, 1, 1), //腰帶敏捷卷軸30%
        Array(2041318, 300, 1, 1), //腰帶運氣卷軸70%
        Array(2041319, 300, 1, 1), //腰帶運氣卷軸30%
        Array(2043000, 300, 1, 1), //單手劍攻擊卷軸100%
        Array(2043001, 300, 1, 1), //單手劍攻擊卷軸60%
        Array(2043002, 300, 1, 1), //單手劍攻擊卷軸10%
        Array(2043004, 300, 1, 1), //單手劍攻擊詛咒卷軸70%
        Array(2043005, 300, 1, 1), //單手劍攻擊詛咒卷軸30%
        Array(2043306, 400, 1, 1), //短劍攻擊卷軸65%
        Array(2043307, 400, 1, 1), //短劍攻擊卷軸15%
        Array(2043700, 400, 1, 1), //短杖魔力卷軸100%
        Array(2044218, 300, 1, 1), //單手棍命中卷軸65%
        Array(2044219, 300, 1, 1), //單手棍命中卷軸15%
        Array(2044300, 300, 1, 1), //槍攻擊卷軸100%
        Array(2044301, 300, 1, 1), //槍攻擊卷軸60%
        Array(2044302, 300, 1, 1), //槍攻擊卷軸10%
        Array(2044304, 300, 1, 1), //槍攻擊詛咒卷軸70%
        Array(2044305, 300, 1, 1), //槍攻擊詛咒卷軸30%
        Array(2044306, 300, 1, 1), //槍攻擊卷軸65%
        Array(2044802, 300, 1, 1), //拳甲攻擊卷軸10%
        Array(2044803, 300, 1, 1), //拳甲攻擊卷軸70%
        Array(2044804, 300, 1, 1), //拳甲攻擊卷軸30%
        Array(2044805, 300, 1, 1), //拳甲命中率卷軸100%
        Array(2044806, 300, 1, 1), //拳甲命中率卷軸70%
        Array(2044807, 300, 1, 1), //拳甲命中率卷軸60%
        Array(2044904, 300, 1, 1), //火槍攻擊卷軸30%
        Array(2044906, 300, 1, 1), //火槍攻擊卷軸65%
        Array(2044907, 300, 1, 1), //火槍攻擊卷軸15%
        Array(2049100, 300, 1, 1), //混沌卷軸60%
        Array(2049200, 500, 1, 1), //配飾力量卷軸70%
        Array(2049201, 500, 1, 1), //配飾力量卷軸30%
        Array(2049202, 500, 1, 1), //配飾敏捷卷軸70%
        Array(2049203, 500, 1, 1), //配飾敏捷卷軸30%
        Array(2049204, 500, 1, 1), //配飾智力卷軸70%
        Array(2049205, 500, 1, 1), //配飾智力卷軸30%
        Array(2049206, 500, 1, 1), //配飾幸運卷軸70%
        Array(2049207, 500, 1, 1), //配飾幸運卷軸30%
        Array(2049208, 500, 1, 1), //配飾HP卷軸70%
        Array(2049209, 500, 1, 1), //配飾HP卷軸30%
        Array(2049210, 500, 1, 1), //配飾MP卷軸70%
        Array(2049211, 500, 1, 1), //配飾MP卷軸30%
        Array(2101001, 500, 1, 1), //蝙蝠魔召喚
        Array(2100902, 500, 1, 1), //神秘召喚包
        Array(2101004, 500, 1, 1), //綠水靈王召喚
        Array(1012011, 500, 1, 1), //聖誕鹿的鼻子
        Array(1012012, 500, 1, 1), //聖誕鹿的鼻子
        Array(1012013, 500, 1, 1), //聖誕鹿的鼻子
        Array(1012018, 500, 1, 1), //聖誕鹿的鼻子
        Array(1012019, 500, 1, 1), //聖誕鹿的鼻子
        Array(1012020, 500, 1, 1), //聖誕鹿的鼻子
        Array(1012056, 500, 1, 1), //狗狗鼻
        Array(1012058, 500, 1, 1), //匹諾曹的鼻子
        Array(1012061, 500, 1, 1), //匹諾曹的鼻子
        Array(1032026, 100, 1, 1), //黃水晶耳環
        Array(1032027, 100, 1, 1), //黑水晶耳環
        Array(1032028, 100, 1, 1), //紅水晶耳環
        Array(1032030, 200, 1, 1), //勇氣耳環
        Array(1032031, 200, 1, 1), //永恆金盾墜
        Array(1032032, 500, 1, 1), //秋葉耳環
        Array(1032035, 500, 1, 1), //楓葉耳環
        Array(1032040, 500, 1, 1), //楓葉型耳環,800,1,0), //初
        Array(1032041, 500, 1, 1), //楓葉型耳環,800,1,0), //慶
        Array(1032042, 500, 1, 1), //楓葉型耳環,800,1,0), //盛
        Array(1032055, 500, 1, 1), //工作人員C的舊收信機
        Array(1032056, 500, 1, 1), //工作人員C的舊收信機
        Array(1032057, 500, 1, 0), //工作人員C的舊收信機
        Array(1032058, 500, 1, 0), //工作人員C鈦質收信機
        Array(1122001, 500, 1, 1), //綠色蝶形領結
        Array(1122002, 500, 1, 1), //紅色蝶形領結
        Array(1122003, 500, 1, 1), //黃色蝶形領結
        Array(1122004, 500, 1, 1), //粉紅蝶形領結
        Array(1122005, 500, 1, 1), //黑色蝶形領結
        Array(1122006, 500, 1, 1), //藍色蝶形領結
        Array(1122015, 500, 1, 1), //楓葉圍巾
        Array(1122058, 100, 1, 1), //休彼德蔓的混沌項鏈
        Array(1132000, 500, 1, 1), //白色腰帶
        Array(1132001, 500, 1, 1), //黃色腰帶
        Array(1132002, 500, 1, 1), //藍色腰帶
        Array(1132003, 500, 1, 1), //紅色腰帶
        Array(1132004, 450, 1, 1), //黑賀腰帶
        Array(1132010, 500, 1, 1), //黃金豬豬腰帶
        Array(1132011, 500, 1, 1), //黃金豬豬腰帶
        Array(1132012, 500, 1, 1), //法老的腰帶
        Array(1132013, 500, 1, 1), //不滅的法老腰帶
        Array(1122074, 500, 1, 1), //楓葉吊墜
        Array(1122075, 500, 1, 1), //黃金楓葉魔法吊墜
        Array(1002390, 500, 1, 1), //真殘暴炎魔頭盔
        Array(1002391, 500, 1, 0) //海盜頭巾(綠)
        );

var itemList6 = Array(
//-----椅子-----
        Array(3010013, 250, 1, 1), //悠長假期
        Array(3010014, 250, 1, 1), //月亮彎
        Array(3010018, 250, 1, 1), //椰子樹沙灘椅
        Array(3010019, 250, 1, 1), //壽司椅
        Array(3010021, 250, 1, 1), //暖暖桌
        Array(3010025, 250, 1, 1), //楓葉紀念凳
        Array(3010028, 250, 1, 1), //海盜的俘虜
        Array(3010029, 250, 1, 1), //藍環凳
        Array(3010030, 250, 1, 1), //黑環凳
        Array(3010031, 250, 1, 1), //紅環凳
        Array(3010032, 250, 1, 1), //黃環凳
        Array(3010033, 250, 1, 1), //綠環凳
        Array(3010037, 250, 1, 1), //豬豬凳
        Array(3010044, 100, 1, 1), //同一紅傘下
        Array(3012001, 150, 1, 1), //篝火
        Array(3012002, 150, 1, 1), //浴桶
        Array(3010073, 150, 1, 1), //PB克繽
        Array(3012003, 150, 1, 1), //愛心椅子
        Array(3010012, 150, 1, 1), //劍士 寶座
        Array(3010025, 50, 1, 1), //楓葉紀念凳
        Array(3010037, 150, 1, 1), //豬豬凳
        Array(3010038, 150, 1, 1), //愛心椅子
        Array(3010040, 50, 1, 1), //蝙蝠椅
        Array(3010041, 150, 1, 1), //骷髏王座
        Array(3010043, 150, 1, 1), //魔女的飛掃把
        Array(3010044, 150, 1, 1), //同一紅傘下
        Array(3010045, 150, 1, 1), //寒冰椅子
        Array(3010046, 150, 1, 1), //紅龍椅
        Array(3010047, 100, 1, 1), //藍龍椅
        Array(3010048, 100, 1, 1), //聖誕樹椅子
        Array(3010049, 100, 1, 1), //雪房子
        Array(3010050, 100, 1, 1), //公主凳
        Array(3010057, 100, 1, 1), //血色玫瑰
        Array(3010058, 100, 1, 1), //世界末日
        Array(3010068, 100, 1, 1), //露水椅子
        Array(3010070, 150, 1, 1), //巨無霸皮卡啾
        Array(3010071, 125, 1, 1), //神獸椅
        Array(3010077, 125, 1, 1), //貓頭鷹椅子
        Array(3010085, 125, 1, 1), //鬼娃娃椅子
        Array(3010096, 125, 1, 1), //恐龍化石寶座
        Array(3010095, 125, 1, 1), //石頭人座椅
        Array(3010094, 115, 1, 1), //漂漂豬椅子
        Array(3010098, 125, 1, 1), //電視宅人
        Array(3010106, 125, 1, 1), //雪狼戰椅
        Array(3010112, 125, 1, 1), //情書櫃子
        Array(3010117, 125, 1, 1), //魔法書椅子
        Array(3010119, 125, 1, 1), //羊羊椅子
        Array(3010120, 125, 1, 1), //彩蛋籃子
        Array(3010123, 125, 1, 1), //夏日花朵
        Array(3010124, 125, 1, 1), //都納斯噴氣椅子
        Array(3010125, 125, 1, 1), //尼貝隆戰艦椅
        Array(3010127, 125, 1, 1), //殘暴炎魔寶座
        Array(3012001, 125, 1, 0), //篝火
        Array(3010136, 150, 1, 1), //6週年怪物王座
        Array(3010155, 150 * 2, 1, 1), //影武者的貓頭鷹椅子
        Array(3010144, 150 * 2, 1, 1), //七夕椅子
        Array(3010149, 150 * 2, 1, 1), //貓咪風扇椅
        Array(3010129, 150 * 2, 1, 1), //酋長寶座
        Array(3010131, 150 * 2, 1, 1), //貪吃熊貓椅
        Array(3010132, 150 * 2, 1, 1), //撒嬌喵咪椅
        Array(3010133, 150 * 2, 1, 1), //帳篷椅
        Array(3010163, 150 * 2, 1, 1), //滿月椅
// ------ 特殊獎品 --------------
//Array(4000385, 900, 1, 1), //心燈
//Array(4001465, 800, 20, 1), //愛心寶石
//Array(4110000, 700, 1, 1), //迷你抽獎用
// ------ 086添加 ------
        Array(1112915, 100, 1, 1), //藍調戒指
        Array(1102723, 30, 1, 1), //光明天使羽翼
        Array(1102724, 30, 1, 1), //黑暗天使羽翼
        Array(2041122, 200, 1, 1), //歡樂卷軸
        Array(2041123, 200, 1, 1), //歡樂卷軸
        Array(2041124, 500, 1, 1), //歡樂卷軸
        Array(2041131, 500, 1, 1), //歡樂卷軸
        Array(2430182, 300, 1, 1), //特別美容券
        Array(2049401, 500, 1, 1), //潛能附加卷軸
        Array(2049301, 500, 1, 1), //裝備強化卷軸
        Array(1102730, 100, 1, 1), //濃翅膀
        Array(1012172, 100, 1, 1), //娃娃臉
        Array(1402014, 100, 1, 1), //溫度計
        Array(4000313, 200, 1, 1), //黃金葉子
        Array(2431944, 50, 1, 1), //140
        Array(2431945, 50, 1, 1), //140
        Array(3015002, 50, 1, 1), //七彩摩天輪
        Array(1003422, 80, 1, 1), //石榴石渡鴉面具
//Array(3015002, 80, 1, 1), //黃金葉子
        Array(1003422, 100, 1, 1) //秘密能手冊

        );


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用嗎？…我的肚子裡有各類#b奇特座椅或卷軸、裝備、新奇道具#k哦！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(5220040)) {
            cm.sendYesNo("            #e" + tz15 + "#r『高級轉蛋機』 " + tz15 + "\r\n#k使用「#b1個#t5220040##k」就可以交換. 遊戲商城中的「其他」－「遊戲」區裡有噢。\r\n#d比普通轉蛋機的幾率要高200% #k現在要玩轉蛋機麼?\r\n———————————————————————— \r\n");
        } else {
            cm.sendOk("            #e" + tz15 + "#r『高級轉蛋機』 " + tz15 + "\r\n#k使用「#b1個#t5220040##k」就可以交換. 遊戲商城中的「其他」－「遊戲」區裡有噢。\r\n#d比普通轉蛋機的幾率要高200% #k現在要玩轉蛋機麼?\r\n———————————————————————— \r\n你背包裡好像沒有#b#t5220040##k哦!請進商城或通過其他活動獲得!");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 800);
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
        for (var i = 0; i < itemList4.length; i++) {
            if (itemList4[i][1] >= chance) {
                finalitem.push(itemList4[i]);
            }
        }
        for (var i = 0; i < itemList5.length; i++) {
            if (itemList5[i][1] >= chance) {
                finalitem.push(itemList5[i]);
            }
        }
        for (var i = 0; i < itemList6.length; i++) {
            if (itemList6[i][1] >= chance) {
                finalitem.push(itemList6[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (cm.haveItem(5220040) && cm.canHold()) {
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "高級轉蛋機");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.gainItem(5220040, -1);
                cm.sendOk("你獲得了 #b#t" + itemId + "##k " + quantity + "個。");
            } else {
                cm.sendOk("你確實有#b#t5220040##k嗎？如果是，請你確認在背包的裝備，消耗，其他窗口中是否有一格以上的空間。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("#r(獲得了安慰獎：星星 20 個。)\r\n今天的運氣可真差，什麼都沒有拿到。");
            cm.gainItem(5220040, -1);
            cm.gainItem(4001839, 20);
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}




















/*function start() {
 status = -1;
 cm.sendSimple("楓之谷轉蛋機中有各類#b裝備、卷軸或稀有新奇的道具#k噢！使用「#b#t5220040##k」就可以交換. 遊戲商城中的「其他」－「遊戲」區裡有噢。 假如不買轉蛋券的話，是不可以使用我的。現在要玩轉蛋機麼？\r\n你可以選擇以下轉蛋機哦\r\n#L0##p9330112#\r\n#L1##p9330113#\r\n#L2##p9330114#\r\n#L3##p9330115#\r\n#L4##p9330116#\r\n#L6##p9330118#\r\n");
 }
 
 
 function action(mode, type, selection) {
 
 if (mode == 1) {
 status++;
 } else {
 if (status == 0) {
 cm.sendOk("不想使用嗎？…我的肚子裡有各類#b奇特座椅或卷軸、裝備、新奇道具#k哦！");
 cm.dispose();
 }
 status--;
 }
 
 if (status == 0) {
 //cm.sendOk("在楓之谷生活還愉快嗎？");
 //cm.dispose();
 cm.dispose();
 cm.openNpc(9330112+selection,null);
 return;
 
 
 }
 cm.dispose();
 }*/
