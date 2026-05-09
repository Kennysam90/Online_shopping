export const formatPrice = (amount = 0) => `$${Number(amount).toFixed(2)}`
export const formatDate = (value) => new Date(value).toLocaleDateString()
