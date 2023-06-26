export const signUpService = async (name, email, password) => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/users/newuser`, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({ email, password, name })
  })
  const json = await res.json()

  if (!res.ok) {
    throw new Error(json.message)
  }
}