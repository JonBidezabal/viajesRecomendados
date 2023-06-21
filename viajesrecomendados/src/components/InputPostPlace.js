import { useState } from "react";
import "../css/InputPostPlace.css"

const InputPostPlace = ({ label, value, placeholder, maxlength, required }) => {
  const [formState, setFormState] = useState({ title: "", city: "" })

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <>
      <label htmlFor={value} className="input-label">{label}:</label>
      <input
        type="text"
        name={value}
        value={formState.value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        maxLength={maxlength}
        className="input-post-place"
      />
    </>
  )
}
export default InputPostPlace