import { useState } from 'react';
import calculate from '../logic/calculate';
import Keypad from './keypad';
import '../Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (key) => {
    setState({ ...state, ...calculate(state, key) });
  };

  return (
    <main className="calcContainer">
      <h2>Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="Screen">
          {`${!state.total ? '' : state.total} 
        ${!state.operation ? '' : state.operation} 
        ${!state.next ? '' : state.next}`}
        </div>
        <Keypad keyClick={handleClick} />
      </div>
    </main>
  );
};

export default Calculator;
