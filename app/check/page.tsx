import { getUserFromDbByNameAndPassword as getUsrByNamePass } from "@/db/queries/select"

export default async function Page() {
  const user = {
    name: 'magma',
    password: 'mts7&'
  }
  
  const fetchedUser = await getUsrByNamePass(user.name, user.password)
  
  
  return (
    <div>
      <p>name of user: {fetchedUser?.name}</p>
      <p>password of him: {fetchedUser?.password}</p>
    </div>
  )
}
