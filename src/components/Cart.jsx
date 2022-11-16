
import FoodItem from "./FoodItem";

const Cart = ({food}) => {
  return (
    <div>
      <h3>This is your cart.</h3>
      {food.map((foodOne) => (
        <FoodItem foodItem={foodOne} key={foodOne.id} />

      ))}
    </div>
  );
};

export default Cart;
