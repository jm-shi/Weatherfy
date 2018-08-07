import React from 'react';
import Today from '../Today.js';
import { shallow } from 'enzyme';

test('should render Today correctly', () => {
  const wrapper = shallow(<Today />);
  expect(wrapper).toMatchSnapshot();
});
