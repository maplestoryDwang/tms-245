/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package handling.login.handler;

import client.MapleClient;
import packet.LoginPacket;
import tools.data.MaplePacketReader;

/**
 * @author PlayDK
 */
public class LicenseRequestHandler {

    public static void handlePacket(MaplePacketReader slea, MapleClient c) {
//        if (slea.readByte() == 1) {
            c.announce(LoginPacket.licenseResult());
//            c.updateLoginState(MapleClient.LOGIN_NOTLOGGEDIN);
//            LoginPasswordHandler.Login(c);
//        } else {
//            c.getSession().close();
//        }
    }
}
