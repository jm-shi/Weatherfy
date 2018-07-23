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
                humidity:  data.main.humidity + '%',
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
                ? <p style={{fontSize: '5vw'}}>Loading...</p>
                :   
                <div className='weather-container'>
                    <div>
                        <div className='data-header'>{name}</div>
                        <div className='data-subheader'>{f_temp} / {c_temp}</div>
                        <div className='data-subheader'>{description}</div><br/>
                        <div className='data-details'>High: {f_temp_max} / {c_temp_max}</div>
                        <div className='data-details'>Low: {f_temp_min} / {c_temp_min}</div>
                        <div className='data-details'>Humidity: {humidity}</div>
                        <div className='data-details'>Sunrise: {sunrise}</div>
                        <div className='data-details'>Sunset: {sunset}</div>
                    </div>
                
                    <div>
                        
                        <img src={`https://openweathermap.org/img/w/${icon}.png`} className='icon' />
                    </div>
                </div>
                }

            </div>
        );
    }
}

module.exports = Today;