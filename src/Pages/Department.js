import React, { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { dataContext } from '../context/DataProvider'

function Department() {

    const {dataDispatch} = useContext(dataContext)

    const navigate = useNavigate()

    const handleDepartment=(name)=>{
        dataDispatch({type:"SET_FILTER",payload:name})
                navigate(`/department/products/${name}`)
    }


  return (
    <div>
    <main>
    <div className="stock" onClick={()=>handleDepartment("Kitchen")}>
 
    <p>kitchen</p>
   </div>
   <div className="stock" onClick={()=>handleDepartment("Clothing")}>
 
    <p>Clothing</p>
   </div>
   <div className="stock"onClick={()=>handleDepartment("Toys")}>
   
    <p>Toys</p>
   </div>
   </main>
    </div>
  )
}

export default Department
