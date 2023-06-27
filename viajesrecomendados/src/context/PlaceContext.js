import { createContext, useState } from "react";

export const PlaceContext = createContext(null);

export const PlaceContextProvider = ({ children }) => {
  const [formState, setFormState] = useState({ title: "", shortDescription: "", largeDescription: "", city: "", country: "" });
  const [categories, setCategories] = useState([])
  const [photos, setPhotos] = useState([])

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  return (
    <PlaceContext.Provider value={
      {
        formState,
        categories,
        photos,
        setFormState,
        setCategories,
        setPhotos,
        handleInputChange
      }
    }>
      {children}
    </PlaceContext.Provider>
  );
};
