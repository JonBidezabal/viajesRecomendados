import "../css/PostPlacePage.css";
import InputPostPlace from "../components/postnewplace/InputPostPlace";
import SelectCategories from "../components/postnewplace/SelectCategories";
import SelectCountry from "../components/postnewplace/SelectCountry";
import TextAreaPostPlace from "../components/postnewplace/TextAreaPostPlace";
import { useContext } from "react";
import { PlaceContext } from "../context/PlaceContext";

const PostPlacePage = () => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }
  const {
    formState,
    categories,
    photos,
    setFormState,
    setCategories,
    setPhotos
  } = useContext(PlaceContext)
  return (
    <section className="post-place-page">
      <h2>Publica un nuevo lugar/experiencia</h2>
      <form name="postplace-form" className="post-place-page-form">
        {/* <input type="file" /> */}
        <InputPostPlace onChange={handleInputChange} formState={formState} label="Título" value="title" placeholder="Título del lugar/experiencia" maxlength={100} required={true} />
        <InputPostPlace onChange={handleInputChange} formState={formState} label="Ciudad" value="city" placeholder="Ciudad" maxlength={100} required={true} />
        <SelectCountry onChange={handleInputChange} formState={formState} value="country" />
        <TextAreaPostPlace onChange={handleInputChange} formState={formState} label="Breve descripción del lugar/experiencia" value="shortDescription" placeholder="¿Qué fue lo que más te gusto de este lugar/experiencia?" maxlength={200} required={true} rows={5} />
        <TextAreaPostPlace onChange={handleInputChange} formState={formState} label="Descripción detallada del lugar (opcional)" value="largeDescription" placeholder="¿Quieres compartir más detalles sobre este lugar/experiencia? / ¿fue fácil el acceso? / presupuesto aproximado / entre otros." maxlength={500} required={false} rows={10} />
        <SelectCategories value="categories" categories={categories} setCategories={setCategories} />
      </form >
    </section>
  )
}

export default PostPlacePage;