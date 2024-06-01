import React,{useState,useContext}from "react";

export const cardcontext=React.createContext();

export const Userproduct=({children})=>{
    
     const [carditem,setCarditem]=useState([])

     const removecard=(item)=>{
         setCarditem(carditem.filter(i=>i!==item))
     }
    return<cardcontext.Provider value={[carditem,removecard,setCarditem,]}>
        {children}
    </cardcontext.Provider>

}
export const useCard=()=>{
    return useContext(cardcontext)
}