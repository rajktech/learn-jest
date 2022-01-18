//import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
  //console.log(wrapper.exists());
});

test('check data-test property', () => {
  const wrapper = shallow(<App />);
  const componentCheck = wrapper.find('[data-test="component-app"]');
  console.log(componentCheck.length);
  expect(componentCheck.length).toBe(1);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
