// @ts-nocheck
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <nav className="nav">
      <NavLink className="nav-item" to="/">
        <img className="logo" src={logo} alt="HRnet" />
      </NavLink>
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
