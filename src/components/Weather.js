var React = require('react');
var formatter = require('../utils/formatter.js');
var formatDate = formatter.formatDate;

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            temp: '',
            temp_max: '',
            temp_min: '',
            humiditiy: '',
            sunrise: '',
            sunset: '',
            description: '',
            icon: ''
        }

        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.updateData(this.props.data);
    }

    updateData(data) {
        if (data) {
            var sunrise = data.sys.sunrise;
            var sunriseObj = formatter.formatDate(sunrise);
            var sunset = data.sys.sunset;
            var sunsetObj = formatter.formatDate(sunset);

            this.setState(function() {
                return {
                    name: data.name,
                    temp: data.main.temp + '°F',
                    temp_max: data.main.temp_max + '°F',
                    temp_min: data.main.temp_min + '°F',
                    humiditiy:  data.main.humidity + '%',
                    sunrise: sunriseObj.time,
                    sunset: sunsetObj.time,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                }
            });
        }
    }

    capitalize(str) {
        return str.toLowerCase().split(' ').map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
          }).join(' ');
    }

    toLocalDate (inDate) {
        var date = new Date();
        date.setTime(inDate.valueOf() - 60000 * inDate.getTimezoneOffset());
        return date;
    }

    render() {
        return (
            <div>
               <img src={'src/images/' + this.state.icon + '.svg'} alt='logo' />
               <div>{this.state.name}</div>
               <div>{this.state.temp}</div>
               <div>{this.state.temp_max}</div>
               <div>{this.state.temp_min}</div>
               <div>{this.state.humiditiy}</div>
               <div>{this.state.sunrise}</div>
               <div>{this.state.sunset}</div>
               <div>{this.state.description}</div>
            </div>
        );
    }
}

module.exports = Weather;