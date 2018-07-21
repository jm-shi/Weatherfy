const React = require('react');
const Searchbar = require('./Searchbar');
const NavLink = require('react-router-dom').NavLink;

class Navbar extends React.Component {
    render() {
        return (
            <div className='header'>
                <NavLink style={{'fontSize': '5em'}} exact to='/'>WEATHER</NavLink>
                <div style={{ 'marginTop': '20px' }}>
                    <Searchbar />
                </div>
            </div>
        );
    }
}

module.exports = Navbar;