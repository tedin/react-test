//set initial state and then import in reducers
export const snackBarInitialState = {open: false, message: "No message", autoHideDuration: 3000};
export const confirmDialogInitialState = {
    title: "Title", onSubmit: function () {
        console.log("onSubmit");
    }, onCancel: () => {
        console.log("oncancel");
    }, open: false, content: "Modal content"
};