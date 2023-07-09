import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ response }) => {
  return (
    <div className="category-card">
      <ul>
        {response.data.categories.map((category) => (
          <li key={category.id}>
            <Link
              className="category-card-link"
              to={`/places/category/${category.id}`}>
              {" "}
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
