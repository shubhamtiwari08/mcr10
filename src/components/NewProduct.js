import React, { useContext, useState } from 'react'
import { dataContext } from '../context/DataProvider'
import { inventoryData } from '../db'

function NewProduct() {

    const {toggle,setToggle,dataDispatch} = useContext(dataContext)

    const {inventory} = useContext(dataContext)

    const [data,setData] = useState({
        department:"",
        name:"",
        description:"",
        price:"",
        stock:"",
        sku:"",
        supplier:"",
        delivered:"",
        imageUrl:""

    })

    const handleInput =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setData({...data,[name]:value})
    }

    const handleAdd =()=>{
        const newList = inventory.push(data)
        dataDispatch({type:"SET_DATA",payload:newList})
        setToggle(false)
    }

    

  return (
    <form>
       <label htmlFor="department">department</label>
      <input type="text"id="department" name="department" value={data.department} onChange={handleInput}/>
      <label htmlFor="name">name</label>
      <input type="text" id="name" name="name"  value={data.name} onChange={handleInput}/>
      <label htmlFor="description">description</label>
      <textarea type="text" name='description' id='description' value={data.description} onChange={handleInput}/>
      <label htmlFor="price">price</label>
      <input type="number" name='price' id='price' value={data.price} onChange={handleInput}/>
      <label htmlFor="stock">stock</label>
      <input type="number" id='stock' name='stock'  value={data.stock} onChange={handleInput}/>
      <label htmlFor="sku">sku</label>
      <input type="text" id="sku" name='sku' value={data.sku} onChange={handleInput}/>
      <label htmlFor="supplier">supplier</label>
      <input type="text" name='supplier' id='supplier' value={data.supplier} onChange={handleInput}/>
      <label htmlFor="delivered">delivered</label>
      <input type="text" id='delivered' name='delivered' value={data.delivered} onChange={handleInput}/>
      <label htmlFor="imageUrl">imageUrl</label>
      <input type="text" id='imageUrl' name='imageUrl' value={data.imageUrl} onChange={handleInput}/>
      <button onClick={()=>handleAdd()}>add product</button>

    </form>
  )
}

export default NewProduct
