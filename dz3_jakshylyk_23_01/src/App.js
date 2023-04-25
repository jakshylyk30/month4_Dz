import './App.css';
import {useState} from "react";
import Color from "./components/Color/Color";

function App() {
  const [color, setColor] = useState(false)
  const handlclick = () => setColor(!color)


  return (
    <div className="App">
      <div className="">
        <button style={{background: color ? 'red': 'blue'}} onClick={handlclick}>{color ? 'red' : 'blue'}</button>
        <button style={{background: color ? 'blue': 'red'}} onClick={handlclick}>{color ? 'blue' : 'red'}</button>
      </div>
        <h2>✌</h2>
        <Color/>
    </div>
  );
}

export default App;
