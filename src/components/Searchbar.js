const React = require('react');
const Link = require('react-router-dom').Link;
const api = require('../utils/api');

class Searchbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: ''
        }

        this.setZipcode = this.setZipcode.bind(this);
        this.checkForm = this.checkForm.bind(this);
    }

    setZipcode(e) {
        var value = e.target.value;
        this.setState(() => ({zipcode: value}))
    }

    checkForm(e) {
        if (this.state.zipcode.length !== 5) {
            e.preventDefault();
            alert("Enter a 5-digit zipcode.");
        } 
    }

    render() {
        const { zipcode } = this.state;

        return (
            <div style={{'display': 'flex'}}>
                <input
                    id='searchBar'
                    type='text'
                    placeholder='Enter a zipcode' 
                    value={zipcode} 
                    onChange={this.setZipcode} />


                <Link className='button' 
                    to={
                        {
                            pathname: `/forecast/${zipcode}`,
                            zipcode: zipcode
                        }
                    }
                    onClick={this.checkForm} >
                    Search
                </Link>
            </div>
        );
    }
}

module.exports = Searchbar;
