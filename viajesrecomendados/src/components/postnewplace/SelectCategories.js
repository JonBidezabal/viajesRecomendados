import { useState } from "react"
import Select from "react-select"
import "../../css/SelectCategories.css"

const SelectCategories = () => {

  const [categories, setCategories] = useState(null)

  const options = [
    { value: "2", label: "Aventura" },
    { value: "3", label: "Cultura" },
    { value: "4", label: "Deporte" },
    { value: "1", label: "Naturaleza" },
    { value: "5", label: "Relajación" },
    { value: "6", label: "Romántico" }
  ]
  return (
    <>
      <label htmlFor="categories">Categorías:</label>
      <Select
        className="select-categories"
        name="categories"
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