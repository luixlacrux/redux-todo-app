import React from 'react'
import '../styles/components/Checkbox.css'

const Checkbox = ({ onClick, completed }) => (
  <label className="label--checkbox">
    <input type="checkbox" className="checkbox" onChange={onClick} defaultChecked={completed} />
  </label>
)

export default Checkbox
