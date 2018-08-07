import React from 'react';
import { Link } from 'react-router-dom';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    };

    this.setZipcode = this.setZipcode.bind(this);
    this.checkForm = this.checkForm.bind(this);
  }

  setZipcode(e) {
    var value = e.target.value;
    this.setState(() => ({ zipcode: value }));
  }

  checkForm(e) {
    if (this.state.zipcode.length !== 5) {
      e.preventDefault();
      alert('Enter a 5-digit zipcode.');
    }
  }

  render() {
    const { zipcode } = this.state;

    return (
      <div className="search-container">
        <input
          id="search-bar"
          type="text"
          placeholder="Enter zipcode"
          value={zipcode}
          onChange={this.setZipcode}
        />

        <Link
          className="button"
          to={{
            pathname: `/forecast/${zipcode}`,
            zipcode: zipcode
          }}
          onClick={this.checkForm}
        >
          Search
        </Link>
      </div>
    );
  }
}

module.exports = Searchbar;
