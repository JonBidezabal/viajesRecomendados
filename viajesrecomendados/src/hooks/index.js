import useFetch from "./useFetch";

const useAllPlaces = () => useFetch(`${process.env.REACT_APP_BACKEND}/`);

const usePlaceDetail = (id) =>
  useFetch(`${process.env.REACT_APP_BACKEND}/places/${id}`);

const useByCity = (city) =>
  useFetch(`${process.env.REACT_APP_BACKEND}/places/city/${city}`);

const useByCountry = (country) =>
  useFetch(`${process.env.REACT_APP_BACKEND}/places/country/${country}`);

const useMostVoted = () =>
  useFetch(`${process.env.REACT_APP_BACKEND}/places/listvotes`);


const useByCategory = (id) =>
  useFetch(`${process.env.REACT_APP_BACKEND}/places/category/${id}`);

const usePlaces = () => useFetch(`${process.env.REACT_APP_BACKEND}/`);

export {
  useAllPlaces,
  usePlaceDetail,
  useByCity,
  useByCountry,
  useMostVoted,
  usePlaces,
  useByCategory,
};
