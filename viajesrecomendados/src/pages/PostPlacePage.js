import "../css/PostPlacePage.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext"
import { postPlaceService } from "../services";
import { useNavigate } from "react-router-dom";
import InputPostPlace from "../components/postnewplace/InputPostPlace";
import SelectCategories from "../components/postnewplace/SelectCategories";
import SelectCountry from "../components/postnewplace/SelectCountry";
import TextAreaPostPlace from "../components/postnewplace/TextAreaPostPlace";
import LoginPage from "./LoginPage";

const PostPlacePage = () => {
  const [formState, setFormState] = useState({ title: "", shortDescription: "", largeDescription: "", city: "", country: "" });
  const [categories, setCategories] = useState([])
  const [photos, setPhotos] = useState(null)
  const [error, setError] = useState("")
  const { token, user } = useContext(UserContext)
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
      const newPlace = await postPlaceService(formData, token)
      navigate(`/places/${newPlace.data.entry[0].place_id}`)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    user ?
      <main className="post-place-page">
        <h2>Publica una nueva experiencia</h2>
        <form onSubmit={handleSubmit} name="postplace-form" className="post-place-page-form">
          <InputPostPlace onChange={handleInputChange} formState={formState} label="Título" value="title" placeholder="Título del lugar/experiencia" maxlength={100} required={true} />
          <TextAreaPostPlace onChange={handleInputChange} formState={formState} label="Breve descripción del lugar/experiencia" value="shortDescription" placeholder="¿Qué fue lo que más te gusto de este lugar/experiencia?" maxlength={200} required={true} rows={5} />
          <TextAreaPostPlace onChange={handleInputChange} formState={formState} label="Descripción detallada del lugar (opcional)" value="largeDescription" placeholder="¿Quieres compartir más detalles sobre este lugar/experiencia? / ¿fue fácil el acceso? / presupuesto aproximado / entre otros." maxlength={500} required={false} rows={10} />
          <SelectCountry onChange={handleInputChange} formState={formState} value="country" required={true} />
          <InputPostPlace onChange={handleInputChange} formState={formState} label="Ciudad" value="city" placeholder="Ciudad" maxlength={100} required={true} />
          <fieldset className="post-place-file">
            <legend>Selecciona una imágen<span className="obligatorio">*</span></legend>
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
        {error && <p>{error}</p>}
      </main> :
      <LoginPage />
  )
}

export default PostPlacePage;