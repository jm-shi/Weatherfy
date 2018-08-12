import React from 'react';
import Forecast from '../Forecast.js';
import { shallow } from 'enzyme';

test('should render Forecast correctly', () => {
  const match = { params: { zipcode: '92092' } };
  const wrapper = shallow(<Forecast match={match} />);
  expect(wrapper).toMatchSnapshot();
});
