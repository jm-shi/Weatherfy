var React = require('react');
var api = require('../utils/api');
var formatter = require('../utils/formatter.js');

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            f_temp: '',
            f_temp_max: '',
            f_temp_min: '',
            c_temp: '',
            c_temp_max: '',
            c_temp_min: '',
            humiditiy: '',
            sunrise: '',
            sunset: '',
            description: '',
            icon: '',
            isLoading: true
        }

        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.updateData(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps.data);
    }

    updateData(zipcode) {
        api.fetchCurrentWeather(zipcode).then(function(data) {
            console.log('weather', data);
            this.setState(function() {
                return {
                    name: data.name,
                    f_temp: Math.round(data.main.temp) + '°F',
                    f_temp_max: Math.round(data.main.temp_max) + '°F',
                    f_temp_min: Math.round(data.main.temp_min) + '°F',
                    c_temp: formatter.toCelsius(data.main.temp_min) + '°C',
                    c_temp_max: formatter.toCelsius(data.main.temp_max) + '°C',
                    c_temp_min: formatter.toCelsius(data.main.temp_min) + '°C',
                    humiditiy:  data.main.humidity + '%',
                    sunrise: formatter.formatTime(data.sys.sunrise),
                    sunset: formatter.formatTime(data.sys.sunset),
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    isLoading: false
                }
            })
        }.bind(this));
    }

    render() {
        console.log("render today");
        return (
            <div>
            
                {(this.state.isLoading)
                ? <p>Loading today data...</p>
                :   
                <div className='weatherContainer'>
                    <div>
                        <div className='data' style={{'fontSize': '5em', }}>{this.state.name}</div>
                        <div className='data' style={{'fontSize': '4em', }}>{this.state.f_temp} / {this.state.c_temp}</div>
                        <div className='data' style={{'fontSize': '4em', }}>{this.state.description}</div><br/>
                        <div className='data' style={{'fontSize': '2em', }}>High: {this.state.f_temp_max} / {this.state.c_temp_max}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Low: {this.state.f_temp_min} / {this.state.c_temp_min}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Humidity: {this.state.humiditiy}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Sunrise: {this.state.sunrise}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Sunset: {this.state.sunset}</div>
                    </div>
                
                    <div>
                        <img src={`../src/images/${this.state.icon}.svg`} className='icon' />
                    </div>
                </div>
                }

            </div>
        );
    }
}

module.exports = Today;