import React from 'react';
import Temperature from '../Temperature.js';
import { shallow } from 'enzyme';

test('should render Temperature correctly', () => {
  const wrapper = shallow(<Temperature />);
  expect(wrapper).toMatchSnapshot();
});
