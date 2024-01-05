import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemContext } from "../items/itemContext";

export const Cart = () => {
  const { state, dispatch } = useContext(itemContext);
  const showItems = [];

 state.map((item,index)=>{
  if(item.number == 0) item.addToCart = false
  if(item.addToCart === true){
    showItems.push(
      <div key={index}>
        <img src={item.imgSrc}></img>
        <p>{item.name}</p>
        <p>{item.number}</p>
        <button onClick={()=>{dispatch({type:"increase", data:item.id})}}>+</button>
        {item.number>0 && <button onClick={()=>{dispatch({type:"decrease", data:item.id})}}>-</button>}
        <button onClick={()=>{dispatch({type:"removeFromCart",data:item.id})}}>remove from cart</button>
      </div>
    )
  }
 })
  // console.log(state);

return(
  <div className="cart">
    {showItems}
    </div>
)

};
