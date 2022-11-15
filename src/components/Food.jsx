//arrow function komponenta
import FoodItem from './FoodItem.jsx';
import React from 'react';

const Food = ({food , onAdd}) => {

//const food = {
 // name : 'Naziv',
 // price: '200'
 // description : 'Opis'
//}


//anonimna fukcija moze da se napise kao arrow funk




  return (
    <div className='all-food'>

    {food.map((foodOne)=>(
      <FoodItem foodItem={foodOne} key={foodOne.id} onAdd = {onAdd} />
     ))}

      { /*<FoodItem foodItem={food[0]} />
      <FoodItem foodItem={food[1]} />
      <FoodItem foodItem={food[2]} />
  <FoodItem foodItem={food[3]} /> */}
    </div>
  )
}

export default Food;
