import { URL_API } from "../constants";

export async function getUsers() {
  return fetch(`${URL_API}register/users`)
    .then(res => res.json())
    .then(data => {
      return data
    })
}