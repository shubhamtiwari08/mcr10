import React from 'react'
import './component.css'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='side-bar'>
    <ul>
        <li><NavLink to={"/home"} >dashboard</NavLink></li>
        <li><NavLink to={"/department"}>department</NavLink></li>
        <li><NavLink to={"/department/products"}>products</NavLink></li>
    </ul>
      
    </div>
  )
}

export default Sidebar
