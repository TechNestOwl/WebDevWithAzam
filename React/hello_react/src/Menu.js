import { Component } from "react"
import { NavLink } from 'react-router-dom'


class Menu extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li> <NavLink to = '/'>Home</NavLink></li>
                    <li>Add Book</li>
                    <li>Add Name</li>
                </ul>
            </div>

        )
    }
}

export default Menu