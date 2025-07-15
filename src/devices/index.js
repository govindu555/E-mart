import React,{useState} from "react";
import { datadetails } from "../data";
import { NavLink } from "react-router-dom";
import './index.css'
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";


const Deviceitems=()=>{
     const [search,setSearch]=useState("");

     const items=useSelector(state=>{
        return state.user
     })

    return(<>
    <nav>
           <div className="search"><h1 className="logo">Sahasra</h1><input className="user" type="search" placeholder="Search Items" onChange={(e)=>setSearch(e.target.value)}></input><NavLink to="/card" className="l"><button className="cardlogo"><BsCart4 /> {items.length}</button></NavLink></div>
          </nav>
          <div className="main2">
        {datadetails.filter(i=>i.name.includes(search)).map((each)=>{
            return(
                <NavLink to={`/item/${each.id}`}><div className="devitem">
                    <img className="imageitem" src={each.image} alt="image"/>
                    <p className="items">{each.model}</p>
                    <p className="items">{each.price}</p>
                </div></NavLink>
            )
        })}
    </div></>
)}
export default Deviceitems;