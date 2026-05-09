import { apiRequest } from './api.js'

export const getOrders = () => apiRequest('/orders')
