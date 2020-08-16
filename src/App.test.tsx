import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


import { shallow } from 'enzyme';


describe("shoulder render",()=>{
  let wrapper:any;
  let defaultProps:any;
  beforeAll(()=>{
    defaultProps={
      inputchecked:true,
      inputVal:"abc"
    }
  })

  beforeEach(()=>{
     wrapper= shallow(<App {...defaultProps}/>)
  })

  test('renders h1', () => {

    expect(wrapper.find("h1").text()).toBe("this is counter app")
  });
  test('renders increment-btn', () => {

    expect(wrapper.find("#increment-btn").text()).toBe("increment-btn")
  });
  test('renders decrement-btn', () => {

    expect(wrapper.find("#decrement-btn").text()).toBe("decrement-btn")
  });

  test('renders counter-value', () => {
    expect(wrapper.find("#counter-value").text()).toBe("0")
  });

  test('renders increment and decrement ', () => {
    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find("#decrement-btn").simulate("click")
    expect(wrapper.find("#counter-value").text()).toBe("44")
    console.log(wrapper.debug())
  });

  test('renders state change', () => {

    wrapper.find("#increment-btn").simulate("click")
    expect(wrapper.state("counter")).toBe(0)
  });
  test('checkbox checked', () => {

    wrapper.setProps({inputchecked:false})
    expect(wrapper.find("#check").props().checked).toBeFalsy()
  });

  test('test the props value to input', () => {
    expect(wrapper.find("#ipt").prop("value")).toEqual("abc")
  });

})

