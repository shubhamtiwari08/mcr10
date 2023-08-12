import React from 'react'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import Products from './Pages/Products'
import Department from './Pages/Department'

function Paths() {
  return (
    <Routes>
       
         <Route path="/home" element={<Home/>}/>
         <Route path="/department" element={<Department/>}/>
         <Route path="/department/products" element={<Products/>}/>
         <Route path="/department/products/:type" element={<Products/>}/>
       
    </Routes>
  )
}

export default Paths
