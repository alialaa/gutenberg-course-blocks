import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";

registerPlugin("mytheme-blocks-sidebar", {
    icon: "smiley",
    render: () => {
        return (
            <>
                <PluginSidebarMoreMenuItem target="mytheme-blocks-sidebar">
                    {__("Meta Options", "mytheme-blocks")}
                </PluginSidebarMoreMenuItem>
                <PluginSidebar
                    name="mytheme-blocks-sidebar"
                    icon="admin-post"
                    title={__("Meta Options", "mytheme-blocks")}
                >
                    ljljljlj
                </PluginSidebar>
            </>
        );
    }
});
