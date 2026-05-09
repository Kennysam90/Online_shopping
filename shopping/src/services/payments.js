import { apiRequest } from './api.js'

export const processPayment = (payload) => apiRequest('/payments', { method: 'POST', body: payload })
