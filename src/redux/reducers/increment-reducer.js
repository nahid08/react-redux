
const inititalState = 0;

const incrementReducer = (state=inititalState, action) => {
    switch(action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
} 

export default incrementReducer;