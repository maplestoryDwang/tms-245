var mapId = 889100001;
var index = 0;
var itemList=Array(
    Array(4310150, 250), //商品紀念幣
    Array(2049752, 350), //S級潛能卷軸 30%
    Array(4310150, 450), //商品紀念幣
    Array(2433646, 300),  //星星100個交換券
    Array(2022956, 500),  //火紅玫瑰
    Array(5062009, 200),  //終極方塊
    Array(5062010, 600),  //終極方塊
    Array(1112663, 240),  //白天使的祝福
    Array(2430471, 550),  //終極方塊
    Array(2430471, 550),  //終極方塊
    Array(2430471, 550),  //終極方塊
    Array(2340000, 550),  //祝福卷軸
    Array(5072000, 550),  //高質地喇叭
    Array(1112586, 210),  //白天使的祝福
    Array(5073000, 550),  //心臟高級喇叭
    Array(5074000, 550),  //白骨高級喇叭
    Array(2049135, 300),  //驚人正義混沌卷軸 20%
    Array(2049122, 100),  //正向混沌卷軸
    Array(5010110, 50),  //倫娜之庇護
    Array(1112191, 100), //蜜蜂名片戒指
    Array(1115004, 100), //蜜蜂聊天戒指
    Array(1112190, 100), //愛吃胡蘿蔔兔名片戒指
    Array(1115003, 100), //愛吃胡蘿蔔兔聊天戒指
    Array(1112959, 100), //蝶戀花特效戒指
    Array(1112181, 100), //雲朵羊咩咩名片戒指
    Array(1112294, 100), //雲朵羊咩咩聊天戒指
    Array(1112183, 100), //羊咩咩名片戒指
    Array(1112296, 100), //羊咩咩聊天戒指
    Array(5010044, 100), //幻影殘像
    Array(4080000, 100), //綠水靈/蘑菇五目石
    Array(4080006, 100), //吹泡泡雙魚/玩具粉熊五子棋套
    Array(4080007, 100), //吹泡泡雙魚/綠蜘蛛五子棋套
    Array(4080008, 100), //玩具粉熊/綠蜘蛛五子棋套
    Array(4080009, 100), //玩具熊貓/吹泡泡雙魚五子棋套
    Array(4080010, 100), //玩具熊貓/玩具粉熊五子棋套
    Array(4080011, 100), //玩具熊貓/綠蜘蛛五子棋套4080100
    Array(4080100, 100), //記憶大考驗
    Array(1004757, 100), //記憶大考驗
    Array(1004665, 100), //記憶大考驗
    Array(1004706, 100), //記憶大考驗
    Array(1004580, 100), //記憶大考驗
    Array(1004597, 100), //記憶大考驗
    Array(1004598, 100), //記憶大考驗
    Array(1004599, 100), //記憶大考驗
    Array(1004488, 100), //記憶大考驗
    Array(1004428, 100), //記憶大考驗
    Array(1052975, 100), //記憶大考驗
    Array(1050414, 100), //記憶大考驗
    Array(1050418, 100), //記憶大考驗
    Array(1042037, 100), //記憶大考驗
    Array(3012021, 100), //彩虹雲朵椅子
    Array(3012027, 10), //羊羊熱氣球椅子
    Array(3012007, 100), //石獅椅子
    Array(3012008, 100), //稻荷神社椅子
    Array(3012030, 100), //和你在一起椅子
    Array(3012001, 100), //篝火
    Array(3010736, 100), //萌萌育嬰搖籃
    Array(3012022, 100), //壽司小火車椅子
    Array(3012023, 100), //mPhone椅子
    Array(3012010, 100), //巧克力蛋糕戀人
    Array(3012011, 100), //我愛巧克力火鍋
    Array(3012024, 100), //沙灘排球椅子
    Array(3012025, 10), //小雞彈簧床椅子
    Array(3012026, 10), //旋轉花茶杯情侶椅子
    Array(1202023, 100), // 真·喬圖騰 // 聚集了喬的強烈靈魂的強力圖騰。
    Array(1202024, 300),  // 金·喬圖騰 // 根據喬的樣子所做的黃金圖騰。
    Array(1202025, 300),  // 銀·喬圖騰 // 根據喬的樣子所做的銀圖騰。
    Array(1202026, 300),  // 木·喬圖騰 // 根據喬的樣子所做的木圖騰。
    Array(1202027, 100),  // 真·海麗蜜圖騰 // 聚集了海麗蜜的強烈靈魂的強力圖騰。
    Array(1202028, 300),  // 金·海麗蜜圖騰 // 根據海麗蜜的樣子所做的黃金圖騰。
    Array(1202029, 300),  // 銀·海麗蜜圖騰 // 根據海麗蜜的樣子所做的銀圖騰。
    Array(1202030, 300),  // 木·海麗蜜圖騰 // 根據海麗蜜的樣子所做的木圖騰。
    Array(1202031, 100),  // 真·小龍圖騰 // 聚集了小龍的強烈靈魂的強力圖騰。
    Array(1202032, 300),  // 金·小龍圖騰 // 根據小龍的樣子所做的黃金圖騰。
    Array(1202033, 300),  // 銀·小龍圖騰 // 根據小龍的樣子所做的銀圖騰。
    Array(1202034, 300),  // 木·小龍圖騰 // 根據小龍的樣子所做的木圖騰。
    Array(1202035, 100),  // 真·李卡司圖騰 // 聚集了李卡司的強烈靈魂的強力圖騰。
    Array(1202036, 300),  // 金·李卡司圖騰 // 根據李卡司的樣子所做的黃金圖騰。
    Array(1202037, 300),  // 銀·李卡司圖騰 // 根據李卡司的樣子所做的銀圖騰。
    Array(1202038, 300),  // 木·李卡司圖騰 // 根據李卡司的樣子所做的木圖騰。
    Array(1202039, 300),  // 黑·酷咪圖騰 // 根據穿著黑色運動服的酷咪導師的樣子所做的圖騰。
    Array(1202040, 300),  // 粉·酷咪圖騰 // 根據穿著粉紅色運動服的酷咪導師的樣子所做的圖騰。
    Array(1202041, 300),  // 白·酷咪圖騰 // 根據穿著白色運動服的酷咪導師的樣子所做的圖騰。
    Array(1202042, 300),  // 紅·酷咪圖騰 // 根據穿著紅色運動服的酷咪導師的樣子所做的圖騰。
    Array(1202083, 100),  // 真·伊昆圖騰 // (無描述)
    Array(1202084, 300),  // 金·伊昆圖騰 // (無描述)
    Array(1202085, 300),  // 銀·伊昆圖騰 // (無描述)
    Array(1202086, 300),  // 銅·伊昆圖騰 // (無描述)
    Array(3010895, 100), // 阿卡伊農童話書椅子, 100), // 感覺和阿卡伊農的關係好像變得親近一些的椅子。每10秒HP恢復100，MP恢復50。
    Array(3010896, 100), // 我的女皇椅子, 100), // 可以感覺到女王的火熱人氣的椅子。每10秒HP恢復100，MP恢復50。
    Array(3010897, 100), // 生日快樂，惡魔, 100), // 坐在椅子上的惡魔殺手的表情感覺很奇怪。每10秒HP恢復100，MP恢復50。
    Array(3010898, 100), // 迷你神獸椅子, 100), // 坐在迷你神獸椅子上時，每10秒HP恢復50，MP恢復50。
    Array(3010899, 100), // 擺鐘椅子, 100), // 坐在鐘擺椅子上時，每10秒HP恢復50，MP恢復50。
    Array(3010900, 100), // 寶石楓葉椅子, 100), // 用寶石做成的閃亮楓葉椅子。坐下後每10秒恢復HP 40, MP 20。
    Array(3010901, 100), // 熱情的紅色藥水椅子, 100), // 和其他藥水椅子相比，可以更快地恢復HP的紅色藥水椅子。每10秒HP恢復110，MP恢復50。
    Array(3010902, 100), // 新鮮的藍色藥水椅子, 100), // 和其他藥水椅子相比，可以更快地恢復MP的藍色藥水椅子。每10秒HP恢復100，MP恢復60。
    Array(3010903, 100), // 兔子椅子, 100), // 坐在上面，每10秒HP恢復100，MP恢復50的兔子椅子。
    Array(3010904, 100), // 椰子樹沙灘椅, 100), // 放在納希沙漠涼爽的椰子樹下的沙灘椅。坐在上面，每10秒HP恢復40，MP恢復20。
    Array(3010905, 50), // 柿子樹鞦韆, 100), // 吊掛在掛滿成熟柿子的柿子樹上的鞦韆。
    Array(3010906, 50), // 雲朵洗手間椅子, 100), // 裝修豪華的洗手間。裡面一切應有盡有。每10秒HP恢復100，MP恢復50。
    Array(3010907, 50), // 公沙沙兔靠墊, 100), // 靠著可愛的公沙沙兔坐著，每10秒HP恢復60。
    Array(3010908, 50), // 海藍天鵝絨沙發, 100), // 奢華的海藍色天鵝絨沙發。坐在上面，每10秒HP恢復60。
    Array(3010909, 50), // 紅色設計師椅子, 100), // 採用明亮紅色的設計師椅子。坐在上面，每10秒HP恢復60。
    Array(3010910, 50), // 艾莉珍椅子, 100), // 可以成為可愛的少女艾莉珍的好朋友。每10秒HP恢復50，MP恢復50。
    Array(3010911, 100), // 紅帽月妙抱枕椅, 100), // 坐在抱枕椅上就可以看到戴著紅色帽子的可愛月妙的才藝。
    Array(3010912, 100), // 藍帽月妙抱枕椅, 100), // 坐在抱枕椅上就可以看到戴著藍色帽子的可愛月妙的才藝。
    Array(3010913, 100), // 扇子月妙抱枕椅, 100), // 坐在抱枕椅上就可以觀賞拿著扇子走繩索的月妙的才藝。
    Array(3010914, 100), // 太平蕭月妙抱枕椅, 100), // 坐在抱枕椅上就可以觀賞史出渾身力量演奏的月妙。
    Array(3010915, 100), // 惡靈附身的娃娃椅子, 100), // 惡靈附身的娃娃椅子。坐在上面，每10秒HP恢復50。
    Array(3010916, 100), // 粉紅沙灘遮陽傘, 100), // 讓人想起涼爽的大海的粉紅色沙灘遮陽傘。坐在上面，每10秒HP恢復60。
    Array(3010917, 100), // 紅色龍椅, 100), // 有嚴肅的火龍相伴的椅子。每10秒HP恢復50，MP恢復50。
    Array(3010918, 100), // 藍色龍椅, 100), // 有嚴苛的青龍相伴的椅子。每10秒HP恢復50，MP恢復50。
    Array(3010919, 100), // 精靈王座, 100), // 為精靈之王製作的椅子。每10秒HP恢復100，MP恢復50。
    Array(3010920, 100), // 水晶月亮, 100), // 怪盜幻影專用椅子，坐下去後每10秒都能恢復HP。
    Array(3010921, 100), // 彩蛋籃子, 100), // 籃子中塞滿五彩繽紛的彩蛋!\n每10秒鐘恢復HP40,MP40.
    Array(3010922, 100), // 悠長假期(紅色), 100), // 坐在上面可享受悠閒的紅色悠長假期,每10秒鐘恢復MP 20.
    Array(3010923, 100), // 10週年椅子, 100), // 為紀念楓之谷10週年而製作的巨無霸椅子。每10秒鐘，HP和MP各恢復50.
    Array(3010936, 10), // 青蛙跳樓機, 100), // 由中國玩家「小術」設計的可同時乘坐多人的青蛙跳樓機椅子。坐下時，每10秒中，可恢復HP，MP各500。
    Array(3010894, 10), // 一杯咖啡的悠閒, 100), // 享受一杯咖啡的濃郁的香味。坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010747, 10), // 和風紙鳶椅子, 100), // 充滿和風的紙鳶椅子。坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010748, 10), // 日式拉麵椅, 100), // 濃郁的日式傳統拉麵，香氣四溢。坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010750, 10), // 焦糖布丁椅子, 100), // 軟軟的焦糖布丁，香甜可口。坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010795, 10), // 森林中休息處(椅子), 100), // 可以在寧靜的森林中休息的椅子。坐上時，每10秒恢復HP、MP500。
    Array(3010794, 20), // 抖動的舌頭椅子, 100), // 抖動的舌頭椅子，坐在上面隨時可能被醜陋的怪物吃掉哦。坐上時，每10秒恢復HP、MP500。
    Array(3010799, 50), // 墳墓幽靈椅子, 100), // 坐在椅子上，將化身為遊走在墳墓中的幽靈。坐上時，每10秒恢復HP、MP500。
    Array(3010714, 20), // 堆王冠, 100), // 由5個不同顏色的王冠一層層堆積起來的椅子。坐上時，每10秒恢復HP、MP500。
    Array(3010732, 20), // 翅膀自行車椅子, 100), // 坐上時，每10秒恢復HP、MP500。
    Array(3012019, 10), // 愛琴海椅子, 100), // 由中國玩家「小術」設計的雙人椅子。在浪漫的愛情海，和喜歡的人一起坐在聖愛殿堂中，感受幸福與甜蜜。兩人靠近後坐下會出現愛琴海聖愛殿堂的浪漫特效。坐上時，每10秒恢復HP、MP500。
    Array(3010813, 100), // 愛情水晶球的回憶, 100), // 由中國玩家「小術」設計的椅子。裝滿了滿滿幸福甜蜜回憶的愛情水晶球。坐上時，每10秒恢復HP、MP500。
    Array(3012020, 100), // 紫籐花吊籃椅, 100), // 由中國楓之谷玩家「小術」設計的情侶椅子，兩個人坐一起時產生漂亮的背景效果，每5秒恢復HP/MP 500
    Array(3010820, 10), // 迷你玩具別墅椅子, 100), // 想休息的時候，就到我的別墅來。每10秒，HP恢復500，MP恢復500。
    Array(3010806, 10), // 桃櫻芳菲椅, 100), // 百花齊放，愜意悠悠。每10秒鐘恢復HP50、MP50。
    Array(3010780, 10), // 旋轉木馬, 100), // 承載著夢想的木馬，帶你駛向幸福的彼岸。坐上時，每10秒恢復HP、MP100。
    Array(3010779, 10), // 金馬祥雲轎, 100), // 由中國玩家「小術」設計。金馬祥雲轎，騰雲駕霧來報到。象徵馬年吉祥如意的椅子。坐上時，每10秒恢復HP、MP500。
    Array(3010781, 20), // 馬上有你, 100), // 和好朋友小馬馬坐在一起。坐上時，每10秒恢復HP、MP500。
    Array(3010788, 20), // 巨無霸年夜飯, 100), // 由中國玩家「小術」設計。農曆除夕，在鞭炮聲中圍座在一起，共同辭舊迎新一起享受美味的巨無霸團圓飯。坐上時，每秒恢復HP、MP各500。
    Array(3010783, 10), // 藍色邦尼屋, 100), // 歡迎來到邦尼快樂的家～每10秒HP恢復50，MP恢復50。
    Array(3010797, 100), // 新娘春節椅子, 100), // 和精靈遊俠新娘一起迎接春節的到來。每10秒HP恢復50，MP恢復50。
    Array(3010798, 100), // 焰火椅子, 100), // 兩邊有焰火綻放的高級椅子。可能稍微有點危險……每10秒HP恢復50，MP恢復50。
    Array(3010800, 100), // 小學生月妙拜年椅子, 100), // 感覺好像得給錢才行，但是不僅不扣減楓幣，還會每10秒HP恢復50，MP恢復50。
    Array(3010801, 100), // 學齡前月妙拜年椅子, 100), // 感覺好像得給錢才行，但是不僅不扣減楓幣，還會每10秒HP恢復50，MP恢復50。
    Array(3010802, 100), // 中學生月妙拜年椅子, 100), // 感覺好像得給錢才行，但是不僅不扣減楓幣，還會每10秒HP恢復50，MP恢復50。
    Array(3010803, 100), // 高3月妙拜年椅子, 100), // 感覺好像得給錢才行，但是不僅不扣減楓幣，還會每10秒HP恢復50，MP恢復50。
    Array(3010804, 100), // 軍人月妙拜年椅子, 100), // 到了一定的年紀，得接受軍人的拜年。每10秒HP恢復50，MP恢復50。
    Array(3010810, 100), // 火車旅行椅, 100), // 坐著火車去旅行吧！坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010811, 100), // 嫩芽椅, 100), // 可以感覺到春天綠色的氣息。坐在嫩芽上，感受春天的情趣吧。每10秒HP恢復50，MP恢復50。
    Array(3010812, 10), // 旋轉木馬椅, 100), // 快樂的遊樂園。坐在旋轉木馬上，度過快樂的時光。每10秒HP恢復50，MP恢復50。
    Array(3010814, 100), // 粉絲抱枕椅子, 100), // 粉絲抱枕椅子，坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010815, 100), // 單身部隊海報椅, 100), // 肉麻的炫耀只會讓我們變得更強。我們是無敵的單身部隊！\r\n#c每10秒HP/MP恢復50
    Array(3010835, 100), // 愛情水晶球記憶椅, 100), // 沉浸在甜蜜的愛情回憶中吧。每10秒HP恢復50，MP恢復50。\n中國楓之谷玩家[小術]設計的椅子。
    Array(3010844, 100), // 麻辣教室椅子, 100), // 我就是我，誰也不能阻攔我！坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010851, 10), // 夏日沁飲椅子, 100), // 炎炎夏日，只有它才能讓你清涼舒爽。坐下時，每10秒中，可恢復HP，MP各50。
    Array(3010852, 100), // 鮮花椅, 100), // 和春天盛開的美麗鮮花在一起。每10秒HP恢復50，MP恢復50。
    Array(3010854, 100), // 神秘怪物共聚一堂！, 100), // 揭開神秘面紗的怪物們和太古蘑菇一起慶祝11週年。每10秒HP恢復50，MP恢復50。
    Array(3010789, 100), // 爆竹聲聲, 100), // 爆竹聲聲迎新年！坐在上面的話，每10秒回復200點HP、200點MP
    Array(3010606, 100), // 未上色的名畫椅子, 100), // 這幅空的畫布，呼喚你為它塗上絢麗的色彩。坐在上面時，每10秒HP恢復10點，MP恢復10點。
    Array(3010608, 100), // 完美的名畫椅子, 100), // 天啊，看看這幅傑作！這線條和這色彩，如此炫目，如此令人驚歎！坐在上面時，每10秒HP恢復50點，MP恢復50點。
    Array(1072337, 100), // 喜洋洋拖鞋, 100), // (無描述)
    Array(1112254, 100), // 豪華珍珠聊天戒指, 100), // 由中國楓之谷玩家小術設計，在海底珍珠玲瓏光芒的環繞下輕鬆愉快的聊天吧。
    Array(1112143, 100), // 豪華珍珠名片戒指, 100), // 由中國楓之谷玩家小術設計，在海底珍珠玲瓏光芒的環繞下展示自己的暱稱吧。
    Array(1112118, 100), // 可樂名片戒指, 100), // 角色造型下面，以可口可樂顏色作為底色，以白色字體顯示角色名稱。
    Array(1112119, 100), // 可樂(Red) 名片戒指, 100), // 角色造型下面，以可口可樂顏色作為底色，以白色字體顯示角色名稱。
    Array(1112120, 100), // 可樂(White) 名片戒指, 100), // 角色造型下面，以可口可樂顏色作為底色，以紅色字體顯示角色名稱。
    Array(1112228, 100), // 可樂聊天戒指, 100), // 角色對話的時候，聊天窗會變成可口可樂樣子
    Array(1112229, 100), // 可樂(Red)聊天戒指, 100), // 角色對話的時候，聊天窗會變成類似可口可樂樣子
    Array(1112230, 100), // 可樂(White)聊天戒指, 100), // 角色對話的時候，聊天窗會變成類似可口可樂樣子
    Array(1002524, 100), // 可樂帽, 100), // (無描述)
    Array(1702533, 100), // 奶兔立拍得, 100), // 由中國玩家「小術」設計的奶兔立拍得。\n可以裝備在#c所有武器#上的武器。
    Array(1702020, 100), // 棒棒糖, 100), // 可裝備在#c/單手劍/單手斧/單手棍/短杖/長杖/短劍/魔法棒/的主武器#上。
    Array(1702459, 100), // 棉花糖武器, 100), // 攻擊時可以看到羊形態的棉花糖。可裝備在#c所有的主武器#上。
    Array(1702302, 100), // 杯具, 100), // 可裝備在#c除了/手炮/雙弩槍/以外的主武器#上。
    Array(1042285, 100), // 拼色點點T恤, 100), // (無描述)
    Array(1042204, 100), // 漢堡T恤, 100), // (無描述)
    Array(1112103, 100), // 嫩黃名片戒指, 100), // 在角色的下面出來黃底黑字角色名。
    Array(1112253, 100), // 木乃伊對話框戒指, 100), // 角色對話時, 顯示繃帶對話框。
    Array(1112142, 100), // 木乃伊名片戒指, 100), // 在角色下面的繃帶上顯示角色名。
    Array(1112135, 100), // 水墨花名片戒指, 100), // 在角色腳底下，用以水墨畫背景用白色的字體顯示角色名字。
    Array(1112238, 100), // 水墨花聊天戒指, 100), // 角色在聊天時，會出現水墨畫對話框。
    Array(4001006, 350),  //火焰羽毛
    Array(1112915, 20),  //藍調戒指
    Array(3010678, 150),  //海加頓之安息
    Array(3010680, 150),  //童話中的宮殿
    Array(2433285, 350),  //
    Array(4033356, 300)  //正義火種
);
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Heros" + leaderid);

    eim.setProperty("HerosSummoned", "0");

    var map = eim.setInstanceMap(mapId);
    map.resetFully();
    var mob = em.getMonster(9500317);//怪物ID
    var stats = mob.getStats();
    stats.setHp(520000);
    stats.setPhysicalAttack(520);
    stats.setMagicAttack(520);
    stats.setAcc(520);
    stats.setExp(70000000);
    stats.setLevel(52);
    stats.setEva(1);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-137, 154)); //刷出這個怪物
    eim.startEventTimer(1000 * 60 * 15);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != 889100001) {
        eim.unregisterPlayer(player);

        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 9500319:
            for (i = 0; i < eim.getPlayers().size(); i++) {
                //eim.getPlayers().get(i).setPQLog("梅格耐斯[噩夢]");
                eim.startEventTimer(1000 * 60 * 5);
                eim.broadcastPlayerMsg(6, "[愛情 - 甜蜜小屋] 10秒後開啟寶箱，擲點時請勿進行其他操作，並且需要在10秒鐘內做出需求選擇，否則將會被強制下線。");
                var map = eim.getMapInstance(889100001);
                map.startMapEffect("[愛情 - 甜蜜小屋] 已被通關，10秒後將開出寶箱。", 5120127);
            }
            roll(eim);
            break;
        } 
    return 1;
}

