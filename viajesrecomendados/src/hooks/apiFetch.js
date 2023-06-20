import useFetch from "./useFetch";

export const usePlaceDetail = (id) => useFetch(`${process.env.REACT_APP_BACKEND}/places/${id}`)