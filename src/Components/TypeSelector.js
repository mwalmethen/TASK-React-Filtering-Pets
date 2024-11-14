import React from 'react'

const TypeSelector = ({setType}) => {
  return (
    <div>
         <select onChange={(event) => setType(event.target.value)}  className="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
    </div>
  )
}

export default TypeSelector