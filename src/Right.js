import React from "react";

import { useContext, useState } from "react";
import "./right.css";
import { Cartt } from "./Contextt";
import Cartitem from "./Cartitem";
const Right = () => {
  const { cartitem } = useContext(Cartt);
  let arr = cartitem.map((each) => {
    return (
      <Cartitem
        image={each.url}
        name={each.name}
        price={each.price}
        inn={each.inn}
      />
    );
  });
  console.log(cartitem.length);
  return (
    <div className="right">
      <p className="bag">Bag</p>
      {cartitem.length == 0 && (
        <p className="bagV">There are no items in your bag.</p>
      )}
      {arr}
    </div>
  );
};

export default Right;
