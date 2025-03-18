import axios from 'axios';
import { Product } from '../types';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
};

export const getCategories = async (): Promise<string[]> => {
    const response = await api.get('/products/categories');
    return response.data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
}; 