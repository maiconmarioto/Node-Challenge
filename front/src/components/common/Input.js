import React from 'react';

const Input = props => {
  return (
    <input
      type={props.type}
      className="form-control mb-3 mr-sm-3 col-sm-12 col-md-3 col-lg-3"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default Input;
