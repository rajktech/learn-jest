//import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('check data-test property', () => {
  const wrapper = shallow(<App />);
  const componentCheck = wrapper.find('[data-test="component-app"]');
  console.log(componentCheck.length);
  expect(componentCheck.length).toBe(1);
});

test('renders button', () => {
  const wrapper = shallow(<App />);
  const btn = wrapper.find('[data-test="inc-button"]');
  expect(btn.length).toBe(1);
});

test('renders increment counter', () => {
  const wrapper = shallow(<App />);
  const incDiv = wrapper.find('[data-test="inc-div"]');
  expect(incDiv.length).toBe(1);
});

test('check value inside count', () => {
  const wrapper = shallow(<App />);
  const countValue = wrapper.find('[data-test="count"]').text();
  expect(countValue).toBe('0');
});

test('find button, click increment and check span value', () => {
  const wrapper = shallow(<App />);
  // find the button
  const btn = wrapper.find('[data-test="inc-button"]');

  // click on button
  btn.simulate('click');

  // find span tag value
  const countvalue = wrapper.find('[data-test="count"]').text();

  // check incremented value
  expect(countvalue).toBe('1');

});

test('find button, click decrement button and check span value', () => {
  const wrapper = shallow(<App />);

  const incButton = wrapper.find('[data-test="inc-button"]');
  incButton.simulate('click');
  
  // find button
  const decBtn = wrapper.find('[data-test="dec-button"]');

  // click decrement button
  decBtn.simulate('click');

  //find span tag
  const countValue = wrapper.find('[data-test="count"]').text();
  expect(countValue).toBe("0");
});

test('test that 0 counter is not decrementing', () => {
  const wrapper = shallow(<App />);
  const decBtn = wrapper.find('[data-test="dec-button"]');
  decBtn.simulate('click');

  const counterValue = wrapper.find('[data-test="count"]').text();
  expect(counterValue).toBe("0");
});

test('check that error msg is showing is counter is  and decremented', () => {
  const wrapper = shallow(<App />);
  const decBtn = wrapper.find('[data-test="dec-button"]');
  decBtn.simulate('click');
  const errormsg = wrapper.find('[data-test="error"]');
  expect(errormsg.length).toBe(1);
});

test('check that error msg is there and when click increment error msg is gone', () => {
  const wrapper = shallow(<App />);
  const decBtn = wrapper.find('[data-test="dec-button"]');
  decBtn.simulate('click');
  const incBtn = wrapper.find('[data-test="inc-button"]');
  incBtn.simulate('click');
  const errormsg = wrapper.find('[data-test="error"]');
  expect(errormsg.length).toBe(0);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
