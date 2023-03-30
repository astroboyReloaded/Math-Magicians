import PropTypes from 'prop-types';
import keyNames from './keysDb';

const Keypad = ({ keyClick }) => (
  <div className="Keypad">
    {keyNames.map((keyName) => (
      <button
        onClick={() => keyClick(keyName)}
        type="button"
        className={`key ${
          ['÷', '×', '-', '+', '='].includes(keyName) && 'key-operator'
        } ${keyName === '0' && 'zero'}`}
        key={keyName}
      >
        {keyName}
      </button>
    ))}
  </div>
);

Keypad.propTypes = {
  keyClick: PropTypes.func.isRequired,
};

export default Keypad;
