import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
     <button> <Link href="/api/22?param=1">Click me</Link></button>
    </div>
  )
}

export default page
