import { URL_API } from "../constants"

export function postRegister({ data }) {
  const { name, last_name, edge, response1, response2, response3, response4 } = data
  try {
    return fetch(`${URL_API}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        userlastname: last_name,
        userEdge: parseInt(edge),
        responses: {
          response1,
          response2,
          response3,
          response4
        }
      }),
    })
      .then(res => res.json)
      .then(res => {
        if (res.error) return { error: res.error }
        return { data: res }
      })
  } catch (error) {
    return { error: error }
  }
}