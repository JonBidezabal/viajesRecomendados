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

export const updateUser = async (url, data, token, isFileUpload = false) => {
  try {
    let headers = {
      authorization: token,
    };

    if (!isFileUpload) {
      headers["Content-Type"] = "application/json";
      data = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method: "PATCH",
      body: data,
      headers: headers,
    });

    const json = await response.json();

    if (response.ok) {
      return { success: true, message: "Cambio realizado con éxito", response };
    } else {
      return { success: false, message: `No se ha podido realizar el cambio: ${json.message}`, response };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error en la solicitud" };
  }
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

export const postPlaceService = async (formData, token) => {
  const res = await fetch(`${process.env.REACT_APP_BACKEND}/places/newplace`, {
    method: "POST",
    headers: {
      "Authorization": token,
    },
    body: formData
  })
  const json = await res.json()

  if (!res.ok) {
    throw new Error(json.message)
  }
}
