import React from 'react';
import Navbar from './Navbar';
import Today from './Today';
import FiveDay from './FiveDay';
import PropTypes from 'prop-types';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTodayWeather: true
    };
    this.setToday = this.setToday.bind(this);
    this.setFiveDay = this.setFiveDay.bind(this);
  }

  setToday() {
    this.setState(() => ({ showTodayWeather: true }));
  }

  setFiveDay() {
    this.setState(() => ({ showTodayWeather: false }));
  }

  render() {
    const { showTodayWeather } = this.state;
    const { zipcode } = this.props.match.params;

    return (
      <div style={{ color: 'rgb(255,255,255)' }}>
        <Navbar />

        <div className="nav">
          <button
            className={'button ' + (showTodayWeather ? 'active' : '')}
            onClick={this.setToday}
          >
            Today
          </button>
          <button
            className={'button ' + (showTodayWeather ? '' : 'active')}
            onClick={this.setFiveDay}
          >
            5-Day
          </button>
        </div>

        {showTodayWeather ? (
          <div className="weather-data">
            <Today data={zipcode} />
          </div>
        ) : (
          <div className="weather-data">
            <FiveDay data={zipcode} />
          </div>
        )}
      </div>
    );
  }
}

Forecast.defaultProps = {
  zipcode: '92092'
};

Forecast.propTypes = {
  zipcode: PropTypes.string
};

module.exports = Forecast;
