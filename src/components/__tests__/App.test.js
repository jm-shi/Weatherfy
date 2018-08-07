import React from 'react';
import App from '../App.js';
import { shallow } from 'enzyme';

test('should render App correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
