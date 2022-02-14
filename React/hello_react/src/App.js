import { Component } from 'react';
import Hello from './Hello';


//app class inherits from Component class
class App extends Component {
    render(){
      return(
        <div>
          <h1>Greetings</h1>
          <Hello firstName="John" lastName="Doe" />
        </div>
      )
    }
}

//This is so other components can import App Component
export default App;