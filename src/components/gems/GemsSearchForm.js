import React from 'react'

const GemsForm = ({handleSearch}) => {

  return (
    <div className="field">
      <div className="control">
        <label> <strong> Explore by category </strong> </label>
      </div>
      <div className="select is-halfwidth">
        <select
          name="category"
          defaultValue="Please Choose..."
          onChange={handleSearch}
        >
          <option disabled>Please Choose...</option>
          <option> Pubs </option>
          <option> Museums </option>
          <option> Restaurants </option>
        </select>
      </div>
    </div>
  )
}

export default GemsForm
