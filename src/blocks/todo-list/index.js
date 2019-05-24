import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("mytheme-blocks/todo-list", {
    title: __(" Redux Todo List ", "mytheme-blocks"),
    description: __("A todo list.", "mytheme-blocks"),
    icon: "editor-ul",
    category: "mytheme-category",
    edit,
    save() {
        return null;
    }
});
