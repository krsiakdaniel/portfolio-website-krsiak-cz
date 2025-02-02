import { test as base } from '@playwright/test'

// INFO: Example - Playwright - How to create fixtures for data
// Define types for your data
type User = {
  id: number
  name: string
  email: string
  role: string
}

type Product = {
  id: number
  name: string
  price: number
  inStock: boolean
}

type Order = {
  id: number
  userId: number
  products: { id: number; quantity: number }[]
  total: number
  status: string
}

// Define fixture types
type DataFixtures = {
  users: User[]
  products: Product[]
  orders: Order[]
  testUser: User // Convenience fixture for common user
  testAdmin: User // Convenience fixture for admin user
}

// Create the fixture
export const test = base.extend<DataFixtures>({
  users: async ({}, use) => {
    await use([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'admin',
      },
    ])
  },

  products: async ({}, use) => {
    await use([
      {
        id: 1,
        name: 'Product 1',
        price: 99.99,
        inStock: true,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 149.99,
        inStock: false,
      },
    ])
  },

  orders: async ({}, use) => {
    await use([
      {
        id: 1,
        userId: 1,
        products: [{ id: 1, quantity: 2 }],
        total: 199.98,
        status: 'pending',
      },
    ])
  },

  // Convenience fixtures
  testUser: async ({ users }, use) => {
    await use(users.find((u) => u.role === 'user')!)
  },

  testAdmin: async ({ users }, use) => {
    await use(users.find((u) => u.role === 'admin')!)
  },
})

export { expect } from '@playwright/test'
