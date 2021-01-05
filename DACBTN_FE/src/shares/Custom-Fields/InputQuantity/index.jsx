import PropTypes from "prop-types";
import React, { useRef } from "react";
import "./style.scss";
function InputQuantity(props) {
  const { field, setFieldTouched, setFieldValue, max } = props;

  const inputEl = useRef(null);
  return (
    <div className="input-group mb-3 input-spinner">
      <div className="input-group-prepend">
        <button
          className="btn btn-light"
          type="button"
          name="button-minus"
          onClick={() => {
            if (inputEl.current.value > 1) {
              setFieldTouched(field.name, true);
              setFieldValue(field.name, --inputEl.current.value);
            }
          }}
        >
          -
        </button>
      </div>
      <input type="text" className="form-control" ref={inputEl} {...field} />
      <div className="input-group-append">
        <button
          className="btn btn-light"
          type="button"
          name="button-plus"
          onClick={() => {
            if (inputEl.current.value <= max) {
              setFieldTouched(field.name, true);
              setFieldValue(field.name, ++inputEl.current.value);
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
  // value: PropTypes.number,
  field: PropTypes.object,
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
  max: PropTypes.number,
};
InputQuantity.defaultProps = {
  field: {
    name: "quantity",
    value: 1,
  },
  max: 1000,

  setFieldTouched: () => {},
  setFieldValue: () => {},
};

export default InputQuantity;
