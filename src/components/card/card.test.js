import React from 'react';
import { shallow } from 'enzyme';

import Card from './card.component'

describe('Card component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card label="4"/>);
  });

  it('should render CardList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});