export async function apiRequest(endpoint, options = {}) {
  return Promise.resolve({ endpoint, options, data: [] })
}
