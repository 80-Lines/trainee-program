import PropTypes from "prop-types";
import React from "react";

const Button = ({ children, intent, variant, onClick, disabled, pending }) => {
  return (
    <button onClick={onClick} disabled={disabled || pending}
      style={{ ...styles, ...stylesMap[variant][intent], ...(disabled ? disabledStyles : {}) }}>
      {pending ? "Loading..." : children}
    </button>
  );
};

export default Button;

const styles = {
  padding: "2em 4em",
}

const disabledStyles = {
  opacity: 0.56
}

const stylesMap = {
  solid: {

  },
  outline: {
    primary: {
      background: "none",
      border: "1px solid blue",
      color: "blue"
    }
  },
  ghost: {},
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  pending: false,
  variant: "solid",
  intent: "primary",
};
