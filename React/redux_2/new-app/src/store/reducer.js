import * as actionTypes from '../store/actions/actionTypes'

const initialState = {
    counter: 99
}


// using initialState as default value
const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                counter:state.counter +1 
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter -1
            }
        default:
            console.log('DEFAULT')
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