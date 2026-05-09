import { apiRequest } from './api.js'

export const getReviews = (productId) => apiRequest(`/products/${productId}/reviews`)
