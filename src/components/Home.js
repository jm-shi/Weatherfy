var React = require('react');
var Form = require('./Form');
var Navbar = require('./Navbar');

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Form />
            </div>
        );
    }
}

module.exports = Home;



