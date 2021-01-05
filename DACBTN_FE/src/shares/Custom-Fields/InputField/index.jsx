import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disable: PropTypes.bool,
};
InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disable: false,
};
function InputField(props) {
  const { field, form, type, label, placeholder, disable, value } = props;
  const { name } = field;
  const { errors, touched } = form;
  return type === "radio" ? (
    <label className="checkbox-btn">
      <input
        className="custom-control-input"
        type="radio"
        name={name}
        placeholder={placeholder}
        disabled={disable}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={value}
        checked={field.value === value}
      />
      <span className="btn btn-light"> {label}</span>
    </label>
  ) : (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disable}
        {...field}
        className={
          errors[name] && touched[name]
            ? "form-control border border-danger"
            : "form-control "
        }
      />
      {(type === "password" || type === "email") && (
        <input
          type={type}
          className="form-control d-none"
          id="name"
          autoComplete={`new-${name}`}
        />
      )}

      {errors[name] && touched[name] && (
        <small className="text-danger">{errors[name]}</small>
      )}
    </div>
  );
}

export default InputField;
