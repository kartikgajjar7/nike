import React from "react";
import { Cartt } from "./Contextt";
import "./left.css";
import { useContext, useState } from "react";
const Left = () => {
  const { cartitem, settotal, total } = useContext(Cartt);

  return (
    <div className="left">
      <p className="summry">Summary</p>

      <div className="manage">
        <div className="subtotalwrap">
          <h4 className="subtotal">SubTotal</h4>
          <img
            className="imaagee"
            src="https://cdn-icons-png.flaticon.com/512/71/71768.png"
            alt=""
          />
          <div className="overlay">
            <img
              className="ardr"
              src="https://freepngimg.com/thumb/triangle/172917-symbol-triangle-free-hd-image.png"
              alt=""
            />
            The subtotal reflects the total price of your order, including
            taxes, before any applicable discounts. It does not include delivery
            costs and international transaction fees.
          </div>
        </div>
        <p className="ppp">₹{total}.00</p>
      </div>
      <div className="both">
        <h4 className="subtotalv">Estimated Delivery & Handling</h4>
        <p className="ppp">{cartitem.length === 0 ? 0 : 1800}</p>
      </div>
      <div className="total">
        <p className="subtotal">Total</p>
        <p className="ppp">
          {" "}
          {cartitem.length === 0 ? 0 : `₹ ${total + 1800}.00`}
        </p>
      </div>
      <button className="checkbtn">CheckOut</button>
    </div>
  );
};

export default Left;
