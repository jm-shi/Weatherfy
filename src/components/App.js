var React = require('react');
var Home = require('./Home');
var Forecast = require('./Forecast');
var FiveDay = require('./FiveDay');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/forecast/:zipcode' component={Forecast} />
                    <Route render={function() {
                        return <div id='notFound'>
                                <div id='notFoundHeader'>404</div>
                                <div id='notFoundText'>Page Not Found</div>
                            </div> }} />
                </Switch>
            </BrowserRouter>
        );
    }
}

module.exports = App;