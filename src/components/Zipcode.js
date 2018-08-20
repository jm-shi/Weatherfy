import React from 'react';
import Searchbar from './Searchbar';

class Zipcode extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form-container">
          <label id="search-label">Get weather by zipcode</label>
          <Searchbar />
        </div>
      </div>
    );
  }
}

module.exports = Zipcode;
