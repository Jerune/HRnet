import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="nav">
      <h2>HRnet</h2>
      <div className="nav-menu">
        <NavLink className="nav-item" to="/">
          Create Employee
        </NavLink>
        <NavLink className="nav-item" to="/employee-list">
          Employee List
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
