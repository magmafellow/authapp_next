import { object, string } from 'zod'

export const signInCredentialsSchema = object({
  name: string().min(3, 'Min 3 characters for name'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(3, 'Password is min of 3 characters'),
})
