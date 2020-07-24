import React from 'react';
import { shallow } from 'enzyme';

import CardList from './card-list.component'

describe('CardList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardList label="Hit"/>);
  });

  it('should render CardList component', () => {
    expect(wrapper).toMatchSnapshot();
  });

});