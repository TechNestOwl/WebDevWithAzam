import { Component } from "react";

class Hello extends Component {
    render(){
        return(
            <div>
                <p>Hello {this.props.firstName}{this.props.lastName}, welome to react.</p>
            </div>
        )
    }
}

export default Hello;