import Category from "./Category";
import { useByCategoryList } from "../../hooks";
// import "./style.css";

const Categories = () => {
  const data = useByCategoryList();
  if (!data) return <div>Cargando...</div>;
  const categories = data.data;

  return (
    <ul className="list-homepage-categories">
      {categories?.map((category) => (
        <li key={category.id} className={`category ${category.category_name}`}>
          <Category category={category} />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
