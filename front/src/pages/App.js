import React, { Component } from 'react';
import HeaderPanel from '../components/HeaderPanel';
import Container from '../components/Container';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <HeaderPanel />
        <Container />
      </div>
    );
  }
}

export default App;
