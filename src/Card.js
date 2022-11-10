import React, { useContext, useState } from "react";
import { Cartt } from "./Contextt";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, price, inn, id }) => {
  const { cartitem, setcartitem, settotal, total } = useContext(Cartt);

  const [incart, setincart] = useState(true);
  const [fav, setfav] = useState(false);
  function favr() {
    setfav((fav) => {
      return !fav;
    });
  }
  // function clicked() {
  //   setincart((car) => {
  //     return !car;
  //   });
  //   console.log("clicked ");
  // }
  function Setbtn() {
    settotal((prv) => {
      return prv + parseInt(price.replaceAll(",", ""), 10);
    });
    console.log(total);
    setincart(!incart);
    setcartitem((cart) => [
      ...cart,
      {
        name: name,
        url: image,
        price: price,
        inn: inn,
        id: id,
      },
    ]);
  }
  function remove() {
    settotal((prv) => {
      return prv - parseInt(price.replaceAll(",", ""), 10);
    });
    setincart(!incart);
    setcartitem((cart) => cart.filter((cart) => cart.name != name));
  }
  console.log(id);
  return (
    <Link className="broo" to={`/${id}`}>
      <div>
        <div className="card">
          <img
            onClick={favr}
            className="starv"
            src={
              fav
                ? "https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
            }
            alt=""
          />
          <div className="wrap">
            <img className="imageproduct" src={image} alt="" />
            <div className="abcd"></div>
          </div>
          <div className="dif">
            <span className="productname">{name}</span>

            <span className="price">MRP ₹{price} </span>
            <div className="btnc">
              {/* <button
                onClick={
                  cartitem.some((ele) => {
                    return ele.name === name;
                  })
                    ? remove
                    : Setbtn
                }
                className="btn"
              >
                {cartitem.some((ele) => {
                  return ele.name === name;
                })
                  ? "Remove from Bag"
                  : "Add to Cart"}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
