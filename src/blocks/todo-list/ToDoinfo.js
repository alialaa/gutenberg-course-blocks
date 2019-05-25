import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";

let TodoCount = props => {
    return (
        <div>
            <p>Total: {props.total}</p>
            <p>To Do: {props.todo}</p>
            <p>Done: {props.done}</p>
        </div>
    );
};

TodoCount = withSelect(select => {
    return {
        total: select("mytheme-blocks/todo").getToDosNumber(),
        todo: select("mytheme-blocks/todo").getUnDoneToDosNumber(),
        done: select("mytheme-blocks/todo").getDoneToDosNumber()
    };
})(TodoCount);

registerBlockType("mytheme-blocks/todo-list-count", {
    title: __("Redux Todo Count", "mytheme-blocks"),

    description: __("Redux Todo Count", "mytheme-blocks"),

    icon: "editor-ul",

    category: "mytheme-category",

    edit() {
        return <TodoCount />;
    },

    save() {}
});
