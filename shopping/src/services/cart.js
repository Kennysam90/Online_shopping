import { apiRequest } from './api.js'

export const getCart = () => apiRequest('/cart')
