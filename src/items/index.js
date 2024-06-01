import React,{useContext} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { datadetails } from "../data";
import './index.css'
import { useCard } from "../context";

const Sigelitem=()=>{
   const [carditem,addcard,setCarditem]=useCard();

    const userId=useParams();
    let id=userId.id
    const result=datadetails.find(i=>i.id==id)
    const nav=useNavigate();


   function sample(){
         nav('/device')
   }

    return(
        <div className="itemdev">
          <div>
          <img  className="imgitem" src={result.image} alt="photo"/>
          <div className="b">
            <button className="bt" onClick={()=>sample()}>Back</button>
            <button className="bt" onClick={()=>setCarditem([...carditem,result])} >Add Card</button>
          </div>
          </div>
          <div className="pro">
          <p className="pa">{`Name : ${result.name}`}</p>
          <p className="pa">{`Model : ${result.model}`}</p>
          <p className="pa">{result.ram}</p>
          <p className="pa">{result.memory}</p>
          <p className="pa">{result.camera}</p>
          <p className="pa">{result.cpu}</p>
          <p className="pa">{result.capacity}</p>
          <p className="pa">{`Price : ${result.price}`}</p>
          </div>
        </div>
    )
}
export default Sigelitem;