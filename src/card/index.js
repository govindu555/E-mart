import React,{useContext} from "react"
import { cardcontext } from "../context"
import { useCard } from "../context";
import { BsTrash3Fill } from "react-icons/bs";
import './index.css'

const Cardpages=()=>{
  const [carditem,removecard,setCarditem]=useCard();

  function sample(item){
    removecard(item)
  }


  return(
    <div className="maincarditem">
    {
      carditem.map((item)=>{
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
          <button className="delect" type="button" onClick={()=>sample(item)}><BsTrash3Fill className="d"/></button>
          </div>
        </div>
        )
      })
    }
    </div>
  )
}
export default Cardpages