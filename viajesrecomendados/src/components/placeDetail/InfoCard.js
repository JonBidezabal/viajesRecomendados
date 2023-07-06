import React from "react";
import CategoryCard from "./CategoryCard";

const InfoCard = ({ response }) => {
 
  return (
    <div className="info-card">
      <h3>{response.data.generalInfo[0].title}</h3>
        <p>{response.data.generalInfo[0].shortDescription}</p>
        <p>{response.data.generalInfo[0].city}</p>
        <p>{response.data.generalInfo[0].country}</p>
        {response && response.data.categories && <CategoryCard response={response} />}
    </div>
  );
};

export default InfoCard;