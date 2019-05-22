import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/editor";

registerBlockType("mytheme-block/team-members", {
    title: __("Team Members", "mytheme-blocks"),

    description: __("Block showing a Team Members.", "mytheme-blocks"),

    icon: "grid-view",

    category: "mytheme-category",

    keywords: [
        __("team", "mytheme-blocks"),
        __("member", "mytheme-blocks"),
        __("person", "mytheme-blocks")
    ],

    edit({ className }) {
        return (
            <div className={className}>
                <InnerBlocks
                    allowedBlocks={["mytheme-blocks/team-members"]}
                    template={[
                        ["mytheme-blocks/team-member"],
                        ["mytheme-blocks/team-member"]
                    ]}
                />
            </div>
        );
    },

    save() {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    }
});
