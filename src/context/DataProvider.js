import React, { createContext, useEffect, useReducer, useState } from 'react'
import { inventoryData } from '../db'


export const dataContext = createContext()



const dataReducer = (state,{type,payload})=>{
    switch(type){
        case"SET_DATA":
        return {...state,inventory:payload}
        case"SET_FILTER":
        console.log(payload)
        return {...state,filter:payload}
        case "SET_SORT":
        return {...state,sort:payload}
    }
}




function DataProvider({children}) {

    const [toggle,setToggle]=useState(false)
    const [dataState, dataDispatch] = useReducer(dataReducer,{inventory:[],filter:"",sort:"",stock:""})


    useEffect(()=>{
        dataDispatch({type:"SET_DATA",payload:inventoryData})
      },[])

  return (
    <dataContext.Provider value={{toggle,setToggle,dataDispatch,inventory:dataState.inventory,filter:dataState.filter,sort:dataState.sort}}>
    {children}
    </dataContext.Provider>
  )
}

export default DataProvider
