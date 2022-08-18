import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('renders learn react link', () => {
  render(<LoginForm />);
  const linkElement = screen.getElementById(/lb-username/i);
  expect(linkElement).toBeInTheDocument();
});