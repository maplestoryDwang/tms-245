package launch.groups.setting;

import com.alee.extended.panel.GroupPanel;
import com.alee.laf.scroll.WebScrollPane;
import configs.ServerConfig;

import java.awt.Component;

public class GameConfigGroup extends AbstractConfigGroup {
    GameConfigGroup(ConfigPanel owner) {
        super(owner, "遊戲參數設置");
    }

    @Override
    public Component getPreview() {
        TitleWebPanel titleWebPanel1 = new TitleWebPanel("倍率設置");
        titleWebPanel1.add(new GroupPanel(false,
                new ConfigComponent("基礎經驗百分比（默認100）", "channel.rate.baseexp", ServerConfig.CHANNEL_RATE_BASEEXP),
                new ConfigComponent("伺服器經驗倍率", "channel.rate.exp", ServerConfig.CHANNEL_RATE_EXP),
                new ConfigComponent("楓幣倍率", "channel.rate.meso", ServerConfig.CHANNEL_RATE_MESO),
                new ConfigComponent("怪物掉寶倍率", "channel.rate.drop", ServerConfig.CHANNEL_RATE_DROP),
                new ConfigComponent("全域掉寶倍率", "channel.rate.globaldrop", ServerConfig.CHANNEL_RATE_GLOBALDROP),
                new ConfigComponent("專業技能經驗倍率", "channel.rate.trait", ServerConfig.CHANNEL_RATE_TRAIT),
                new ConfigComponent("潛能等級提升倍率", "channel.rate.potentiallevel", ServerConfig.CHANNEL_RATE_POTENTIALLEVEL)
        ).setMargin(5));

        TitleWebPanel titleWebPanel2 = new TitleWebPanel("其他功能");
        titleWebPanel2.add(new GroupPanel(false,
                new ConfigComponent("召喚菁英怪物所需擊殺量", "channel.monster.elitecount", ServerConfig.ELITE_COUNT),
                new ConfigComponent("最大線上人數", "login.server.userlimit", ServerConfig.LOGIN_USERLIMIT),
                new ConfigComponent("預設線上人數(虛假人氣)", "login.server.defaultuserlimit", ServerConfig.LOGIN_DEFAULTUSERLIMIT),
                new ConfigComponent("排名更新時間(分鐘)", "world.refreshrank", ServerConfig.WORLD_REFRESHRANK),
                new ConfigComponent("地圖特效(道具ID)", "map.effect", ServerConfig.MAP_EFFECT),
                new ConfigComponent("萌獸封印費用(楓點)", "familiar.sealcost", ServerConfig.FAMILIAR_SEAL_COST),
                new ConfigComponent("MVP階級需求金額倍率", "mvp.amount.rate", ServerConfig.MVP_AMOUNT_RATE),
                new ConfigComponent("楓點星力強化需求量", "starforce.maplepoint.amount", ServerConfig.SF_MP_AMOUNT),
                new ConfigComponent("楓點防爆星力強化需求量", "starforce.maplepointsafe.amount", ServerConfig.SF_MP_SAFE_AMOUNT),
                new ConfigComponent("星力強化不炸裝", "starforce.curse.enable", ServerConfig.SF_ENABLE_CURSE),
                new ConfigComponent("傳授技能費用(可改次數)", "TeachCost", ServerConfig.TeachCostData),
                new ConfigComponent("可使用白金剪刀的裝備", "inventory.cancutitems", ServerConfig.CAN_CUT_ITEMS),
                new ConfigComponent("僅可帳號共享的裝備", "inventory.accshareitems", ServerConfig.ACCOUNT_SHARE_ITEMS),
                new ConfigComponent("開放的limitednames NPC", "world.limitednames", ServerConfig.WORLD_LIMITEDNAMES),
                new ConfigComponent("設定地圖隱藏的NPC", "world.hidenpcs", ServerConfig.WORLD_HIDENPCS),
                new ConfigComponent("設定道具可堆疊最大數量", "inventory.itemmaxslot", ServerConfig.ITEM_MAXSLOT),
                new ConfigComponent("屏蔽燈泡任務", "HideBulbQuest", ServerConfig.EnableRebornBuff),
                new ConfigComponent("開啟轉生BUFF", "world.player.enablerebornbuff", ServerConfig.EnableRebornBuff)
        ).setMargin(5));

        WebScrollPane webScrollPane = new WebScrollPane(new GroupPanel(5, false, titleWebPanel1, titleWebPanel2));
        webScrollPane.createHorizontalScrollBar();
        webScrollPane.getViewport().setOpaque(false);
        return webScrollPane;
    }
}
