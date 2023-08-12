import React from 'react'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'

function Paths() {
  return (
    <Routes>
       
         <Route path="/home" element={<Home/>}/>
       
    </Routes>
  )
}

export default Paths
