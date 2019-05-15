import "./style.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";

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

    keywords: [
        __("team", "mytheme-blocks"),
        __("member", "mytheme-blocks"),
        __("person", "mytheme-blocks")
    ],

    attributes,

    save: () => {
        return null;
    },

    edit
});
