import { useEffect, useState } from "react"

function useFetch(url) {
  const [info, setInfo] = useState()

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setInfo(data)
    }
    loadData()
  }, [url])

  return info
}

export default useFetch