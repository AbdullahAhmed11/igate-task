import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async (category: string, skip: number, limit: number, priceRange: [number, number]) => {
  try {
    let url = `/products?limit=${limit}&skip=${skip}`;
    if (category) {
      url = `/products/category/${category}?limit=${limit}&skip=${skip}`;
    }
    const response = await api.get(url);
    const filteredProducts = response.data.products.filter((product: any) => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    return { products: filteredProducts, total: response.data.total };
  } catch (error) {
    throw new Error(`Failed to fetch products: ${error}`);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error}`);
  }
};
