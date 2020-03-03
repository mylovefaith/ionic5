import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { render, fireEvent, waitForElement } from '@testing-library/react';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const { asFragment, container } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
