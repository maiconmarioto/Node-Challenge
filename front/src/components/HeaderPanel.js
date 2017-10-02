import React from 'react';
import HeaderForm from './HeaderForm';
import Title from './common/Title';
import './style.css';

const HeaderPanel = props => (
  <div className="jumbotron jumbotron-fluid jumbotron-light-blue">
    <div className="container m-top-10">
      <Title
        title="CADASTRE-SE"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <HeaderForm />
    </div>
  </div>
);

export default HeaderPanel;
