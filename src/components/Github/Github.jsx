import { React, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])  
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [])

  return (
    <div className="bg-gray-600 text-white text-center text-3xl p-4 m-4">Github followers: {data.followers}
        <div className="flex justify-center mt-4">
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}