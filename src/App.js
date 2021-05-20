import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import { useState } from 'react';

function App() {
  const [output, setOutput] = useState('0');
  const [operation, setOperation] = useState(null);
  const [currentValue, setValue] = useState(0);
  const [reset, setReset] = useState(true);

  const keyPressed = (key, value) => {
    console.log(key, value);
    // https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
    const number = parseInt(key);
    if (isNaN(number) && key !== '.') {
      const parsedValue = parseFloat(output);
      if (operation) {
        // https://stackoverflow.com/questions/15401186/how-to-call-a-function-from-a-switch-statement-in-javascript        
        let newValue;
        switch (operation) {
          case '+':
            // https://stackoverflow.com/questions/46300223/add-two-numbers-in-javascript-function
            newValue = currentValue + parsedValue;
            break;
          case '-':
            newValue = currentValue - parsedValue;
            break;
          case '*':
            newValue = currentValue * parsedValue;
            break;
          case '/':
            newValue = currentValue / parsedValue;
            break;
          case '=':
            newValue = parsedValue;
            break;
        }
        setValue(newValue);
        setOutput(newValue);
      } else {
        setValue(parsedValue);
      }
      setOperation(key);
      setReset(true);
    } else {
      setOutput((previous) => { 
        if (reset) {
          setReset(false);
          return key;
        }
        return previous + key; 
      });
    }
  };

  return (
    <div>
      <Display output={output} />
      <Keypad onKeyPressed={(k, v) => { keyPressed(k, v) }} />
    </div>
  );
}

export default App;
