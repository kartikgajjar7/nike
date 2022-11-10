import React, { useContext, useState } from "react";
import { Cartt } from "./Contextt";
import "./cartitem.css";
const Cartitem = ({ image, name, price, inn }) => {
  const { setcartitem, settotal, total } = useContext(Cartt);
  function remove() {
    settotal((prv) => {
      return prv - parseInt(price.replaceAll(",", ""), 10);
    });

    setcartitem((cart) => cart.filter((cart) => cart.name != name));
  }
  console.log(inn);
  return (
    <div className="top">
      <div className="item">
        <div className="rightpart">
          <img className="amn" src={image} alt="" />
        </div>
        <div className="leftpart">
          <p className="nameofit">{name}</p>
          <p className="cata">Men's Running Shoues</p>
          <p className="clr">Black/White</p>
          <p className="clr">Size 12</p>
          <div className="icons">
            <svg
              className="hoverdo"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
              ></path>
            </svg>
            <svg
              className="hoverdo"
              onClick={remove}
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mrp">
          <p className="nameofit">MRP: ₹{price}</p>
        </div>
      </div>
      {inn == "TRUE" && (
        <div className="fewleft">
          <svg
            className="svgs"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M12 6v6h5.25"
            ></path>
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M20.25 12a8.25 8.25 0 11-16.5 0 8.25 8.25 0 1116.5 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="textsoon">Just a few left. Order soon.</p>
        </div>
      )}
    </div>
  );
};

export default Cartitem;
