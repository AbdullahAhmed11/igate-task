import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '@/app/components/ProductList';
jest.mock('./ProductCard', () => ({ product }: any) => (
  <div data-testid="product-card">{product.title}</div>
));

describe('ProductList', () => {
  test('renders no products message', () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText('No products found.')).toBeInTheDocument();
  });

  test('renders product cards', () => {
    const products = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' }
    ];
    render(<ProductList products={products} />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(2);
  });
});