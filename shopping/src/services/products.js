import { apiRequest } from './api.js'

export const getProducts = () => apiRequest('/products')
export const getProductById = (id) => apiRequest(`/products/${id}`)
