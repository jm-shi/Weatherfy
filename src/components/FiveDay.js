const React = require('react');
const api = require('../utils/api');
const formatter = require('../utils/formatter.js');
const formatDate = formatter.formatDate;
const formatTime = formatter.formatTime;
const toCelsius = formatter.toCelsius;

class FiveDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: null,
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
        api.fetchForecast(zipcode).then((data) =>
            this.setState(() => ({
                forecastData: data,
                isLoading: false
            })));
    }

    render() {
        const { isLoading, forecastData } = this.state;
        return (
            <div>

                {(isLoading || forecastData == null)
                ? <p style={{fontSize: '5vw'}}>Loading...</p>
                : <div className='weather-container'>
                    <table>
                        <tbody style={{textAlign: 'center',  padding: '2px'}}>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Temperature</th>
                                <th>Conditions</th>
                            </tr>
                            
                            {forecastData.list.map(item =>
                                <tr key={item.dt} >
                                    <td><img src={'../src/images/' + item.weather[0].icon + '.svg'}/></td>
                                    <td>{formatDate(item.dt)}</td>
                                    <td>{formatTime(item.dt)}</td>
                                    <td>{Math.round(item.main.temp)}°F / {Math.round(toCelsius(item.main.temp))}°C</td>
                                    <td>{item.weather[0].description}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                }

            </div>
        )
    }
}

module.exports = FiveDay;