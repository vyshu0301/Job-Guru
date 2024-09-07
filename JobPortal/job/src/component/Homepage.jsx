import React, { useState } from 'react'
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa6'
import {FiMapPin, FiSearch} from "react-icons/fi"

const Homepage = ({query, handleInputChange}) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-5">Find your <span className='text-blue'></span>New Job</h1>
    
    <form>
      <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
        <div className='flex md: rounded-s-md rounded shadow-sm ring-1  ring-inset ring-grey-300 focus-within:ring-2 focus-within:ring-inset
        focus-within:ring-indigo-600 md:w-1/3 w-full'>
            <input type="text" name="title" placeholder="What your looking" className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gary-900
             placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
             onChange={handleInputChange}
             value={query}
             />
            <FiSearch className='absolute  mt-2.5 ml-2 text-gray-400'></FiSearch>
        </div>
        <div className='flex md: rounded-s-md rounded shadow-sm ring-1  ring-inset ring-grey-300 focus-within:ring-2 focus-within:ring-inset
        focus-within:ring-indigo-600 md:w-1/3 w-full'>
            <input type="text" name="title" placeholder="location" className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gary-900
             placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
             />
            <FiMapPin className="absolute  mt-2.5 ml-2 text-gray-400"></FiMapPin>
        </div>
        <button type="submit" className="bg-blue py-2 px-8 text-white md:rounded-s rounded">Search</button>
      </div>
    </form>
    </div>
  )
}

export default Homepage
