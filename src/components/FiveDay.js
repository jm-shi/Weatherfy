const React = require('react');
const Temperature = require('./Temperature');
const api = require('../utils/api');
const formatter = require('../utils/formatter.js');
const formatDate = formatter.formatDate;
const formatShortDate = formatter.formatShortDate;
const formatTime = formatter.formatTime;
const formatShortTime = formatter.formatShortTime;
const toCelsius = formatter.toCelsius;

class FiveDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: null,
            isLoading: true,
            useFahrenheit: true
        }
        this.useFahrenheit = this.useFahrenheit.bind(this);
    }

    componentDidMount() {
        this.updateData(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        this.updateData(nextProps.data);
    }

    useFahrenheit(result) {
        this.setState({ useFahrenheit: result })
    }

    updateData(zipcode) {
        api.fetchForecast(zipcode).then((data) =>
            this.setState(() => ({
                forecastData: data,
                isLoading: false
            })));
    }

    render() {
        const { isLoading, forecastData, useFahrenheit } = this.state;
        return (
            <div>
                {(isLoading || forecastData == null)
                ? <p style={{fontSize: '5vw'}}>Loading...</p>
                : <div className='weather-container'>
                    
                    <table>
                        <caption className='data-header' style={{marginBottom: '2vw'}}>{forecastData.city.name}</caption>
                        <tbody style={{textAlign: 'center'}}>
                            <tr className='five-day data-subheader'>
                                <th className='five-day data-details'></th>
                                <th className='five-day data-details'>Date</th>
                                <th className='five-day data-details'>Time</th>
                                <th className='five-day data-details'>Temperature</th>
                                <th className='five-day data-details conditions'>Conditions</th>
                            </tr>

                            {forecastData.list.map(item =>
                                <tr key={item.dt}>
                                    <td className='five-day data-details'><img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} /></td>
                                    <td className='five-day data-details short-date'>{formatShortDate(item.dt)}</td>
                                    <td className='five-day data-details long-date'>{formatDate(item.dt)}</td>
                                    <td className='five-day data-details short-time'>{formatShortTime(item.dt)}</td>
                                    <td className='five-day data-details long-time'>{formatTime(item.dt)}</td>
                                    <td className='five-day data-details'>{useFahrenheit 
                                        ? `${Math.round(item.main.temp)}°F`
                                        : `${Math.round(toCelsius(item.main.temp))}°C`}</td>
                                    <td className='five-day data-details conditions'>{item.weather[0].description}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                }
                <Temperature useFahrenheit={this.useFahrenheit} />
            </div>
        )
    }
}

module.exports = FiveDay;