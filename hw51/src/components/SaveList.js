import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SaveList = () => {
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const dispatchFunc = useDispatch();

  const logOut = () => dispatchFunc({ type: "logOut" });
  const save = () => {
    localStorage.coffee = coffee;
    localStorage.sugar = sugar;
  };
  const clear = () => {
    localStorage.clear();
    dispatchFunc({ type: "clear" });
  };

  return (
    <div className="save">
      {isLoggedIn ? (
        <>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <p>You must be logged in to save the list.</p>
      )}
    </div>
  );
};

export default SaveList;
