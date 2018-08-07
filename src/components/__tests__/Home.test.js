import React from 'react';
import Home from '../Home.js';
import { shallow } from 'enzyme';

test('should render Home correctly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
