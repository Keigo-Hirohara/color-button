import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
        disabled={disabled}
      >
        Change to {buttonColor === 'red' ? 'Blue' : 'Red'}
      </button>
      <input type="checkbox" onChange={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
