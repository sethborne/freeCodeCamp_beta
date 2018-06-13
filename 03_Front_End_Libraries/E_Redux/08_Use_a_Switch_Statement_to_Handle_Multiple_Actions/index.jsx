const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
        case 'LOGIN':
            // do
            return { authenticated: true }
        case 'LOGOUT':
            // do
            return { authenticated: false }
        default:
            return state;
    }
    // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};