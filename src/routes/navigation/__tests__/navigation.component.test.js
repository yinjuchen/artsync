import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CategoriesProvider } from '../../../contexts/categories.context'
import Navigation from '../../navigation/navigation.component'
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

test('renders navigation links correctly', () => {
  renderWithProviders(<Navigation />);

  // Assert the presence of navigation links
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Art Exhibition')).toBeInTheDocument();
  expect(screen.getByText('Art Gallery')).toBeInTheDocument();
  expect(screen.getByText('Art Quote')).toBeInTheDocument();

  // You can add more specific assertions if needed, like checking hrefs or other properties
});
