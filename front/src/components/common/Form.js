import React from 'react';

const Input = props => {
  return (
    <div className="row d-flex justify-content-center">
      <form className="form-inline w-100">{props.children}</form>
    </div>
  );
};

export default Input;
