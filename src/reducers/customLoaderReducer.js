export default function customLoaderReducer(state = {active: false}, action) {
    switch (action.type) {
        case "SHOW_LOADER":
            return {active: true};
        case "HIDE_LOADER":
            return {active: false};
        default:
            return state;
    }
}