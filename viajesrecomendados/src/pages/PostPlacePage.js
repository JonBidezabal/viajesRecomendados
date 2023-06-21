import "../css/PostPlacePage.css";
import SelectCategories from "../components/SelectCategories";
import SelectCountry from "../components/SelectCountry";
import InputPostPlace from "../components/InputPostPlace";
import TextAreaPostPlace from "../components/TextAreaPostPlace"


const PostPlacePage = () => {
  return (
    <section className="post-place-page">
      <h2>Publica un nuevo lugar/experiencia</h2>
      <form name="postplace-form" className="post-place-page-form">
        <InputPostPlace label="Título" value="title" placeholder="Título del lugar/experiencia" maxlength={100} required={true} />
        <InputPostPlace label="Ciudad" value="city" placeholder="Ciudad" maxlength={100} required={true} />
        <SelectCountry />
        <TextAreaPostPlace label="Breve descripción del lugar/experiencia" value="sDescription" placeholder="¿Qué fue lo que más te gusto de este lugar/experiencia?" maxlength={200} required={true} rows={5} />
        <TextAreaPostPlace label="Descripción detallada del lugar (opcional)" value="lDescription" placeholder="¿Quieres compartir más detalles sobre este lugar/experiencia? / ¿fue fácil el acceso? / presupuesto aproximado / entre otros." maxlength={500} required={false} rows={10} />
        <SelectCategories />
      </form >
    </section>
  )
}

export default PostPlacePage;