import { useState } from "react";
import { signUpService } from "../services/index"
import { Link, useNavigate } from "react-router-dom";
import "../css/Forms.css"

const SignUpPage = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({ username: "", email: "", password1: "", password2: "" })
  const [error, setError] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleForm = async (e) => {
    e.preventDefault()
    setError("")
    if (formState.password1 !== formState.password2) {
      setError("Las contraseñas no coinciden")
      return
    }

    try {
      await signUpService(formState.username, formState.email, formState.password1)
      navigate("/login")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <main className="sign-up-page">
      <h2>Regístrate</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Correo Electrónico<span className="obligatorio">*</span></label>
          <input type="email" id="email" name="email" required onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="username">Nombre de usuario<span className="obligatorio">*</span></label>
          <input type="text" id="username" name="username" required onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="password1">Contraseña<span className="obligatorio">*</span></label>
          <input type="password" id="password1" name="password1" required onChange={handleChange} />
        </fieldset>
        <fieldset>
          <label htmlFor="password2">Repite tu contraseña<span className="obligatorio">*</span></label>
          <input type="password" id="password2" name="password2" required onChange={handleChange} />
        </fieldset>
        <button>Registrarme</button>
        {error && <p>{error}</p>}
      </form>
      <p>¿Ya tienes cuenta? - <Link to={"/login"}>Inicia sesión</Link></p>

    </main>
  )
}

export default SignUpPage;