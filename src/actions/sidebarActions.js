export function closeSidebar() {
    return {
        type: "CLOSE_SIDEBAR", payload: false
    }
}

export function openSidebar() {
    return {
        type: "OPEN_SIDEBAR", payload: true
    }
}
