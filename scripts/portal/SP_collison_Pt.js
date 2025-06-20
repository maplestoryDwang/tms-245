/*function enter(pi) {
 pi.playPortalSE();
 pi.warp(340000010);
 return true;
 }*/

function enter(pi) {
    try {
        var mapid = pi.getMapId();

        if (mapid == 340000010) {
            if (pi.getPortalName().startsWith("center01_2")) {
                pi.playerMessage(-1, "中央廣場→西側入口");
                pi.warpS(pi.getMapId() + 1, 1);   //OK
            } else if (pi.getPortalName().startsWith("west01_")) {
                pi.playerMessage(-1, "中央廣場→主入口");
                pi.warpS(pi.getMapId() + 2, 5);    //OK
            } else if (pi.getPortalName().startsWith("east01_1")) {
                pi.playerMessage(-1, "中央廣場→東側入口");
                pi.warpS(pi.getMapId() + 3, 4);   //OK
            } else if (pi.getPortalName().startsWith("west00_1")) {
                pi.playerMessage(-1, "中央廣場→西邊大道");
                pi.warpS(pi.getMapId() + 4, 6);  //OK
            } else if (pi.getPortalName().endsWith("east00_0")) {
                pi.playerMessage(-1, "中央廣場→東邊大道");
                pi.warpS(pi.getMapId() + 5, 4);  //OK 
            }

        } else if (mapid == 340000012) {
            pi.playerMessage(-1, "主入口");//OK
            if (pi.getPortalName().startsWith("north00_")) {
                pi.playerMessage(-1, "主入口→中央廣場");
                pi.warpS(340000010, 20);
            }
        } else if (mapid == 340000011) {
            pi.playerMessage(-1, "西側入口");//OK
            if (pi.getPortalName().startsWith("north01_")) {
                pi.playerMessage(-1, "西側入口→中央廣場");
                pi.warpS(340000010, 30);
            }
        } else if (mapid == 340000013) {
            pi.playerMessage(-1, "東側入口");
            if (pi.getPortalName().startsWith("north01_")) {
                pi.playerMessage(-1, "東側入口→中央廣場");
                pi.warpS(340000010, 35);
            }
        } else if (mapid == 340000014) {
            pi.playerMessage(-1, "西邊大道"); //ok
            if (pi.getPortalName().startsWith("east00_")) {
                pi.playerMessage(-1, "西邊大道→中央廣場");
                pi.warpS(340000010, 23);
            }
        } else if (mapid == 340000015) {
            pi.playerMessage(-1, "東邊大道");
            if (pi.getPortalName().startsWith("west00_2")) {
                pi.playerMessage(-1, "東邊大道→中央廣場");
                pi.warpS(340000010, 14);
            } else if (pi.getPortalName().endsWith("north00_1")) {//回來是 13
                pi.playerMessage(-1, "東邊大道→明星競技場地圖");
                pi.warpS(340000016, 11);
            }
        } else if (mapid == 340000016) {
            pi.playerMessage(-1, "明星競技場地圖");
            if (pi.getPortalName().startsWith("east00_3")) {
                pi.playerMessage(-1, "明星競技場地圖→東邊大道");
                pi.warpS(340000015, 11);
            }

        } else if (mapid == 340000017) {
            pi.playerMessage(-1, "明星競技場");
        }
        //pi.playerMessage(-1, "Portal Name : "+pi.getPortalName()+" ID : " + pi.getPortal().getId());

    } catch (e) {
        //pi.getPlayer().dropMessage(5, "Portal Name : "+pi.getPortalName()+" ID : " + pi.getPortal().getId()+ "Error: " + e);
    }
}
