const React = require('react');
const api = require('../utils/api');
const formatter = require('../utils/formatter.js');

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
            humidity: '',
            sunrise: '',
            sunset: '',
            description: '',
            icon: '',
            isLoading: true
        }
    }

    componentDidMount() {
        this.updateData(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps.data);
    }

    updateData(zipcode) {
        api.fetchCurrentWeather(zipcode).then((data) => 
            this.setState(() => ({
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
            })))
    }

    render() {
        const { isLoading, name, f_temp, c_temp, description, f_temp_max, f_temp_min, c_temp_max, c_temp_min,
                humidity, sunrise, sunset, icon} = this.state;
        return (
            <div>
            
                {(isLoading)
                ? <p style={{fontSize: '2em'}}>Loading...</p>
                :   
                <div className='weatherContainer'>
                    <div>
                        <div className='data' style={{'fontSize': '5em', }}>{name}</div>
                        <div className='data' style={{'fontSize': '4em', }}>{f_temp} / {c_temp}</div>
                        <div className='data' style={{'fontSize': '4em', }}>{description}</div><br/>
                        <div className='data' style={{'fontSize': '2em', }}>High: {f_temp_max} / {c_temp_max}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Low: {f_temp_min} / {c_temp_min}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Humidity: {humidity}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Sunrise: {sunrise}</div>
                        <div className='data' style={{'fontSize': '2em', }}>Sunset: {sunset}</div>
                    </div>
                
                    <div>
                        <img src={`../src/images/${icon}.svg`} className='icon' />
                    </div>
                </div>
                }

            </div>
        );
    }
}

module.exports = Today;