import "./style.editor.scss";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { RichText } from "@wordpress/editor";

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
    },
    id: {
        type: "number"
    },
    alt: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "alt",
        default: ""
    },
    url: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src"
    },
    social: {
        type: "array",
        default: [
            { link: "https://facebook.com", icon: "wordpress" },
            { link: "https://facebook.com", icon: "wordpress" }
        ]
    }
};

registerBlockType("mytheme-blocks/team-member", {
    title: __("Team Member", "mytheme-blocks"),

    description: __(" Block showing a Team Member. ", "mytheme-blocks"),

    icon: "admin-users",

    parent: ["mytheme-blocks/team-members"],

    supports: {
        reusable: false,
        html: false
    },

    category: "mytheme-category",

    keywords: [
        __("team", "mytheme-blocks"),
        __("member", "mytheme-blocks"),
        __("person", "mytheme-blocks")
    ],

    attributes,

    save: ({ attributes }) => {
        const { title, info, url, alt, id } = attributes;
        return (
            <div>
                {url && (
                    <img
                        src={url}
                        alt={alt}
                        className={id ? `wp-image-${id}` : null}
                    />
                )}
                {title && (
                    <RichText.Content
                        className={"wp-block-mytheme-blocks-team-member__title"}
                        tagName="h4"
                        value={title}
                    />
                )}
                {info && (
                    <RichText.Content
                        className={"wp-block-mytheme-blocks-team-member__info"}
                        tagName="p"
                        value={info}
                    />
                )}
            </div>
        );
    },

    edit
});
