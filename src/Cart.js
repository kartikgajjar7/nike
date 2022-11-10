import React from "react";
import Card from "./Card";
import { useContext, useState } from "react";
import { Cartt } from "./Contextt";
import Right from "./Right";
import Left from "./Left";
import "./cartt.css";
import Cartitem from "./Cartitem";

const Cart = ({ cartitem, setcartitem }) => {
  const { settotal, total } = useContext(Cartt);
  let arr = cartitem.map((each) => {
    return <Cartitem image={each.url} name={each.name} price={each.price} />;
  });
  return (
    <div className="cnn">
      <div className="allcart">
        <Right />
        <Left />
      </div>
    </div>
  );
};

export default Cart;
