import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

function SelectField(props) {
  const { field, form, label, options, placeholder, disable } = props;

  const { name, value } = field;

  const selectOption = options.find(
    (option) => parseInt(option.value) === value
  );
  const handleSelectedOptionChange = (selectOption) => {
    console.log({ selectOption: selectOption });
    const selectedValue = selectOption ? selectOption.value : selectOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  const handleSelectedOptionBlur = (selectOption) => {
    const changeEvent = {
      target: {
        name: name,
      },
    };
    field.onBlur(changeEvent);
  };

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        id={name}
        value={selectOption}
        // {...field}
        onBlur={handleSelectedOptionBlur}
        onChange={handleSelectedOptionChange}
        options={options}
        isDisabled={disable}
        placeholder={placeholder}
      />
    </div>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

SelectField.defaultProps = {
  options: [],
  placeholder: "",
  label: "",
  disable: false,
};

export default SelectField;
