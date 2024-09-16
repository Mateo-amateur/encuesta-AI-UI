import { getUsers } from "./getUsers"

export async function checkData({ name, lastName }) {
  const users = await getUsers()
  for (const user of users) {
    if (user.username === name && user.userlastname === lastName) {
      return false
    }
  }
  return true
}