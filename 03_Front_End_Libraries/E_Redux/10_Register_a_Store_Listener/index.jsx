const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
const changeCount = () => {
    count = count + 1;
    console.log('changeCount: ', count)
}

store.subscribe(changeCount)
// change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);