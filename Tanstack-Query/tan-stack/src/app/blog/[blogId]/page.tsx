"use client"

import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const blogId = params?.blogId; 
  const age = searchParams.get("age") || "";

  return (
    <div>
      <p>this is blogId: {blogId}</p>
      <p>this is age: {age}</p>
    </div>
  )
}

export default Page;
