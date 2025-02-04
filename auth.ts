import NextAuth from 'next-auth'
import { ZodError } from 'zod'
import Credentials from 'next-auth/providers/credentials'
import { getUserFromDbByNameAndPassword } from './db/queries/select'
import { signInCredentialsSchema } from './lib/zod'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        name: {},
        password: {},
      },
      authorize: async credentials => {
        try {
          let user = null
          const { name, password: parsedPassword } =
            await signInCredentialsSchema.parseAsync(credentials)

          user = await getUserFromDbByNameAndPassword(
            name as string,
            parsedPassword as string
          )

          // invalid credentials. null was assigned to user
          if (!user) {
            throw new Error('Invalid credentials')
          }

          // if success - return user
          return user
        } catch (error) {
          if (error instanceof ZodError) {
            return null
          }
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  },
})
