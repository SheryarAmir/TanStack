"use client"

import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'
import {getUsers} from "@/hook/user.hook"

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const blogId = params?.blogId; 
  const age = searchParams.get("age") || "";
  const {data,isError ,isLoading}=getUsers()

  return (
    <div>
      <p>this is blogId: {blogId}</p>
      <p>this is age: {age}</p>

      {data?.results.map((item)=>
      <div key={item.id}>
     <li>{item.name}</li>

      </div>
      )}
      
    </div>
  )
}

export default Page;
