import "../css/PostPlacePage.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext"
import { postPlaceService } from "../services";
import { useNavigate } from "react-router-dom";
import InputPostPlace from "../components/postnewplace/InputPostPlace";
import SelectCategories from "../components/postnewplace/SelectCategories";
import SelectCountry from "../components/postnewplace/SelectCountry";
import TextAreaPostPlace from "../components/postnewplace/TextAreaPostPlace";

const PostPlacePage = () => {
  const [formState, setFormState] = useState({ title: "", shortDescription: "", largeDescription: "", city: "", country: "" });
  const [categories, setCategories] = useState([])
  const [photos, setPhotos] = useState(null)
  const { token } = useContext(UserContext)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleImages = (e) => {
    setPhotos(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, shortDescription, largeDescription, city, country } = formState
    const valueCategories = categories.map(category => category.value)
    const formData = new FormData()
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("largeDescription", largeDescription);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("categories", valueCategories);
    // for (let index = 0; index < photos.length; index++) {
    //   formData.append(`photo${index}`, photos[index])
    // }
    formData.append("photos", photos)

    try {
      await postPlaceService(formData, token)
      navigate("/")
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <section className="post-place-page">
      <h2>Publica un nuevo lugar/experiencia</h2>
      <form onSubmit={handleSubmit} name="postplace-form" className="post-place-page-form">
        <InputPostPlace onChange={handleInputChange} formState={formState} label="Título" value="title" placeholder="Título del lugar/experiencia" maxlength={100} required={true} />
        <TextAreaPostPlace onChange={handleInputChange} formState={formState} label="Breve descripción del lugar/experiencia" value="shortDescription" placeholder="¿Qué fue lo que más te gusto de este lugar/experiencia?" maxlength={200} required={true} rows={5} />
        <TextAreaPostPlace onChange={handleInputChange} formState={formState} label="Descripción detallada del lugar (opcional)" value="largeDescription" placeholder="¿Quieres compartir más detalles sobre este lugar/experiencia? / ¿fue fácil el acceso? / presupuesto aproximado / entre otros." maxlength={500} required={false} rows={10} />
        <SelectCountry onChange={handleInputChange} formState={formState} value="country" required={true} />
        <InputPostPlace onChange={handleInputChange} formState={formState} label="Ciudad" value="city" placeholder="Ciudad" maxlength={100} required={true} />
        <fieldset id="images-accordion">
          <legend>Selecciona una imágen</legend>
          <input
            type="file"
            accept="image/*"
            name="photos"
            onChange={handleImages}
            required
          />
        </fieldset>
        <SelectCategories value="categories" categories={categories} setCategories={setCategories} />
        <button>Publicar el lugar</button>
      </form >
    </section>
  )
}

export default PostPlacePage;