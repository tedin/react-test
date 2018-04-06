export function showLoader() {
    return {type: "SHOW_LOADER", payload: true};
}

export function hideLoader() {
    return {type: "HIDE_LOADER", payload: false};
}