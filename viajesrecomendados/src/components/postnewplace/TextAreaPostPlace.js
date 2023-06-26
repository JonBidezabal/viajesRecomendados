import "../../css/TextAreaPostPlace.css"

const InputPostPlace = ({ onChange, formState, label, value, placeholder, maxlength, required, rows, cols }) => {

  return (
    <>
      <label htmlFor={value} className="input-label">{label}:</label>
      <textarea
        type="text"
        name={value}
        value={formState.value}
        onChange={onChange}
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