import React, { useContext } from "react";
import { dataContext } from "../context/DataProvider";

function Navbar() {


    const {toggle,setToggle,dataDispatch} = useContext(dataContext)
    
    const handleFilter=(e)=>{
       return dataDispatch({type:"SET_FILTER",payload:e.target.value})
    }

    const handleSort = (e)=>{
        return dataDispatch({type:"SET_SORT",payload:e.target.value})
    }


    const handleLowStock = ()=>{
        return dataDispatch({type:"SET_LOW",payload:"low"})
    }

  return (
    <div className="nav-bar">
      <select name="department" id="department" onChange={(e)=>handleFilter(e)}>
        <option value="" >all department</option>
        <option value="Kitchen">kitchen</option>
        <option value="Clothing" >clothing</option>
        <option value="Toys" >toys</option>
      </select>
      <div>
        <input type="checkbox" name="low" id="low" />
        <label htmlFor="low" onClick={handleLowStock}>Low stock item</label>
      </div>
      <select name="type" id="type" onChange={(e)=>handleSort(e)}>
        <option value="">name</option>
        <option value="price">price</option>
        <option value="stock">stock</option>
      </select>
      <button className="btn-primary" onClick={()=>setToggle(true)}>New</button>
    </div>
  );
}

export default Navbar;
