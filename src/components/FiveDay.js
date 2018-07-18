var React = require('react');
var formatter = require('../utils/formatter.js');
var formatDate = formatter.formatDate;
var formatTime = formatter.formatTime;
var toCelsius = formatter.toCelsius;

class FiveDay extends React.Component {
    render() {
        console.log("five day:",this.props.data);
        return (
            <div>
                <div className='container'>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Temperature</th>
                                <th>Conditions</th>
                            </tr>
                            { this.props.data.list.map(function(item) {
                                return (
                                <tr key={item.dt}>
                                    <td><img src={'src/images/' + item.weather[0].icon + '.svg'}/></td>
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
            </div>
        )
    }
}

module.exports = FiveDay;