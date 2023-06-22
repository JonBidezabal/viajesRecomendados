import useFetch from "./useFetch";

const usePlaceDetail = (id) => useFetch(`${process.env.REACT_APP_BACKEND}/places/${id}`)

const useByCity = (city) => useFetch(`${process.env.REACT_APP_BACKEND}/places/city/${city}`)

const useByCountry = (country) => useFetch(`${process.env.REACT_APP_BACKEND}/places/country/${country}`)

const useMostVoted = () => useFetch(`${process.env.REACT_APP_BACKEND}/places/listvotes`)

export {
  usePlaceDetail,
  useByCity,
  useByCountry,
  useMostVoted
}