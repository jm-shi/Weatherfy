import React from 'react';
import FiveDay from '../FiveDay.js';
import { shallow } from 'enzyme';

test('should render FiveDay correctly', () => {
  const wrapper = shallow(<FiveDay />);
  expect(wrapper).toMatchSnapshot();
});
