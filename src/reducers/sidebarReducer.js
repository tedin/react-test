export default function (state = false, action) {
    switch (action.type) {
        case "OPEN_SIDEBAR":
            return action.payload;
        case "CLOSE_SIDEBAR":
            return action.payload;
        default:
            return state;
    }
}