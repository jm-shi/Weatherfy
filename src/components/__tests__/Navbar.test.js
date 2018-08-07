import React from 'react';
import Navbar from '../Navbar.js';
import { shallow } from 'enzyme';

test('should render Navbar correctly', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
