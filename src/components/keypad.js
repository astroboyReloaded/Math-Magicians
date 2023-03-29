import PropTypes from 'prop-types';
import keyNames from './keysDb';

const Keypad = ({ keyClick }) => {
  alert(keyNames);
  return (
    <>
      <button
        onClick={() => keyClick('AC')}
        type="button"
        className="key number"
      >
        AC
      </button>
      <button type="button" className="key">
        +/-
      </button>
      <button type="button" className="key">
        %
      </button>
      <button type="button" className="key key-operator">
        ÷
      </button>
      <button type="button" className="key">
        7
      </button>
      <button type="button" className="key">
        8
      </button>
      <button type="button" className="key">
        9
      </button>
      <button type="button" className="key key-operator">
        ×
      </button>
      <button type="button" className="key">
        4
      </button>
      <button type="button" className="key">
        5
      </button>
      <button type="button" className="key">
        6
      </button>
      <button type="button" className="key key-operator">
        -
      </button>
      <button type="button" className="key">
        1
      </button>
      <button type="button" className="key">
        2
      </button>
      <button type="button" className="key">
        3
      </button>
      <button type="button" className="key key-operator">
        +
      </button>
      <button type="button" className="key  zero">
        0
      </button>
      <button type="button" className="key">
        .
      </button>
      <button type="button" className="key key-operator">
        =
      </button>
    </>
  );
};

Keypad.propTypes = {
  keyClick: PropTypes.func.isRequired,
};

export default Keypad;
