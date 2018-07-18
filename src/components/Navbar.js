var React = require('react');
var Form = require('./Form');
var NavLink = require('react-router-dom').NavLink;

class Navbar extends React.Component {
    render() {
        return (
            <div className='header'>
                
                <NavLink exact to='/'>WEATHER</NavLink>
                <div>
                    
                </div>
            </div>
        );
    }
}

module.exports = Navbar;