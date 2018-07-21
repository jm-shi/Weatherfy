var React = require('react');
var Navbar = require('./Navbar');
var Today = require('./Today');
var FiveDay = require('./FiveDay');
var api = require('../utils/api');

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTodayWeather: true
        }
        this.updateData = this.updateData.bind(this);
        this.setToday = this.setToday.bind(this);
        this.setFiveDay = this.setFiveDay.bind(this);
    }

    componentDidMount() {
        console.log("this.props", this.props);
        var zipcode = this.props.match.params.zipcode;
        this.updateData(zipcode);
    }

    updateData(zipcode) {
        var zipcode = this.props.match.params.zipcode || 92092;
    }

    setToday() {
        this.setState(function() {
            return {
                showTodayWeather: true
            }
        })
    }

    setFiveDay() {
        this.setState(function() {
            return {
                showTodayWeather: false
            }
        })
    }

    render() {
        return (
            <div style={{ 'color': 'rgb(255,255,255)' }}>
                <Navbar />
                
                <div className='nav'>
                    <button className={'button ' + (this.state.showTodayWeather ? 'active' : '')} onClick={this.setToday}>
                        Today
                    </button>
                    <button className={'button ' + (this.state.showTodayWeather ? '' : 'active')} onClick={this.setFiveDay}>
                        5-Day
                    </button>
                </div>

                {(this.state.showTodayWeather)
                ? <div className='weatherData'>
                    <Today data={this.props.match.params.zipcode} />
                  </div> 
                : <div className='weatherData'>
                    <FiveDay data={this.props.match.params.zipcode}/>
                </div>}

            </div>
        );
    }
}

module.exports = Forecast;