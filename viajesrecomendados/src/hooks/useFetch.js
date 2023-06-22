import { useEffect, useState } from "react"

function useFetch(url) {
  const [info, setInfo] = useState()

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setInfo(data)
      } catch (error) {
        console.log(error.message);
      }
    }
    loadData()
  }, [url])

  return info
}

export default useFetch