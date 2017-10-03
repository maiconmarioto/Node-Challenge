import React from 'react';

const Input = props => {
  let style = "form-control mb-3 mr-sm-3 col-sm-12 col-md-3 col-lg-3";
  if (props.error) style = `${style} has-error`;
  return (
    <input
      type={props.type}
      className={style}
      placeholder={props.placeholder}
      onChange={props.onChange}
      id={props.id}
      value={props.value}
    />
  );
};

export default Input;
