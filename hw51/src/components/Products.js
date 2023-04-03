import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Products = () => {
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatchFunc = useDispatch();

  useEffect(() => {
    if (isLoggedIn && localStorage.coffee) {
      dispatchFunc({ type: "setAmountCoffee" });
    }
    if (isLoggedIn && localStorage.sugar) {
      dispatchFunc({ type: "setAmountSugar" });
    }
  }, [isLoggedIn]);

  console.log("coffee :>> ", coffee);
  console.log("sugar :>> ", sugar);

  const incrementCoffee = () => {
    dispatchFunc({ type: "incrementCoffee" });
  };
  const incrementSugar = () => {
    dispatchFunc({ type: "incrementSugar" });
  };

  const decrementCoffee = () => {
    dispatchFunc({ type: "decrementCoffee" });
  };
  const decrementSugar = () => {
    dispatchFunc({ type: "decrementSugar" });
  };

  const increaseCoffee = () => {
    dispatchFunc({ type: "increaseCoffee", number: 10 });
  };
  const increaseSugar = () => {
    dispatchFunc({ type: "increaseSugar", number: 10 });
  };

  return (
    <>
      <div className="product">
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={incrementCoffee}>+</button>
        <button onClick={decrementCoffee}>-</button>
        {isLoggedIn && <button onClick={increaseCoffee}>+10</button>}
      </div>
      <div className="product">
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={incrementSugar}>+</button>
        <button onClick={decrementSugar}>-</button>
        {isLoggedIn && <button onClick={increaseSugar}>+10</button>}
      </div>
    </>
  );
};

export default Products;
