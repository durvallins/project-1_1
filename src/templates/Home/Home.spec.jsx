/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import { Home } from '.';

/* eslint-disable no-undef */
describe('<Home />', () => {
  it('should render search, posts and load more', () => {
    render(<Home />);
    screen.debug();
  });
});
