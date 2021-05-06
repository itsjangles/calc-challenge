import logo from './logo.svg';
import './App.css';
import Display from './components/display/Display';
import Keypad from './components/keypad/Keypad';
import { useState } from 'react';

function App() {
  const [output, setOutput] = useState();

  const keyPressed = (key, value) => {
    console.log(key, value);
  };

  return (
    <div>
      <Display output={output} />
      <Keypad onKeyPressed={(k,v) => {keyPressed(k,v)}} />
    </div>
  );
}

export default App;
