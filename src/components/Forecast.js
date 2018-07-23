const React = require('react');
const Navbar = require('./Navbar');
const Today = require('./Today');
const FiveDay = require('./FiveDay');
const api = require('../utils/api');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTodayWeather: true
        }
        this.setToday = this.setToday.bind(this);
        this.setFiveDay = this.setFiveDay.bind(this);
    }

    setToday() {
        this.setState(() => ({ showTodayWeather: true }))
    }

    setFiveDay() {
        this.setState(() => ({ showTodayWeather: false }))
    }

    render() {
        const { showTodayWeather } = this.state
        const { zipcode } = this.props.match.params

        return (
            <div style={{ color: 'rgb(255,255,255)' }}>
                <Navbar />
                
                <div className='nav'>
                    <button className={'button ' + (showTodayWeather ? 'active' : '')} onClick={this.setToday}>
                        Today
                    </button>
                    <button className={'button ' + (showTodayWeather ? '' : 'active')} onClick={this.setFiveDay}>
                        5-Day
                    </button>
                </div>

                {(showTodayWeather)
                ? <div className='weather-data'>
                    <Today data={zipcode} />
                  </div> 
                : <div className='weather-data'>
                    <FiveDay data={zipcode}/>
                </div>}

            </div>
        );
    }
}

module.exports = Forecast;