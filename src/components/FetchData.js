import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FetchData = () => {
  const [data, setData] = useState({});

  useEffect(() => fetchInfo(), [])

  function fetchInfo() {
    axios.get("https://dummyjson.com/products")
    .then(response => {
        setData(response.data)
        console.log(response.data);
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
        <pre>
        {JSON.stringify(data, null, 2)}
        </pre>
    </div>
  )
}

export default FetchData