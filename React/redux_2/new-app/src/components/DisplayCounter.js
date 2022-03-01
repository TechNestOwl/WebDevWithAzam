
import {connect} from 'react-redux';

function DisplayCounter (props){
    return(
        <div>
            <h1>Display Counter</h1>
            <h2>{props.ctr}</h2>
        </div>
    )
}

// map thte global state to local props
//global redux state will be available to the component through the use of local props
const mapStateToProps = (state) => {
    return{
        ctr:state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)