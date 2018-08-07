import React from 'react';
import Zipcode from '../Zipcode.js';
import { shallow } from 'enzyme';

test('should render Zipcode correctly', () => {
  const wrapper = shallow(<Zipcode />);
  expect(wrapper).toMatchSnapshot();
});
