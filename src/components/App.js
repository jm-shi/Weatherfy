const React = require('react');
const Home = require('./Home');
const Forecast = require('./Forecast');
const FiveDay = require('./FiveDay');
const ReactRouter = require('react-router-dom');
const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/forecast/:zipcode' component={Forecast} />
                    <Route render={() =>
                            <div id='not-found'>
                                <div id='not-found-header'>404</div>
                                <div id='not-found-text'>Page Not Found</div>
                            </div> } />
                </Switch>
            </BrowserRouter>
        );
    }
}

module.exports = App;