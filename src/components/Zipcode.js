const React = require('react');
const Searchbar = require('./Searchbar');
const Link = require('react-router-dom').Link;
const api = require('../utils/api');

class Zipcode extends React.Component {
    render() {
        return (
            <div>
                <form className='form'>
                    <div className='formContainer'>
                        <label id='searchLabel' htmlFor='searchBar'>Get weather by zipcode</label>
                        <Searchbar />
                    </div> 
                </form>
            </div>
        )
    }
}

module.exports = Zipcode;