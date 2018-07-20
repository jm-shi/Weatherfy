var React = require('react');
var Zipcode = require('./Zipcode');
var Navbar = require('./Navbar');

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Zipcode />
            </div>
        );
    }
}

module.exports = Home;



