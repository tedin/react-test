export function saveState(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (e) {
        console.warn("Error while getting state from current storage", e);
    }
}

export function loadState() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState)
            return JSON.parse(serializedState);
        return undefined;
    } catch (e) {
        return undefined;
    }
}