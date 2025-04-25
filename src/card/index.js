import React from "react"
import { BsTrash3Fill } from "react-icons/bs";
import './index.css'
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeitems } from "../redux";

const Cardpages=()=>{

  const items=useSelector(state=>{
    return state.user
  })

  const dispath=useDispatch()

  const log=useNavigate()

  function sample(item){
    dispath(removeitems(item))
  }

  function back(){
    log('/device')
  }


  return(
    <>
    <div className="maincarditem">
    {
      items.map((item)=>{
        return(
          <div className="maincard">
            <div>
          <img className="imagecard" src={item.image}/>
          </div>
          <div className="maintext2">
            <h1 className="maintext">{item.model}</h1>
            <h1 className="maintext">{item.price}</h1>
          </div>
          <div>
          <button className="delect" type="button" onClick={()=>sample(item.id)}><BsTrash3Fill className="d"/></button>
          </div>
        </div>
        )
      })
    }
    </div>
    <div className="back">
          <button className="button2" type="button" onClick={back}>Back</button>
        </div>
    </>
  )
}
export default Cardpages