import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FetchData = () => {
  const [data, setData] = useState("Loading");

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
        {
         (data === "Loading") ? (<p>Loading...</p>) : 
         (
            <pre>
                <h1>Data Fetched from API</h1>
                {
                    JSON.stringify(data, null, 2)
                }
            </pre>
         ) 
        }
    </div>
  )
}

export default FetchData