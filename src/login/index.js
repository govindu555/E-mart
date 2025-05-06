import React,{useState} from 'react';
import {  useNavigate,NavLink } from 'react-router-dom';
import { BsShieldLockFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import './index.css'


const Loginpage=()=>{

    const [password2,setPassword2]=useState("000")

    const userpassword=useSelector(state=>{
        return state.password
    })

    const [s,setS]=useState("");

    const dev=useNavigate();

    function sample2(e){
        setS("")
        setPassword2(e.target.value)

    }

    function first(e){
        e.preventDefault();
        sample()
    }

    const sample=()=>{
        if(userpassword==""){
            setS("Sorry, Password is wrong, Please Try again...")
        }
        else{
        if(userpassword==password2){
            dev('/device')
        }
        else{
            setS("Sorry, Password is wrong, Please Try again...")
        }
    }
    }  

    return(
        
        <div className="page2">
        <form className='main' onSubmit={first}>
             <h1 className="mainhead">Login</h1>
             <div className="item">
                <fieldset><legend>  Email <BsEnvelopeAtFill /> </legend><input className='input' type="email"></input></fieldset>
             </div>
             <div className="item">
                <fieldset> <legend>  Password <BsShieldLockFill /> </legend><input className='input' type="password" onChange={(e)=>sample2(e)}></input></fieldset>
             </div><div className='wrong'>
             <NavLink className="wrong2" to="/account">Sign Up, If has no Account...</NavLink>
             </div>
             <p>{s}</p>
             <div className="button"><input className='submit' type="submit"/></div>
        </form>
        </div>
    )}
export default Loginpage;