package launch.groups.datamanage;

import com.alee.laf.rootpane.WebFrame;

class GuildPane extends TabbedPane {
    GuildPane(WebFrame owner) {
        super(owner);
    }

    @Override
    void init() {

    }

    @Override
    String getTitle() {
        return "公會";
    }
}
