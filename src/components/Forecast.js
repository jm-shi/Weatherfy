var React = require('react');
var api = require('../functions/api');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currWeatherData: null,
            forecastData: null
        }
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        var zipcode = this.props.location.zipcode;
        this.updateData(zipcode);
    }

    updateData(zipcode) {
        var zipcode = this.props.location.zipcode || 92092;
        api.fetchCurrentWeather(zipcode).then(function(data) {
            this.setState(function() {
                return {
                    currWeatherData: data
                }
            })
        }.bind(this));
        
        api.fetchForecast(zipcode).then(function(data) {
            this.setState(function() {
                return {
                    forecastData: data
                }
            })
        }.bind(this))
    }

    render() {
        return (
            <div>
                Forecast
            </div>
        );
    }
}

module.exports = Forecast;