import * as schema from '@/schema'
import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres'

import pg from 'pg'

config({ path: '.env' })

const client = new pg.Client({
  connectionString: process.env.POSTGRES_URL
})

client.connect()

export const db = drizzle(client, { schema })
