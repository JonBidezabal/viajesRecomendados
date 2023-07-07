import React from "react";
import CategoryCard from "./CategoryCard";

const InfoCard = ({ response }) => {
 
  return (
    <>
      <h3 className="info-title">{response.data.generalInfo[0].title}</h3>
    <div className="info-card">
        <p>{response.data.generalInfo[0].shortDescription}</p>
        <p>{response.data.generalInfo[0].city}, {response.data.generalInfo[0].country}</p>
        {response && response.data.categories && <CategoryCard response={response} />}
    </div>
    </>
  );
};

export default InfoCard;