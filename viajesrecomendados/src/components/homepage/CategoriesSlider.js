import Category from "./Category";
import { useByCategoryList } from "../../hooks";
import "../../css/Categories.css";
import { useState } from "react"
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"

const CategoriesSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const data = useByCategoryList();
  if (!data) return <div>Cargando...</div>;
  const categories = data.data;

  const handleNext = () => {
    setCurrentImg(currentImg === 5 ? 0 : currentImg + 1)
  }

  const handlePrevious = () => {
    setCurrentImg(currentImg === 0 ? 5 - 1 : currentImg - 1)
  }


  return (
    <>
      <AiFillCaretLeft onClick={handlePrevious} />
      <ul className="list-homepage-categories">
        {categories?.map((category, index) => (
          <>
            {currentImg === index &&
              < li key={category.id} className={`category ${category.category_name}`}>
                <Category category={category} />
              </li >}
          </>
        ))}
      </ul >
      <AiFillCaretRight onClick={handleNext} />
    </>
  );
};

export default CategoriesSlider;
