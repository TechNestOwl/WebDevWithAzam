// import logo from './logo.svg';
import './App.css';
import {DisplayCounter} from './components/DisplayCounter'
import {Counter} from './components/Counter'

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <DisplayCounter />
      <Counter />
    </div>
  );
}

export default App;
