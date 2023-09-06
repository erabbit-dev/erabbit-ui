export const later = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms))
