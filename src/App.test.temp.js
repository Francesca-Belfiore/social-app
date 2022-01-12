import { render, screen } from '@testing-library/react';
//testing-library è una delle librerie più utilizzate per il testing
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
