import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("mytheme-blocks/latest-posts", {
    title: __("Latest Posts", "mytheme-blocks"),
    description: __("BLock showing the latest posts.", "mytheme-blocks"),
    icon: "admin-post",
    category: "mytheme-category",
    edit: edit,
    save() {
        return null;
    }
});
