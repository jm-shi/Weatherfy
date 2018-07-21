var React = require('react');
var api = require('../utils/api');
var formatter = require('../utils/formatter.js');
var formatDate = formatter.formatDate;
var formatTime = formatter.formatTime;
var toCelsius = formatter.toCelsius;

class FiveDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: null,
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
        api.fetchForecast(zipcode).then(function(data) {
            this.setState(function() {
                return {
                    forecastData: data,
                    isLoading: false
                }
            })
        }.bind(this))
    }

    render() {
        console.log("five day data",this.state.forecastData);
        return (
            <div>

                {(this.state.isLoading || this.state.forecastData == null)
                ? <p>Loading five-day data...</p>
                : <div className='weatherContainer'>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Temperature</th>
                                <th>Conditions</th>
                            </tr>
                            
                            { this.state.forecastData.list.map(function(item) {
                                return (
                                <tr key={item.dt}>
                                    <td><img src={'../src/images/' + item.weather[0].icon + '.svg'}/></td>
                                    <td>{formatDate(item.dt)}</td>
                                    <td>{formatTime(item.dt)}</td>
                                    <td>{Math.round(item.main.temp)}°F / {Math.round(toCelsius(item.main.temp))}°C</td>
                                    <td>{item.weather[0].description}</td>
                                </tr>
                                )
                            }, this) }
                            
                        </tbody>
                    </table>
                </div>
                }

            </div>
        )
    }
}

module.exports = FiveDay;