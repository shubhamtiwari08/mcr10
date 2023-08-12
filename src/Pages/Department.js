import React from 'react'
import { useNavigate } from 'react-router-dom'

function Department() {

    const navigate = useNavigate()

    const handleDepartment=(name)=>{
                navigate(`/department/products/${name}`)
    }


  return (
    <div>
    <main>
    <div className="stock" onClick={()=>handleDepartment("kitchen")}>
 
    <p>kitchen</p>
   </div>
   <div className="stock" onClick={()=>handleDepartment("clothing")}>
 
    <p>Clothing</p>
   </div>
   <div className="stock"onClick={()=>handleDepartment("toys")}>
   
    <p>Toys</p>
   </div>
   </main>
    </div>
  )
}

export default Department
