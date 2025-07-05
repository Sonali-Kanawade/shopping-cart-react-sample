import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <div>Home Route</div>,
  },
];


test('renders learn react link', async() => {
  render(<App />);
  // Replace this with actual text expected on your default route
    const element = await screen.findByText(/home/i); // e.g., "Home Page"
    expect(element).toBeInTheDocument();
});


test('renders route via RouterProvider', async () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });

  render(<RouterProvider router={router} />);

  expect(await screen.findByText('Home Route')).toBeInTheDocument();
});