import { and, asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm'
import { db } from '../../db'
import { SelectUser, usersTable } from '../../schema'

export async function getUserFromDbByNameAndPassword(
  name: string,
  password: string
): Promise<{ name: string; password: string } | null> {
  const r = await db
    .select()
    .from(usersTable)
    .where(and(eq(usersTable.name, name), eq(usersTable.password, password)))

  console.log('myr=>', r)

  if (r.length < 1) {
    return null
  }

  return r[0]
}
