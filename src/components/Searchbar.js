var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');

// http://api.openweathermap.org/data/2.5/weather?zip=92092,us&appid=f3cbbe2a0f24bfb9df32da4e157f57d7&units=imperial
// http://api.openweathermap.org/data/2.5/forecast?zip=92092&appid=f3cbbe2a0f24bfb9df32da4e157f57d7&units=imperial

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
        this.setState(function() {
            return {
                zipcode: value
            }
        });
    }

    checkForm(e) {
        alert(this.state.zipcode);
        if (this.state.zipcode.length !== 5) {
            e.preventDefault();
            alert("Enter a 5-digit zipcode.");
        } 
    }

    render() {
        var zipcode = this.state.zipcode;

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
                            pathname: '/forecast/' + zipcode,
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
