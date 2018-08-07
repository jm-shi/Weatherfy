import React from 'react';
import Searchbar from './Searchbar';

class Zipcode extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <div className="form-container">
            <label id="search-label">Get weather by zipcode</label>
            <Searchbar />
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Zipcode;
