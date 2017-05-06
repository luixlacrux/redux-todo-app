import React, { PropTypes } from 'react'
import '../styles/components/Link.css'

const Link = ({ active, color, children, onClick }) => {
  const className = active ? `Link ${color} active` : `Link ${color}`

  return (
    <a
      href="#"
      className={className}
      onClick={e => {
       e.preventDefault()
       onClick()
     }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
