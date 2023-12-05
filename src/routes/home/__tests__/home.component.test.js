import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CategoriesProvider } from '../../../contexts/categories.context';
import Home from '../home.component';
import React from 'react';

// Wrap your component rendering with the necessary providers and Router
const renderWithProviders = (component) => {
  return render(
    <React.StrictMode>
      <BrowserRouter>
        <CategoriesProvider>
          {component}
        </CategoriesProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

test('renders home cover image correctly', async () => {
  renderWithProviders(<Home />);

  const homeCoverImage = screen.getByTestId('home-cover-image');
  expect(homeCoverImage).toBeInTheDocument();

  await waitFor(() => {
    expect(homeCoverImage).toBeVisible();
  });

  // await waitFor(() => {
  //   expect(homeCoverImage.complete).toBe(true);
  // });

  await waitFor(() => {
    expect(screen.getByText('“Art is the expression of the profoundest thoughts in the simplest way.”- Albert Einstein')).toBeInTheDocument();
  });

});



