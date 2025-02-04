'use server'

import { signIn } from '@/auth'

export async function credentialsSignIn(formData: FormData) {
  console.log('form data=>', formData)
  await signIn('credentials', formData)
}
