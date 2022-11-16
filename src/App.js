

import './App.css';
import NavBar from './components/NavBar';
import Food from './components/Food';
import Cart from './components/Cart';

import { useState } from "react";

//       omotac,       switch  case
import {BrowserRouter ,Routes ,Route }  from "react-router-dom";

function App() {


 // let cartNum = 0;
 // const [state, setstate] = useState(initialState)

 const [cartNum, setCartNum] = useState(0);

  const food = [
    {
      id:1,
      name: "Pizza Margherita",
      price: "4$",
      description: "Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
      amount: 0,
    },
  
    {
      id:2,
      name: "Spaghetti carbonara",
      price: "5$",
      description: "Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork and black pepper.",
      amount: 0,
    },
  
    {
      id:3,
      name: "French Fries",
      price : "3$",
      description: "They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.",
      amount: 0,
    },
  
    {
      id:4,
      name: "Chicken Nuggets",
      price: "6$",
      description: "A chicken nugget is a food product consisting of a small piece of deboned chicken meat that is breaded or battered, then deep-fried or baked.",
      amount: 0,
    },
  
  ];

  function addFoodItem(name) {
    console.log("Dodat je proizvod: " + name);
    setCartNum(cartNum + 1);
    console.log("Broj proizvoda u korpi: " + cartNum);

  }

  return (
    <BrowserRouter className="App">
      
     <NavBar cartNum = {cartNum}></NavBar>
     <Routes>
        <Route path="/" 
        element={<Food food = {food} onAdd = {addFoodItem} />}
        />

        <Route path="/cart*" 
        element={<Cart food = {food}/>}
        />

      </Routes>     
    </BrowserRouter>
  );
}

export default App;

