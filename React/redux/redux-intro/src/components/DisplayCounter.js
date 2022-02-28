import { connect } from 'react-redux';

function DisplayCounter(props){

    return(
        <div>
            <h1>Display counter</h1>
            <h3>{props.ctr}</h3>
        </div>
    )

}
//map global state to local state
const mapStateToProps = (state) => {
    return{
        ctr:state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter);