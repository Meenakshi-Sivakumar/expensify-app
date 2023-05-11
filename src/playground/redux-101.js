import {createStore} from 'redux';

const store = createStore((state= {count: 0},action)=> {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default: 
            return state;
    }
});

//watches and executes if store changes.
//the return value called will unsubscribe the store(e.i. stop watching it)
const unsubscribe = store.subscribe (()=> 
console.log(store.getState())
)

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 6
})

store.dispatch({
    type: 'RESET'
})

unsubscribe();
