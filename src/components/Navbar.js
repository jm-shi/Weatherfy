import React from 'react';
import Searchbar from './Searchbar';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    const { onHomePage } = this.props;
    return (
      <div className="header">
        {onHomePage ? (
          <NavLink className="home logo" exact to="/">
            WEATHER
          </NavLink>
        ) : (
          <NavLink className="logo" exact to="/">
            WEATHER
          </NavLink>
        )}
        {onHomePage ? (
          <span />
        ) : (
          <div style={{ marginTop: '20px' }}>
            <Searchbar />
          </div>
        )}
      </div>
    );
  }
}

module.exports = Navbar;