function roll(eim) {
    MaxRandom = 0;
    var count = eim.getProperty("giftcount");
    var rewardPlayer = null;
    //第二次開始,統計上一次ROLL點玩家結果，並發放獎勵。
    if ((count*1)>=1) {
        for (var i = 0; i < eim.getPlayerCount(); i++) {
            var charName = eim.getPlayers().get(i).getName();
            var charId = eim.getPlayers().get(i).getId();
            //推送ROLL點信息
            for (var j = 0; j < eim.getPlayerCount(); j++) {
                var notice =  "[愛情 - 甜蜜小屋] 玩家 "+charName+" 擲出了 "+eim.getProperty("charid_"+charId)+"點";
                if ((eim.getProperty("charid_"+charId)*1)==0) {
                    notice =  "[愛情 - 甜蜜小屋] 玩家 "+charName+" 放棄了擲點";
                }
                eim.getPlayers().get(j).dropMessage(6,notice);
            }
            //不斷重置最大值
            if ((eim.getProperty("charid_"+charId)*1)>MaxRandom) {
                MaxRandom = eim.getProperty("charid_"+charId);
                //置換玩家名稱
                eim.setProperty("rewardplayer", charName);
                //置換玩家ID
                eim.setProperty("rewardplayerid", charId);
            } 
           }
        for (var j = 0; j < eim.getPlayerCount(); j++) {
            //操作NPC 發放獎勵
            eim.getPlayers().get(j).openNpc(1052008, "huangjinroll");
        }
    }
    for (var j = 0; j < eim.getPlayerCount(); j++) {
        //重置所有玩家ROLL點點數為零
        eim.setProperty("charid_"+eim.getPlayers().get(j).getId(),"0");
    }
    //次數+1
    eim.setProperty("giftcount", (count*1+1));
    //重新讀入次數
    count = eim.getProperty("giftcount");
    count = (count*1);
    //退出戰場
    if ((count*1)>10) {
        EndThisBattle(eim);
        return;
    }
    //創建幾率
    var chance = Math.floor(Math.random()*600);
    //最終物品列表
    var finalItemList = Array();
    for(var m=0; m<itemList.length; m++) {
        if (itemList[m][1] >= chance) {
            finalItemList.push(itemList[m][0]);
        }
    }
    var currentItem = finalItemList[Math.floor(Math.random()*finalItemList.length)];
    switch(count) {
        case 8:
        case 9:
        case 10:
            currentItem = 5062010;
        break;
    }
    eim.setProperty("rewarditem", currentItem);
    //延遲10秒打開ROLL點NPC
    setupTask = em.schedule("openRollNpc", 1000 * 5 * 1, eim);
}

function openRollNpc(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).openNpc(9073009);
    }
    //10秒後繼續ROLL點
    setupTask = em.schedule("roll", 1000 * 5 * 1, eim);
}

function EndThisBattle(eim) {
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        eim.getPlayers().get(i).dropMessage(1, "[愛情 - 甜蜜小屋] 挑戰成功！");
    }
    //em.broadcastYellowMsg("[米納爾森林保衛戰] 挑戰結束");
    em.setProperty("state", "done");
    eim.disposeIfPlayerBelow(100, 910000000);
    if (setupTask!=null)
        setupTask.cancel(true);
    eim.dispose();
}

function end(eim) {
    var map = eim.setInstanceMap(mapId);
    if (map.getAllMonstersThreadsafe().size() != 0) {

        eim.broadcastPlayerMsg(6, "不好意思 ！ 看來你們的感情不會太長久");
    }
    eim.disposeIfPlayerBelow(100, 910000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}



function leftParty(eim, player) { }

function disbandParty(eim) { }

function playerDead(eim, player) { }

function cancelSchedule() { }