import React from 'react'
import {BsBagPlus} from 'react-icons/bs';
import {BsBagDash} from 'react-icons/bs'


//function FoodItem(props) {

//DESTRUKTURIRANJE


function FoodItem({ foodItem , onAdd }) {

 // function onAdd(name){

 //}



  return (
    <div className="card">
        <img src="jeans3.jpg" alt="Denim Jeans" style={{width: '100%'}} />
        <h1>{foodItem.name}</h1>
        <p className="price">{foodItem.price}</p>
        <p>{foodItem.description}</p>
        {/*<p><button onClick={() => onAdd(foodItem.name)}><BsBagPlus /></button></p>*/}
        <p><button onClick={() => onAdd(foodItem.name)}><BsBagPlus /></button></p>
        <p><button><BsBagDash /></button></p>
      </div>
  );
}

export default FoodItem;
