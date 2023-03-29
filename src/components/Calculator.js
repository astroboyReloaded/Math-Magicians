// import { useState } from 'react';
// import Screen from './screen';
import Keypad from './keypad';
// import operate from '../logic/operate';
import calculate from '../logic/calculate';

const Calculator = () => {
  const state = {
    total: '3',
    next: '6',
    operation: '+',
  };

  return (
    <div className="calculator">
      <div className="Screen">
        {`${state.total + state.operation + state.next}`}
      </div>
      <Keypad onClick={() => calculate(state)} />
    </div>
  );
};

export default Calculator;
