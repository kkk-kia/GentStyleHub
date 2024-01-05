import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { itemContext } from "../items/itemContext";

export const Home = () => {
 
const {state,dispatch} = useContext(itemContext)
const showItems =[]
const addToCart = (item)=>{
  item.number>0 ? dispatch({type:"addToCart",data:item.id}) : (console.log("ee"))
}


state.map((item,index)=>{
  showItems.push(
    <div key={index}>
      <img src={item.imgSrc}></img>
      <p>{item.name}</p>
      <p>{item.number}</p>
      <button onClick={()=>{dispatch({type:"increase",data:item.id})}}>+</button>
      {item.number>0 && <button onClick={()=>{dispatch({type:"decrease",data:item.id})}}>-</button>}
      <button onClick={()=>{addToCart(item)}}>add to cart</button>
    </div>
  ) 

})
// console.log(state);

  return (
    <div className="Home">

      <div className="Home-header">
        <h1>shop</h1>
        <p>choose eaojfaojfa;jf;jf;;fj;ajf;ja;jf;ajf;</p>

      </div>
      <div className="Home-items">
        {showItems}
      </div>
   
    </div>
  );
};
