const React = require('react');
const Searchbar = require('./Searchbar');
const NavLink = require('react-router-dom').NavLink;

class Navbar extends React.Component {
    render() {
        const { onHomePage } = this.props;
        return (
            <div className='header'>
                {(onHomePage)
                    ? <NavLink className='home logo' exact to='/'>WEATHER</NavLink>
                    : <NavLink className='logo' exact to='/'>WEATHER</NavLink>}
                {(onHomePage)
                    ? <span></span>
                    : <div style={{ 'marginTop': '20px' }}><Searchbar /></div> }
            </div>
        );
    }
}

module.exports = Navbar;