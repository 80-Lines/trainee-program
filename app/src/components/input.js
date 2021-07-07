import React from "react";
import PropTypes from "prop-types";

const Input = ({ id, value, onChange, placeholder, type, disabled }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "search",
    "date",
    "time",
    "datetime-local",
    "black",
  ]),
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  id: undefined,
  placeholder: undefined,
  type: "text",
  disabled: false,
};
