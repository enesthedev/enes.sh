import { accounts, sessions } from '@/schema'
import { roles } from '@/schema/roles'
import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('uuid').primaryKey().unique().notNull().defaultRandom(),
  fullName: varchar('full_name', { length: 256 }),
  email: text('email').notNull().unique(),
  emailVerifiedAt: timestamp('email_verified_at'),
  avatar: text('avatar'),
  role: roles('role').default('guest').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions)
}))
