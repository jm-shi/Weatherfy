import React from 'react';
import Home from './Home';
import Forecast from './Forecast';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast/:zipcode" component={Forecast} />
          <Route
            render={() => (
              <div id="not-found">
                <div id="not-found-header">404</div>
                <div id="not-found-text">Page Not Found</div>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

module.exports = App;
