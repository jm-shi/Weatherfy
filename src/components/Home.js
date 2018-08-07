import React from 'react';
import Zipcode from './Zipcode';
import Navbar from './Navbar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar onHomePage="true" />
        <Zipcode />
      </div>
    );
  }
}

module.exports = Home;
