const React = require('react');

class Temperature extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showFahrenheit: true
        }

        this.useFahrenheit = this.useFahrenheit.bind(this);
        this.useCelsius = this.useCelsius.bind(this);
    }

    useFahrenheit() {
        this.setState({showFahrenheit: true}, () => {
            this.props.useFahrenheit(this.state.showFahrenheit);
        })
    }

    useCelsius() {
        this.setState({showFahrenheit: false}, () => {
            this.props.useFahrenheit(this.state.showFahrenheit);
        })
    }

    render() {
        const { showFahrenheit } = this.state;

        return (
            <div>
                <form>
                    <input type='radio' id='radio-f' value='F' checked={showFahrenheit} readOnly /> 
                    <label htmlFor='radio-f' onClick={this.useFahrenheit}>Fahrenheit</label>
                    <input type='radio' id='radio-c' value='C' checked={!showFahrenheit} readOnly />
                    <label htmlFor='radio-c' onClick={this.useCelsius}>Celsius</label> 
                </form>
            </div>
        )
    }
}

module.exports = Temperature;