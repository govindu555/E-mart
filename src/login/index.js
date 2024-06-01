import React,{useState} from 'react';
import {  useNavigate,useParams } from 'react-router-dom';
import { BsShieldLockFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";

import './index.css'


const Loginpage=()=>{

    const [password2,setPassword2]=useState("")

    const pa=useParams()
    const password=pa.password

    const [s,setS]=useState("");

    const dev=useNavigate();
     
    const sample=()=>{
        if(password===password2){
            dev('/device')
        }
        else{
            setS("Sorry,Password wasn't correct")
        }
    }  

    function sample2(e){
        setS("")
        setPassword2(e.target.value)

    }

    return(
        
        <div className="page2">
        <div className="main">
             <h1 className="mainhead">Login Up</h1>
             <div className="item">
                <lable>Gmail : <input type="text" placeholder="gmail"></input><BsEnvelopeAtFill /></lable>
             </div>
             <div className="item">
                <lable>Password : <input type="password" placeholder="password" onChange={(e)=>sample2(e)}></input><BsShieldLockFill /></lable>
             </div>
             <p>{s}</p>
             <div className="button" onClick={sample}><button type="button">Login</button></div>
        </div>
        </div>
    )}
export default Loginpage;