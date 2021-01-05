import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
function InputQuantity(props) {
  const { quantity, handleChangeQuantity, max } = props;
  const [va, setValue] = useState(quantity);
  const inputEl = useRef(null);
  useEffect(() => {
    handleChangeQuantity(va);
  }, [va]);

  useEffect(() => {}, []);
  return (
    <div className="input-group mb-3 input-spinner">
      <div className="input-group-prepend">
        <button
          className="btn btn-light"
          type="button"
          name="button-minus"
          onClick={() => {
            if (inputEl.current.value > 1) {
              setValue(--inputEl.current.value);
            }
          }}
        >
          -
        </button>
      </div>
      <input
        type="text"
        name="quantity"
        className="form-control"
        value={va}
        ref={inputEl}
        onChange={(event) => {
          if (event.target.value > 0) setValue(event.target.value);
          else setValue(1);
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-light"
          type="button"
          name="button-plus"
          onClick={() => {
            if (inputEl.current.value < max) {
              setValue(++inputEl.current.value);
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

InputQuantity.propTypes = {
  quantity: PropTypes.number,
  handleChangeQuantity: PropTypes.func,
  max: PropTypes.number,
};
InputQuantity.defaultProps = {
  quantity: 1,
  max: 1000,
  handleChangeQuantity: (data) => {
    // console.log(parseFloat(data));
  },
};

export default InputQuantity;
