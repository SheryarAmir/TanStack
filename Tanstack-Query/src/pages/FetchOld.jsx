import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { fetchPosts } from '../API/Api'

const FetchOld = () => {

const [posts, setPosts]=useState([])
// const [loading, setLoading]=useState(true)
// const [error, setError]=useState(null)
// const [data, setData]=useState([])
// const [isLoading, setIsLoading]=useState(true)


    const getPostData=async () => {
    try{
        const res=await fetchPosts()
        // console.log(res)
        res.status===200 ? setPosts(res.data): console.log("Error")
    
    }catch(err){
        console.log(err)
    }  
}


  
useEffect(() => {
getPostData()

} , {})
  return (
<div>
    <div>
        {posts?.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </div>

</div>
  )
}

export default FetchOld