import React from 'react'
import {BsBagPlus} from 'react-icons/bs';
import {BsBagDash} from 'react-icons/bs'


//function FoodItem(props) {

//DESTRUKTURIRANJE


function FoodItem({ foodItem , onAdd , onDelete, inCart}) {

 // function onAdd(name){

 //}



  return (
    <div className={inCart===1 ? "card" : "card-cart"}>
        <img className = {inCart===1 ? "card-img-top" : "cart-custom"} src={foodItem.image} alt="Food" />
        <h1>{foodItem.name}</h1>
        
        <p className="price">
          {foodItem.price}</p>
        <p>{foodItem.description}</p>
        {/*<p><button onClick={() => onAdd(foodItem.name)}><BsBagPlus /></button></p>*/}
        
        {inCart===1 ? (
        <>
        <p><button onClick={() => onAdd(foodItem.name, foodItem.id)}><BsBagPlus /></button></p>
        <p><button onClick={() => onDelete(foodItem.name, foodItem.id)}><BsBagDash /></button></p>
        </>

        ) : (
        <h4>Amount: {foodItem.amount}</h4>
      )}
      </div>
  );
}

export default FoodItem;
