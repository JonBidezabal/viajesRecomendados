import useFetch from "./useFetch";

const usePlaceDetail = (id) => useFetch(`${process.env.REACT_APP_BACKEND}/places/${id}`)

export {
  usePlaceDetail,
}