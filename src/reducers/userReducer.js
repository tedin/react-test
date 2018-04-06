//we can separate action types and then import them as strings
export default function userReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_USER':
            //return state.concat(action.payload);
            return [...state, Object.assign({}, action.payload)];
        case 'LOAD_USERS_SUCCESS':
            return action.payload;
        case "CREATE_USER_SUCCESS":
            return [...state, Object.assign({}, action.payload)];
        case "UPDATE_USER_SUCCESS":
            return action.payload;
        case "USER_DELETED_SUCCESS":
            /*let index = state.findIndex(user => user.id === action.payload);
            return [...state.slice(0, index).concat(state.slice(index + 1))];*/
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}