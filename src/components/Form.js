var React = require('react');
var api = require('../functions/api');

// http://api.openweathermap.org/data/2.5/weather?zip=92092,us&appid=f3cbbe2a0f24bfb9df32da4e157f57d7&units=imperial
// http://api.openweathermap.org/data/2.5/forecast?zip=92092&appid=f3cbbe2a0f24bfb9df32da4e157f57d7&units=imperial

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: ''
        }

        this.setZipcode = this.setZipcode.bind(this);
        this.getWeather = this.getWeather.bind(this);
    }

    setZipcode(event) {
        var value = event.target.value;
        this.setState(function() {
            return {
                zipcode: value
            }
        });
    }

    getWeather() {
        api.fetchCurrentWeather(this.state.zipcode);
        api.fetchForecast(this.state.zipcode);
    }

    render() {
        var zipcode = this.state.zipcode;

        return (
            <div className='container'>
                <form className='searchWeather'>
                    <label id='searchLabel' htmlFor='searchBar'>Enter a zip code</label>
                    <input
                    id='searchBar'
                    type='text'
                    placeholder='92092' 
                    value={this.state.zipcode} 
                    onChange={this.setZipcode} />
                    <button id='searchButton' 
                            type='button'
                            disabled={!this.state.zipcode}
                            onClick={this.getWeather}>Get Weather</button>
                </form>
            </div>
        );
    }
}


module.exports = Form;