
import * as actionTypes from '../actions/actionTypes'


export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

