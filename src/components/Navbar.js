var React = require('react');
var Searchbar = require('./Searchbar');
var NavLink = require('react-router-dom').NavLink;

class Navbar extends React.Component {
    render() {
        return (
            <div className='header'>
                <NavLink style={{'fontSize': '5em'}} exact to='/'>WEATHER</NavLink>
                <div style={{ 'margin-top': '20px' }}>
                    <Searchbar />
                </div>
            </div>
        );
    }
}

module.exports = Navbar;