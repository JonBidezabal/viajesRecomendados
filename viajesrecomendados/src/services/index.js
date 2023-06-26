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

export const newPwd = async ({ oldPwd, newPwd, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/newpassword`, {
    method: "PATCH",
    body: JSON.stringify({ oldPwd, newPwd }),
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.token;
};

export const getUserData = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/user`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
