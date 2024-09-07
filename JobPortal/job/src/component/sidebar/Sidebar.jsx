import React from 'react'
import Location1 from './Location1'
import EmploymentType from './EmploymentType'

const Sidebar = ({handleChange, handleClick}) => {
  return (
    <div className="space-y-5">
        <h3 className="text-lg font-bold mb-2">Filters</h3>
        <Location1 handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
