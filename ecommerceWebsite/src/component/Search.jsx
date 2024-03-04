import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className='w-full py-4 z-20 shadow-md flex justify-center items-center bg-[#f6f6f6] fixed top-0'>
      <div className='flex justify-center items-center gap-3 w-64 rounded-full border-2 border-black p-2'>
      <FaSearch/>
      <input className='bg-transparent outline-none text-base text-black  font-medium placeholder:text-black' type="text" placeholder='Search' />
    </div>
    </div>
  )
}

export default Search
