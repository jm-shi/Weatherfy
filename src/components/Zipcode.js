var React = require('react');
var Searchbar = require('./Searchbar');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');

class Zipcode extends React.Component {
    render() {
        return (
            <div>
                <form className='form'>
                    <div className='formContainer'>
                        <label id='searchLabel' htmlFor='searchBar'>Get weather by zipcode</label>
                        <Searchbar/>
                    </div> 
                </form>
            </div>
        )
    }
}


module.exports = Zipcode;