import React from 'react';

const Title = props => {
  return (
    <div className="text-center white-font">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Title;
