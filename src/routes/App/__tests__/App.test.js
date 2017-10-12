import React from 'react';
import { App } from './../App'
import { shallow, mount } from 'enzyme'

describe('<App/>', () => {
  test('basic render', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  })
});