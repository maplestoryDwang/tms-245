/*
 製作：WSY工作室
 
 識別是否領取的任務id :
 121800 - 換髮型
 121801 - 換髮色
 121802 - 換膚色
 121803 - 選擇傷害皮膚
 121804 - 新手寵物
 121805 - 新手點裝
 
 */
var charid;
var hairnew = Array();
var haircolor = Array();
var a = 0;
var selects;
var z = "#fEffect/CharacterEff/1051296/1/0#";
var str1 = "";


// 自定義部分開始
var str ;
var mapid = 50000;// 領取完畢後傳送到的地圖
var str2 = "開始你的冒險之旅吧！";
var mhair2 = Array(35290, 35710, 35720, 35770, 35800, 35440, 35430, 35500, 35350, 35340, 35600, 35630, 35690, 35750, 35730, 35721, 35712, 35705, 35693, 35550, 35084, 35063, 35211, 35360, 35330, 35460, 35440, 35430, 35560, 35602, 36340, 35090, 35080, 35160, 35150, 35130, 35120, 35110, 35100, 35190, 35240, 35230, 35220, 35350, 36130, 36160, 36140, 36170, 36480, 36470, 36460, 36450, 36620, 36630, 36640, 36650, 36670, 36690, 36710, 36730, 36740, 36750, 36760, 36770, 36800, 36820, 36840, 36860, 36890, 36900, 36920, 36930, 36980, 36940, 36990, 33380, 33750, 33790, 34370, 34940, 35000, 35010, 35020, 35030, 35040, 35050, 35070, 37690, 37890, 31870, 32470, 32490, 33645, 35060, 35180, 35200, 35210, 35260, 35340, 36230, 36680, 36490, 36810, 36830, 36880, 36950, 37120, 36700, 40060);
var fhair2 = Array(38520, 34450, 37530, 38700, 38680, 38660, 38640, 38600, 38560, 38460, 38410, 37890, 37910, 37950, 38620, 38710, 38730, 38740, 38760, 38790, 38800, 38810, 38850, 38930, 38940, 32150, 34950, 34940, 34960, 37310, 37320, 37330, 37340, 37350, 37361, 37370, 37400, 37410, 37420, 37430, 37440, 37450, 37460, 37490, 37500, 37510, 37520, 37530, 37540, 37550, 37560, 37570, 37580, 37610, 37620, 37630, 37640, 37650, 37660, 37670, 37680, 37690, 37700, 37710, 37720, 37730, 37740, 37750, 37760, 37770, 37780, 37790, 37800, 37810, 37820, 37830, 37840, 37850, 37860, 37880, 37900, 37920, 37930, 37940, 37950, 37960, 37970, 37980, 37990, 38000, 38010, 38020, 38030, 38040, 38050, 38060, 38070, 38080, 38090, 38100, 38110, 38120, 38130, 38150, 38160, 38220, 38240, 38250, 38260, 38270, 38280, 38290, 38300, 38310, 38320, 38330, 38340, 38350, 38360, 38370, 38380, 38390, 38470, 38500, 38480);
var skin = Array(1, 2, 3, 4, 9, 10); // 皮膚id
var damageSkin = Array(2431965, 2432131, 2432154, 2432207, 2432465, 2432479, 2432532, 2432592, 2432710, 2432836, 2432749, 2432804, 2433038, 2433182, 2433183, 2433569, 2432084, 2432354, 2432355, 2432637, 2432638, 2432640, 2432658, 2432659, 2432710, 2433804, 2432603, 2432591, 2432695, 2432526, 2432836, 2433063, 2433178, 2433456, 2432748, 2432749, 2433104, 2433106, 2433112, 2433113, 2433132, 2433038, 2433197, 2433715, 2433913, 2433919, 2433980, 2433981, 2433587, 2433588, 2433568, 2433569, 2433570, 2433570, 2433571, 2433572, 2433362, 2433184, 2433775, 2433776, 2433777, 2433558, 2434040, 2433883, 2434081, 2433828, 2433829, 2433830, 2433831, 2433832, 2433833, 2434375, 2434147, 2434519, 2434566, 2434601, 2434619, 2434658, 2434659, 2434868);
var pet = Array(5000470, 5000471, 5000460, 5000461, 5000462, 5000528, 5000541, 5000469, 5000452, 5000448, 5000447, 5000446, 5001017, 5001016, 5001015, 5000427, 5000426, 5000445, 5000444, 5000443, 5000437, 5000435, 5000434, 5000433, 5000432, 5000431, 5000428, 5000417, 5000416, 5000415, 5000414, 5000424, 5000409, 5000408, 5000407, 5000267, 5000268, 5000285, 5000284, 5000324, 5000369, 5000370, 5000371, 5000365, 5000366, 5000367, 5000368, 5000375, 5000376, 5000377, 5000375, 5000376, 5000377, 5000381, 5000383, 5000385, 5000386, 5000387, 5001005, 5000191, 5000382, 5000306, 5000307, 5000308, 5000255, 5000393, 5001011, 5000391, 5000388, 5000389, 5000390, 5000402, 5000403, 5000404, 5000018, 5000000, 5000002, 5000003, 5000004, 5000005, 5000007, 5000008, 5000009, 5000010, 5000011, 5000012, 5000013, 5000044, 5000014, 5000017, 5000020, 5000022, 5000023, 5000025, 5000024, 5000026, 5000027, 5000028, 5000029, 5000030, 5000031, 5000043, 5000046, 5000055, 5000053, 5000060, 5000054, 5000066, 5000065, 5000072, 5000081, 5000206, 5000215, 5000216, 5000221, 5000239, 5000331, 5000332, 5000330, 5000473, 5000483, 5000203, 5000204, 5000205);
var cashItem = Array(1115005, 1112192); // 現金裝備套裝 要大於1個 不然會服務端卡死
function start() {
    str = "歡迎"+cm.getName()+"來到"+cm.getServerName()+"，以下是本服為您準備的新手見面禮，趕快去打扮你的個人形象吧~·";
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (a == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (a >= 1 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            a++;
        else
            a--;
        if (a == 0) {
            charid = cm.getPlayer().getId();
            str1 = str;
            str1 += "#b\r\n";//separator
            if (getEventPoints(121800, charid) > 0 && getEventPoints(121801, charid) > 0 && getEventPoints(121802, charid) > 0 && getEventPoints(121803, charid) > 0 && getEventPoints(121804, charid) > 0 && getEventPoints(121805, charid) > 0) {
                a = 2;
                cm.sendNextS("你已經領取完了所有新手獎勵，現在跟我到#m" + mapid + "#吧！！", 9);
            } else {
                if (getEventPoints(121800, charid) <= 0) {
                    str1 += "#L0# " + z + " 我想要換一個髮型。#l\r\n"
                }

                if (getEventPoints(121801, charid) <= 0) {
                    str1 += "#L1# " + z + " 我想要換一個髮色。#l\r\n"
                }

                if (getEventPoints(121802, charid) <= 0) {
                    str1 += "#L2# " + z + " 我想要換一個膚色。#l\r\n"
                }

                if (getEventPoints(121803, charid) <= 0) {
                    str1 += "#L3# " + z + " 選擇自定義的傷害皮膚。#l\r\n"
                }

                if (getEventPoints(121804, charid) <= 0) {
                    str1 += "#L4# " + z + " 領養一隻寵物。#l\r\n"
                }

                if (getEventPoints(121805, charid) <= 0) {
                    str1 += "#L5# " + z + " 穿一下現金套裝。#l\r\n"
                }
                cm.sendSimpleS(str1, 9);
            }
        } else if (a == 1) {
            selects = selection;
            if (selection == 0) {
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair2.length; i++) {
                        hairnew.push(mhair2[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair2.length; i++) {
                        hairnew.push(fhair2[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }

                cm.sendStyle("我可以改變你的髮型,讓它比現在看起來漂亮.你為什麼不試著改變它下? 我將會幫你改變你的髮型,那麼選擇一個你想要的新髮型吧!", hairnew, 0,false);
            } else if (selection == 1) {
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendStyle("我可以改變你的髮色,讓它比現在看起來漂亮. 你為什麼不試著改變它下? 我將會幫你改變你的髮色,那麼選擇一個你想要的新髮色吧!", haircolor, 0,false);
            } else if (selection == 2) {
                cm.sendStyle("用我們特殊開發的機器可查看護膚後的效果噢,想換成什麼樣的皮膚呢？請選擇～~", skin, 0,false);
            } else if (selection == 3) {
                var text = "請選擇您要哪款傷害皮膚:\r\n"
                for (var i = 0; i < damageSkin.length; i++) {
                    text += "\r\n#b#L" + i + "#  #v" + damageSkin[i] + "#  #z" + damageSkin[i] + "##k#l"
                }
                cm.sendSimpleS(text, 9);
            } else if (selection == 4) {
                var text = "請選擇您要哪款寵物？\r\n#b"
                for (var i = 0; i < pet.length; i++) {
                    text += "\r\n#L" + i + "# #v" + pet[i] + "# #z" + pet[i] + "##l";
                }
                cm.sendSimpleS(text, 9);
            } else if (selection == 5) {
                var text = "你將獲得下列點裝：\r\n#b"
                for (var i = 0; i < cashItem.length; i++) {
                    text += "\r\n -  #v" + cashItem[i] + "# #z" + cashItem[i] + "# \r\n";
                }
                cm.sendSimpleS(text, 9);
            }
        } else if (a == 2) {
            a = -1;
            if (selects == 0) {
                if (typeof (hairnew[selection]) == "undefined") { 
                    a = 0;
                    cm.sendSimpleS("你不可以換成光頭喔！！請返回重新選擇！#b\r\n#L0# 返回重新選擇。", 9);
                } else {
                    cm.setHair(hairnew[selection]);
                    cm.sendNextS("哎喲~喜歡你現在新的髮型嗎？嘻嘻~~\r\n#r - 點擊下一步領取更多禮物。", 9);
                    setEventPoints(121800, charid, 1);
                }
            } else if (selects == 1) {
                if (typeof (haircolor[selection]) == "undefined") { 
                    a = 0;
                    cm.sendSimpleS("你不可以換成光頭喔！！請返回重新選擇！#b\r\n#L0# 返回重新選擇。", 9);
                } else {
                    cm.setHair(haircolor[selection]);
                    cm.sendNextS("哎喲~喜歡這個顏色嗎？嘻嘻~~\r\n#r - 點擊下一步領取更多禮物。", 9);
                    setEventPoints(121801, charid, 1);
                }
            } else if (selects == 2) {
                if (typeof (skin[selection]) == "undefined") { 
                    a = 0;
                    cm.sendSimpleS("皮膚的設置好像有點問題，再看看~~#b\r\n#L0# 返回重新選擇。", 9);
                } else {
                    cm.setSkin(skin[selection]);
                    cm.sendNextS("好了,你的朋友們一定認不出來是你了!\r\n#r - 點擊下一步領取更多禮物。", 9);
                    setEventPoints(121802, charid, 1);
                }
            } else if (selects == 3) { // 傷害皮膚
                cm.gainItem(damageSkin[selection], 1);
                cm.sendNextS("領取成功了！你可以雙擊角色進行傷害皮膚的更改喔！\r\n#r - 點擊下一步領取更多禮物。", 9);
                setEventPoints(121803, charid, 1);
            } else if (selects == 4) {
                cm.gainPet(pet[selection], "初心者的寵物", 1, 1, 100, 999999999, true);
                cm.sendNextS("領取成功了！希望你能好好對待它！\r\n#r - 點擊下一步領取更多禮物。", 9);
                setEventPoints(121804, charid, 1);
            } else if (selects == 5) {
                for (var i = 0; i < cashItem.length; i++) {
                    cm.gainItem(cashItem[i], 1);
                }
                cm.sendNextS("領取成功了！\r\n#r - 點擊下一步領取更多禮物。", 9);
                setEventPoints(121805, charid, 1);
            }
        } else if (a == 3) {
            cm.warp(mapid, 0);
            cm.sendOk(str2);
            cm.dispose();
        }//a
    }//mode
}


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


function getEventTimes(Eventid, charid) {//通過eventid來得到參與這個活動的次數
    var conn = cm.getConnection();
    var i = 0;
    var Times = conn.prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查詢數據
    while (Times.next()) {
        i = Times.getInt("times");//得到次數
    }
    Times.close();
    conn.close();
    return i;
}

function getEventPoints(Eventid, charid) {//通過eventid來得到參與這個活動的點數
    var conn = cm.getConnection();
    var i = 0;
    var Times = conn.prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "").executeQuery(); // 查詢數據
    while (Times.next()) {
        i = Times.getInt("points");//得到點數
    }
    Times.close();
    conn.close();
    return i;
}

function setEventPoints(Eventid, charid, points) {//通過eventid來給予參與這個活動的點數
    var conn = cm.getConnection();
    var i = 0;
    var ps = conn.prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
    var Times = ps.executeQuery(); // 查詢數據
    while (Times.next()) {
        i++;
    }
    Times.close();
    ps.close();
    if (i == 0) {//insert
        var insert = conn.prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // 載入數據
        insert.setString(1, null); //載入記錄ID
        insert.setString(2, Eventid); //載入活動ID
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, points);//points 點數
        insert.setString(6, getEventTimes(1, charid));//times 次數
        insert.setString(7, null);
        insert.executeUpdate(); //更新
        insert.close();
    } else {//update
        var update = conn.prepareStatement("update EventTimes set points = ? where eventid = " + Eventid + " and cid = " + charid + "");//更新為已使用
        update.setString(1, getEventPoints(Eventid, charid) + points);
        update.executeUpdate();
        update.close();
    }
    conn.close();
}

function setEventTimes(Eventid, charid, times) {//通過eventid來設置參與這個活動的次數
    var i = 0;
    var conn = cm.getConnection();
    var ps = conn.prepareStatement("SELECT * FROM EventTimes where eventid = " + Eventid + " and cid = " + charid + "");
    var Times = ps.executeQuery(); // 查詢數據
    while (Times.next()) {
        i++;
    }
    Times.close();
    if (i == 0) {//insert
        var insert = conn.prepareStatement("INSERT INTO EventTimes VALUES(?,?,?,?,?,?,?)"); // 載入數據
        insert.setString(1, null); //載入記錄ID
        insert.setString(2, Eventid); //載入活動ID
        insert.setString(3, cm.getPlayer().getId());//cid
        insert.setString(4, cm.getPlayer().getName());//cname
        insert.setString(5, getEventPoints(2, charid));//points 點數
        insert.setString(6, times);//times 次數
        insert.setString(7, null);
        insert.executeUpdate(); //更新
        insert.close();
    } else {//update
        var update = cm.getConnection().prepareStatement("update EventTimes set times = ? where eventid = " + Eventid + " and cid = " + charid + "");//更新為已使用
        update.setString(1, getEventTimes(Eventid, charid) + times);
        update.executeUpdate();
        update.close();
    }
    conn.close();
}

