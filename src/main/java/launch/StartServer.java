package launch;

import api.HttpServer;
import configs.Config;
import ecpay.EcpayServer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import provider.MapleDataProviderFactory;
import scripting.AbstractScriptManager;
import scripting.portal.PortalScriptManager;
import server.InitializeServer;
import server.Timer;

public class StartServer {
    private static final Logger log = LogManager.getLogger(StartServer.class);
    public static boolean guiEnabled = true;

    public static void main(String[] args) {
        System.out.println("初始化配置...");
        Config.load();
        MapleDataProviderFactory.init();
        if (!InitializeServer.initServer()) {
            System.err.println("伺服端初始化失敗。");
            System.exit(1);
        }
        HttpServer.start();
        startServer();
//        System.setProperty("debug", "dev");
        //EcpayServer.SocketServer.StartServer();
    }

    public static void startServer() {
        guiEnabled = Config.getProperty("gui.enabled", "true").equals("true");
        if (AbstractScriptManager.getScriptEngine() == null) {
            log.error("Script engine is null!!");
            System.exit(1);
        }
        try {
            if (guiEnabled) {
                Class.forName("launch.StartGUI");
            }
        } catch (ClassNotFoundException e) {
            throw new IllegalAccessError();
        }
        log.info("開始加載數據");
        // tmp
        PortalScriptManager.getInstance().getInvocable("portal/106030100_IP.js", null);
        long starttime = System.currentTimeMillis();
        InitializeServer.initAllData(((now, total, loadPart) -> {
            log.info("正在加載數據...總進度：{}/{}, 加載完成：{}" , now , total, loadPart);
            if (now == total) {
                log.info(String.format("加載數據完成，耗時：%.3f秒", (System.currentTimeMillis() - starttime) / 1000.0));
                InitializeServer.InitDataFinished = true;
                if (guiEnabled) {
                    launch.StartGUI.getInstance().startServer_Click();
                } else {
                    run();
                }
            }
        }));
    }

    public static void run() {
        if (guiEnabled) StartGUI.getInstance().starttime = System.currentTimeMillis();
        new Thread(new StartGUI.StartThread()).start();
    }

    public static void exit() {
        Runtime.getRuntime().halt(0);
    }
}
