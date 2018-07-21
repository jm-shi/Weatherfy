const React = require('react');
const Zipcode = require('./Zipcode');
const Navbar = require('./Navbar');

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



