//we can separate action types and then import them as strings
export default function userReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_USER':
            //return state.concat(action.payload);
            return [...state, Object.assign({}, action.payload)];
        case 'LOAD_USERS_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}