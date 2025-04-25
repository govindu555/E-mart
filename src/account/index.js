import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsShieldLockFill } from "react-icons/bs";
import './index.css'
import { useDispatch } from 'react-redux';
import { addpassword } from '../redux/index';

const Accountpage=()=>{
    const [password,setPassword]=useState("");

    const dispath=useDispatch()

    const log=useNavigate()
    
    function first(e){
        e.preventDefault();
        dispath(addpassword(password))
        log('/')
    }

   return( <div className="page1">
    <form className="main" onSubmit={first}>
        <h1 className="mainhead">Sign Up</h1>
        <div className="item">
            <lable>Name : <input type="text" placeholder="name" required></input><BsPersonLinesFill /></lable>
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
            <lable>Gmail : <input type="email" placeholder="gmail" required/><BsEnvelopeAtFill /></lable>
        </div>
        <div className="item">
            <lable>Password : <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required></input><BsShieldLockFill /></lable>
        </div>
        <div className='box'>
        <input className='check' id='id' type='checkbox' required/>
        <label htmlFor='id'>Are you aree</label>
        </div>
        <div className="item">
            <input className='submit' type="submit"/>
        </div>
    </form>
    </div>
)}
export default Accountpage;