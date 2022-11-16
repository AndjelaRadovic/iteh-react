

import './App.css';
import NavBar from './components/NavBar';
import Food from './components/Food';
import Cart from './components/Cart';

import { useState } from "react";

//       omotac,       switch  case
import {BrowserRouter ,Routes ,Route }  from "react-router-dom";

import slika1 from "./img/Copycat-McDonalds-French-Fries-.jpg";
import slika2 from "./img/four-cheese-margherita-pizza-recipe-12-scaled.jpg";
import slika3 from "./img/healthy-homemade-chicken-nuggets-recipe-7.jpg";
import slika4 from "./img/spaghetti-carbonara.jpg";



function App() {


 // let cartNum = 0;
 // const [state, setstate] = useState(initialState)

 const [cartNum, setCartNum] = useState(0);
 const [cartFood, setCartFood] = useState([]);
 const [food] = useState ([
    {
      id:1,
      image:slika2,
      name: "Pizza Margherita",
      price: "4$",
      description: "Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
      amount: 0,
    },
  
    {
      id:2,
      image:slika3,
      name: "Chicken Nuggets",
      price: "6$",
      description: "A chicken nugget is a food product consisting of a small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked.",
      amount: 0,
    },
  
    {
      id:3,
      image:slika1,
      name: "French Fries",
      price : "3$",
      description: "They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.",
      amount: 0,
    },
  
    {
     
      id:4,
      image:slika4,
      name: "Spaghetti carbonara",
      price: "5$",
      description: "Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork and black pepper.",
      amount: 0,
    },
  
  ]);

  


  //slicno kao map ili foreach, razbija niz na pojedinacne
  function refreshCart(){
    let newFood = food.filter((foodItem) => foodItem.amount>0);
    setCartFood(newFood);
  }

  function addFoodItem(name,id) {
    console.log("Dodat je proizvod: " + name);
    setCartNum(cartNum + 1);
    //console.log("Broj proizvoda u korpi: " + cartNum);
   
    food.forEach((foodItem) => {
      if(foodItem.id === id){
        foodItem.amount++;
      }
      console.log(foodItem.amount);
    });

    refreshCart();


  }

  function deleteFoodItem(name,id){
    console.log("Oduzet je proizvod: " + name);
    setCartNum(cartNum - 1);
    console.log("Broj proizvoda u korpi: " + cartNum);
    
    food.forEach((foodItem) => {
      if(foodItem.id === id && foodItem.amount>0){
        foodItem.amount--;
      }
      console.log(foodItem.amount);
    });

    refreshCart();

  }

  return (
    <BrowserRouter className="App">
      
     <NavBar cartNum = {cartNum}></NavBar>
     <Routes>
        <Route path="/" 
        element={<Food food = {food} onAdd = {addFoodItem} onDelete = {deleteFoodItem}/>}
        />

        <Route path="/cart"  element={<Cart food = {cartFood}/>}
        />

      </Routes>     
    </BrowserRouter>
  );
}

export default App;

