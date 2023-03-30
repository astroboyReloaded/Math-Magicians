import { useState } from 'react';
import calculate from '../logic/calculate';
// import Screen from './screen';
import Keypad from './keypad';
// import operate from '../logic/operate';
// import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '3',
    next: '6',
    operation: '+',
  });

  const handleClick = (key) => {
    setState({ ...state, ...calculate(state, key) });
  };

  return (
    <div className="calculator">
      <div className="Screen">
        {`${state.total} 
        ${state.operation} 
        ${state.next}`}
      </div>
      <Keypad keyClick={handleClick} />
    </div>
  );
};

export default Calculator;
