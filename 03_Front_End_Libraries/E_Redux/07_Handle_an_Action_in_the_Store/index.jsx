const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type === 'LOGIN') {
        state = {
            login: true
        }
        return state;
    }
    else {
        return state;
    }
    // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};