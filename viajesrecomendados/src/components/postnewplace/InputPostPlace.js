import "../../css/InputPostPlace.css"

const InputPostPlace = ({ onChange, formState, label, value, placeholder, maxlength, required }) => {

  return (
    <>
      <label htmlFor={value} className="input-label">{label}:</label>
      <input
        type="text"
        name={value}
        value={formState.value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={maxlength}
        className="input-post-place"
      />
    </>
  )
}
export default InputPostPlace