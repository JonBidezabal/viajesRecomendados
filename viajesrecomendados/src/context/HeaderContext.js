import { createContext, useState } from "react";

export const HeaderContext = createContext(null);
export const HeaderContextProvider = ({ children }) => {
  const [showCountries, setShowCountries] = useState(true);
  const [showCities, setShowCities] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const hidelist = () => {
    setShowCategories(false);
    setShowCities(false);
    setShowCountries(false);
  };

  return (
    <HeaderContext.Provider
      value={{
        showCategories,
        showCities,
        showCountries,
        setShowCategories,
        setShowCities,
        setShowCountries,
        hidelist,
      }}>
      {children}
    </HeaderContext.Provider>
  );
};
