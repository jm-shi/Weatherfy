var React = require('react');
var Form = require('./Form');
var Header = require('./Header');

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Form />
            </div>
        );
    }
}

module.exports = Home;



