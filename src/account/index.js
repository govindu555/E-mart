import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsShieldLockFill } from "react-icons/bs";

import './index.css'

const Accountpage=()=>{
    const [password,setPassword]=useState("");

    const log=useNavigate()
    
    function sample(){
           
              log(`/log/${password}`)
    }
    

   return( <div className="page1">
    <div className="main">
        <h1 className="mainhead">Account Created</h1>
        <div className="item">
            <lable>Name : <input type="text" placeholder="name"></input><BsPersonLinesFill /></lable>
        </div>
        <div className="item">
           <lable>City :  <select>
                <option>Other</option>
                <option>Samalkota</option>
                <option>Kakinada</option>
                <option>Rajamandri</option>
                <option>Vijayawada</option>
                <option>Visakapatnam</option>
                <option>Hyderabad</option>
            </select></lable>
        </div>
        <div className="item">
            <lable>Gmail : <input type="text" placeholder="gmail"></input><BsEnvelopeAtFill /></lable>
        </div>
        <div className="item">
            <lable>Password : <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input><BsShieldLockFill /></lable>
        </div>
        <div className="item">
            <button type="button" onClick={()=>sample()}>Submit</button>
        </div>
    </div>
    </div>
)}
export default Accountpage;