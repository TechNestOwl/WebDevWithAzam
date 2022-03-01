import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actionTypes'

function Counter(props) {

    const handleIncrement = () => {
        props.onIncrement()
    }

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick = {() => props.onDecrement()}>Decrement</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: ()=> dispatch({type: actionTypes.INCREMENT}),
        onDecrement: ()=> dispatch({type: actionTypes.DECREMENT})
    }
}
export default connect(null, mapDispatchToProps)(Counter)