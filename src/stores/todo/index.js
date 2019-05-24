import { registerStore } from "@wordpress/data";

const DEFAULT_STATE = [];

const actions = {
    addToDo(item) {
        return {
            type: "ADD_TODO",
            item: item
        };
    }
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.item];
        default:
            return state;
    }
};

const selectors = {
    getTodos(state) {
        return state;
    }
};

registerStore(" ", {
    reducer,
    selectors,
    actions
});
