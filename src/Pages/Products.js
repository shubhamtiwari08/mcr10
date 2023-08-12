import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { dataContext } from '../context/DataProvider'
import NewProduct from '../components/NewProduct'

function Products() {



    const {setToggle,toggle,inventory,filter,sort} = useContext(dataContext)

    const defaultFilteredProducts=(category,products) => products.filter(({department})=> department.includes(category))

    const sortFilter = (product,type)=>product?.sort((a,b)=>(b[type] - a[type]))

    const sortedProducts = sortFilter(inventory,sort)

    const filteredProducts = defaultFilteredProducts(filter,sortedProducts)

    console.log(filteredProducts,sortedProducts)

    const finalProducts = filteredProducts.filter((item)=> {
        if("low"){
            return item.stock < 10
        }else{
            return item 
        }
    })

    console.log(finalProducts)


  return (
    <div>
    <Navbar/>
     <main>
      <table className='table border'>
        <thead>
        <th>image</th>
          <th>Name</th>
          <th>description</th>
          <th>price</th>
          <th>stock</th>
          <th>supplier</th>
        </thead>
        {
         filteredProducts.map(({imageUrl,name,description,price,stock,supplier})=>
        <tr>
        <td><img src={imageUrl} alt="prodcut" style={{width:"10rem"}} /></td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{stock}</td>
        <td>{supplier}</td>
        </tr>)}
      </table>
      <div className='form'>
      {toggle&&<NewProduct/>}
      </div>
     </main>
     

    </div>
  )
}

export default Products
