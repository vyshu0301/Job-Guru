
import React from 'react'
import InputField from '../InputField'

const Location1 = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
        <span className="checkmark"></span>ALL
        </label>
        <InputField 
          handleChange={handleChange} 
          value="hyderabad" 
          title="HYDERABAD"
          name="test"
        />
        <InputField 
          handleChange={handleChange} 
          value="chennai" 
          title="CHENNAI"
          name="test"
        />
        <InputField 
          handleChange={handleChange} 
          value="bangalore" 
          title="BANGALORE"
          name="test"
        />
        <InputField 
          handleChange={handleChange} 
          value="mumbai" 
          title="MUMBAI"
          name="test"
        />
      </div>
    </div>
  )
}

export default Location1