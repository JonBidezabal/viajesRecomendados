import { createContext, useState } from "react";

export const PlaceContext = createContext(null);

export const PlaceContextProvider = ({ children }) => {
  const [formState, setFormState] = useState({ title: "", shortDescription: "", largeDescription: "", city: "", country: "" });
  const [categories, setCategories] = useState([])
  const [photos, setPhotos] = useState([])

  return (
    <PlaceContext.Provider value={
      {
        formState,
        categories,
        photos,
        setFormState,
        setCategories,
        setPhotos
      }
    }>
      {children}
    </PlaceContext.Provider>
  );
};
