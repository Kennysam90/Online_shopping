import { apiRequest } from './api.js'

export const searchProducts = (query) => apiRequest(`/search?q=${encodeURIComponent(query)}`)
