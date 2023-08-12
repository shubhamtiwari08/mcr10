import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import './home.css'
import { dataContext } from "../context/DataProvider";
import { inventoryData } from "../db";





function Home() {

  const {dataDispatch,inventory}= useContext(dataContext)

  console.log(inventoryData)

  const totalStock = inventory?.reduce((acc,{stock})=> Number(acc) + Number(stock), 0 )
  const totalDelivered = inventory?.reduce((acc,{delivered})=> Number(acc) + Number(delivered), 0 )

  const lowStock = inventory.filter(({stock})=> Number(stock) <= 10 )
 

  return (
    
      <main>
        <div className="stock">
         <h3>{totalStock}</h3>
         <p>total stock</p>
        </div>
        <div className="stock">
         <h3>{totalDelivered}</h3>
         <p>total delivered</p>
        </div>
        <div className="stock">
         <h3>{lowStock.length}</h3>
         <p>stock</p>
        </div>
      </main>
    
  );
}

export default Home;
