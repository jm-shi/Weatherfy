import React from 'react';
import App from '../App.js';
import Home from '../Home.js';
import Navbar from '../Navbar.js';
import Searchbar from '../Searchbar.js';
import Zipcode from '../Zipcode.js';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('<App />', () => {
    it('should render correctly', () => {
      const output = shallow(<App />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

describe('<Home />', () => {
    it('should render correctly', () => {
      const output = shallow(<Home />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

describe('<Navbar />', () => {
    it('should render correctly', () => {
      const output = shallow(<Navbar />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

describe('<Searchbar />', () => {
    it('should render correctly', () => {
      const output = shallow(<Searchbar />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

describe('<Zipcode />', () => {
    it('should render correctly', () => {
      const output = shallow(<Zipcode />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});
