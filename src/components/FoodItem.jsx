import React from 'react'
import {BsBagPlus} from 'react-icons/bs';
import {BsBagDash} from 'react-icons/bs'


//function FoodItem(props) {

//DESTRUKTURIRANJE


function FoodItem({ foodItem , onAdd , onReduce, inCart}) {

 // function onAdd(name){

 //}



  return (
    <div className={inCart===1 ? "card" : "card-cart"}>
        <img className = {inCart===1 ? "card-img-top" : "card-img-left"} src="jeans3.jpg" alt="Denim Jeans" style={{width: '100%'}} />
        <h1>{foodItem.name}</h1>
        <p className="price">{foodItem.price}</p>
        <p>{foodItem.description}</p>
        {/*<p><button onClick={() => onAdd(foodItem.name)}><BsBagPlus /></button></p>*/}
        
        {inCart===1 ? (
        <>
        <p><button onClick={() => onAdd(foodItem.name, foodItem.id)}><BsBagPlus /></button></p>
        <p><button onClick={() => onReduce(foodItem.name, foodItem.id)}><BsBagDash /></button></p>
        </>

        ) : (
        <h4>Amount: {foodItem.amount}</h4>
      )}
      </div>
  );
}

export default FoodItem;
