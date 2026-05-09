import { apiRequest } from './api.js'

export const loginUser = (payload) => apiRequest('/auth/login', { method: 'POST', body: payload })
