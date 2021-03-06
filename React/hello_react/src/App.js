import React, { Component } from 'react';
// import {Hello} from './Hello';
import {Login} from "./Login";
import {BookList} from "./BookList";



class App extends Component {

    constructor() {
      // call the constructor of the parent class 
      // We call super to make sure that component is initialized 
      super() 

      // create a state/ private state/ local state 
      // this state is not visible to accessible from outside 
      // this component. 
      this.state = {
        counter: 0, 
        username: 'John Doe'
      }
    }

    // inside arrow functions the value of this is not undefined 
    handleIncrement = () => {
      // state can NOT be changed 
      //this.state.counter += 1
      // state can be REPLACED 
      // When you set the state render is called automatically
      this.setState({
        counter: this.state.counter + 1, 
        username: 'Mary Doe'
        // since setState updates partial state 
        // if you don't change username then you don't need to add it to the new state. It will automatically be added 
        // username: this.state.username 
      })
    }

    /*
    handleIncrement() {
      console.log(this)
      this.counter += 1 
      console.log(this.counter)
      console.log('handle increment')
    } */
    componendDidMount(){
      fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
        .then(response => response.json())
        .then (data => this.setState({}));

    }

    render() {

      // NOT A GOOD IDEA  
      // This will cause infinite loop 
      /*
      this.setState({
        counter: this.state.counter + 1 
      }) */


      return (
        <div>
          {/* <Hello /> */}
          <h1>{this.state.counter}</h1>
          <button onClick = {this.handleIncrement}>Increment</button>
          <Login />
          <BookList books = {this.state.books} />
        </div>
      )
    }
}

export default App 