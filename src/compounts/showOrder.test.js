import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { expect } from 'chai';
import MainApp from './MainApp.js'

import OrderDtails from './OrderDtails'
import { shallow , mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = mount(< OrderDtails numberOfmeat = {1}/>);
    expect(wrapper.props().numberOfmeat).to.equal(1);
    wrapper.setProps({ numberOfmeat : 2 });
    expect(wrapper.props().numberOfmeat).to.equal(2);
  });
})

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow (< MainApp />);
    expect(wrapper.find(OrderDtails)).to.have.lengthOf(1) ;
  });
})
