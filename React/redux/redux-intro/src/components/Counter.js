import { connect } from 'react-redux'
import React, { useState } from 'react'

function Counter(props) {

    const [value, setValue] = useState('')

    const handleIncrement = () => {
        props.onIncrement() 
    }

    const handleDecrement = () => {
        props.onDecrement()
    }

    const handleTextChange = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(value))
    }

    return (
        <div>
            <h1>Counter</h1>
            <h3>{props.ctr}</h3>
            <button onClick = {handleIncrement}>+</button>
            <button onClick = {handleDecrement}>-</button>
            <input type = "text" onChange = {handleTextChange} />
            <button onClick = {handleAdd}>Add</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}), 
        onDecrement: () => dispatch({type: 'DECREMENT'}), 
        onAdd: (value) => dispatch({type: 'ADD', payload: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) 