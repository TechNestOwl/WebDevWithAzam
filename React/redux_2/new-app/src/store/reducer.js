import * as actionTypes from '../store/actions/actionTypes'

const initialState = {
    counter: 99
}


// using initialState as default value
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT :
            return{
            ...stae,
            counter: state.counter + 1
        }
        return state
    }
}
    // if(action.type == actionTypes.INCREMENT){
    //     return{
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }


export default reducer