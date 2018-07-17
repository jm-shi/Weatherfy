var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');

// http://api.openweathermap.org/data/2.5/weather?zip=92092,us&appid=f3cbbe2a0f24bfb9df32da4e157f57d7&units=imperial
// http://api.openweathermap.org/data/2.5/forecast?zip=92092&appid=f3cbbe2a0f24bfb9df32da4e157f57d7&units=imperial

class Form extends React.Component {
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
        if (this.state.zipcode.length !== 5) {
            e.preventDefault();
            alert("Enter a 5-digit zipcode.");
        }
    }

    render() {
        var zipcode = this.state.zipcode;

        return (
            <div>
                <form className='searchWeather'>
                    <label id='searchLabel' htmlFor='searchBar'>Enter a zip code</label>
                    <input
                    id='searchBar'
                    type='text'
                    placeholder='92092' 
                    value={this.state.zipcode} 
                    onChange={this.setZipcode} />

                    <Link className='button' 
                          to={
                              {
                                  pathname: '/forecast',
                                  zipcode: this.state.zipcode
                              }
                          }
                          onClick={this.checkForm} >
                        Get Weather
                    </Link>
                   
                </form>
            </div>
        );
    }
}

/*  <button id='searchButton' 
                            type='button'
                            disabled={!this.state.zipcode}
                            onClick={this.getWeather}>Get Weather</button>
                            */


module.exports = Form;