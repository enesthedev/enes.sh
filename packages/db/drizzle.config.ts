import { type Config } from 'drizzle-kit'

import { config } from 'dotenv'

config({ path: '.env' })

const DATABASE_URL = process.env.POSTGRES_URL
if (DATABASE_URL === undefined) {
  throw new Error('POSTGRES_URL is not defined')
}

export default {
  dialect: 'postgresql',
  schema: './src/schema/index.ts',
  dbCredentials: {
    url: DATABASE_URL
  },
  out: './src/migrations',
  strict: true,
  verbose: true
} satisfies Config
