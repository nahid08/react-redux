
const inititalState = 0;

const powerReducer = (state=inititalState, action) => {
    switch(action.type){
        case 'Multiply':
            return state*state;
        default:
            return state;
    }

}

export default powerReducer;