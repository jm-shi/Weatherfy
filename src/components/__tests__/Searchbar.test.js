import React from 'react';
import Searchbar from '../Searchbar.js';
import { shallow } from 'enzyme';

test('should render Searchbar correctly', () => {
  const wrapper = shallow(<Searchbar />);
  expect(wrapper).toMatchSnapshot();
});
