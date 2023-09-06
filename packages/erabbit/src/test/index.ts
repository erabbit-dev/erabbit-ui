export { test, expect } from 'vitest'

export const later = (ms: number = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms))
