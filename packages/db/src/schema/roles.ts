import { pgEnum } from 'drizzle-orm/pg-core'

export const roles = pgEnum('roles', ['owner', 'guest'])
