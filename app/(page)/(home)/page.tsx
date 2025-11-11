import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>

    <div className=" w-full h-screen bg-amber-900 flex flex-col justify-center items-center text-7xl ">
      <h1>Home page</h1>

      <Link href={"/contact"}> Go To Contact Page </Link>
    </div>
      
    </>
  )
}

export default page
