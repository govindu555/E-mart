import React,{useState} from "react";
import { datadetails } from "../data";
import { Link } from "react-router-dom";
import './index.css'
import { useCard } from "../context";
import { BsCart4 } from "react-icons/bs";


const Deviceitems=()=>{
     const [search,setSearch]=useState("");
     const [carditem]=useCard()

    return(<>
    <nav>
           <div className="search"><h1 className="logo">Sahasra</h1><input className="user" type="search" placeholder="Search Items" onChange={(e)=>setSearch(e.target.value)}></input><Link to="/card" className="l"><button className="cardlogo"><BsCart4 /> {carditem.length}</button></Link></div>
          </nav>
          <div className="main2">
        {datadetails.filter(i=>i.name.includes(search)).map((each)=>{
            return(
                <Link to={`/item/${each.id}`}><div className="devitem">
                    <img className="imageitem" src={each.image} alt="image"/>
                    <p className="items">{each.model}</p>
                    <p className="items">{each.price}</p>
                </div></Link>
            )
        })}
    </div></>
)}
export default Deviceitems;