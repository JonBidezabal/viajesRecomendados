import React from "react";

const CategoryCard = ({ response }) => {
 
  return (
    <div className="category-card">
        <ul>
          {response.data.categories.map((category) => (
            <li key={category.name}>{category.name}</li>
          ))}
        </ul>
      </div>
  );
};

export default CategoryCard;