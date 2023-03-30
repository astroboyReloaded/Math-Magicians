import { useState } from 'react';
import calculate from '../logic/calculate';
// import Screen from './screen';
import Keypad from './keypad';
// import operate from '../logic/operate';
// import calculate from '../logic/calculate';

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
    <div className="calculator">
      <div className="Screen">
        {`${!state.total ? '' : state.total} 
        ${!state.operation ? '' : state.operation} 
        ${!state.next ? '' : state.next}`}
      </div>
      <Keypad keyClick={handleClick} />
    </div>
  );
};

export default Calculator;
