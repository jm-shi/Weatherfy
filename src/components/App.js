var React = require('react');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/forecast' component={Forecast} />
                        <Route render={function() {
                            return <div id='notFound'>
                                    <div id='notFoundHeader'>404</div>
                                    <div id='notFoundText'>Page Not Found</div>
                                  </div> }} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

module.exports = App;