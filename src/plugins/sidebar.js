import { registerPlugin } from "@wordpress/plugins";
import {
    PluginSidebar,
    PluginSidebarMoreMenuItem,
    PluginPostStatusInfo,
    PluginPrePublishPanel,
    PluginPostPublishPanel,
    PluginBlockSettingsMenuItem,
    PluginMoreMenuItem
} from "@wordpress/edit-post";
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

                <PluginPostStatusInfo>safsa</PluginPostStatusInfo>

                <PluginPrePublishPanel title="weljljie" initialOpen={true}>
                    pre publish
                </PluginPrePublishPanel>

                <PluginPostPublishPanel title="weljljie" initialOpen={true}>
                    post publish
                </PluginPostPublishPanel>

                <PluginBlockSettingsMenuItem
                    icon="twitter"
                    label="dweljioj"
                    onClick={() => alert(true)}
                />

                <PluginMoreMenuItem icon="twitter" onClick={() => alert(true)}>
                    abbkjiil
                </PluginMoreMenuItem>
            </>
        );
    }
});
