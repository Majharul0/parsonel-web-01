import React from 'react'
import './nav.css'
import brand from "../logo.svg";
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <>
    <div className="nav">
     <img className='logo' src={brand} alt="" />
        <ul className='menu'>
            <li className='each-menu'><NavLink  className='menu-link active' exact  to="/home">Home</NavLink></li>
            <li className='each-menu'><NavLink  className='menu-link' exact to="/about">About</NavLink></li>
            <li className='each-menu'><NavLink  className='menu-link'exact to="/contact">Contact US</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Nav