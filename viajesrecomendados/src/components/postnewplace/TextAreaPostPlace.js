import { useState } from "react";
import "../../css/TextAreaPostPlace.css"

const InputPostPlace = ({ label, value, placeholder, maxlength, required, rows, cols }) => {
  const [formState, setFormState] = useState({ sDescription: "", lDescription: "" })

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <>
      <label htmlFor={value} className="input-label">{label}:</label>
      <textarea
        type="text"
        name={value}
        value={formState.value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        maxLength={maxlength}
        className="text-area-post-place"
        rows={rows}
        cols={cols}
      />
    </>
  )
}
export default InputPostPlace