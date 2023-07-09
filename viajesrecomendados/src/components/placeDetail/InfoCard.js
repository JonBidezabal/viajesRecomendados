import React, { useState } from "react";

const InfoCard = ({ response }) => {
  const [largeDescription, setLargeDescription] = useState(false);
  return (
    <>
      <div className="info-card">
        <h3 className="info-title">{response.data.generalInfo[0].title}</h3>
        <p>{response.data.generalInfo[0].shortDescription}</p>
        {response.data.generalInfo[0].largeDescription && (
          <p
            id="infocard-masinfo"
            onClick={() => setLargeDescription(!largeDescription)}>
            Más información...
          </p>
        )}
        {largeDescription && (
          <p>{response.data.generalInfo[0].largeDescription}</p>
        )}
        <span>¿Dónde?</span>{" "}
        <p>
          <b>{`En ${response.data.generalInfo[0].city}, ${response.data.generalInfo[0].country}`}</b>
        </p>
      </div>
    </>
  );
};

export default InfoCard;
