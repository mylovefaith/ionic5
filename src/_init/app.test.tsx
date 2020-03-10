import React from 'react';
import App from './app';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
