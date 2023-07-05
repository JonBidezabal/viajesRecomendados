import Select from "react-select"
import "../../css/SelectCategories.css"

const SelectCategories = ({ value, categories, setCategories }) => {

  const options = [
    { value: "1", label: "Aventura" },
    { value: "2", label: "Cultura" },
    { value: "3", label: "Deporte" },
    { value: "4", label: "Naturaleza" },
    { value: "5", label: "Relajación" },
    { value: "6", label: "Romántico" }
  ]
  return (
    <>
      <label htmlFor="categories">Categorías<span className="obligatorio">*</span></label>
      <Select
        className="select-categories"
        name={value}
        defaultValue={categories}
        onChange={setCategories}
        isMulti
        required
        options={options}
        placeholder="Selecciona mínimo una categoría" />
    </>
  )
}
export default SelectCategories