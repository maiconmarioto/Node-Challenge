import React from 'react';

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      className="col-sm-12 col-md-2 col-lg-1 btn btn-info-plus"
      type="button"
      id={props.id}
      disabled={!!props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;
