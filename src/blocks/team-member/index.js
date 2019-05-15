import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const attributes = {
    title: {
        type: "string",
        source: "html",
        selector: "h4"
    },
    info: {
        type: "string",
        source: "html",
        selector: "p"
    }
};

registerBlockType("mytheme-blocks/team-member", {
    title: __("Team Member", "mytheme-blocks"),

    description: __(" Block showing a Team Member. ", "mytheme-blocks"),

    icon: "admin-users",

    category: "mytheme-category",

    keywords: [__("team"), __("member"), __("person")],

    attributes,

    save: () => {
        return null;
    },

    edit: () => {
        return null;
    }
});
