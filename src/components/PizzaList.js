import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPizzas } from "../store/pizzas/selector";
import { toggleFavorite } from "../store/user/action";
import { selectUser } from "../store/user/selector";

const PizzaList = () => {
  const pizzas = useSelector(selectPizzas);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="pizza-sec">
      <h2 className="user">
        Welcom <span>{user.name}</span>
      </h2>
      <h1>Pizza Explorer</h1>
      <h3>The list of pizzas</h3>
      <p>Number of Pizza Found: {pizzas.length}</p>
      <ul className="pizza-items">
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <h1>{pizza.name}</h1>
              <button className="heart"
                onClick={() => {
                  dispatch(toggleFavorite(pizza.id));
                }}>
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              <img src={pizza.image} alt="" />
              <p>{pizza.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PizzaList;
