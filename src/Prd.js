import React from "react";
import Card from "./Card";
import products from "./Productss";
import Navbar from "./Navbar";
import "./prd.css";

const Prd = ({ cartitem, setcartitem }) => {
  let arr = products.map((each) => {
    return (
      <Card
        cartitem={cartitem}
        setcartitem={setcartitem}
        image={each.url}
        name={each.name}
        price={each.price}
        inn={each.inn}
        id={each.id}
      />
    );
  });
  return (
    <div className="maind">
      <Navbar />
      <h1 className="title">Featured Products</h1>
      <div className="products">
        {/* <Card
      image="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4185f9e5-8371-47f4-8076-43eeb719c287/air-jordan-1-zoom-cmft-shoes-mDxHSk.png"
      name="Nike Air Max"
      price="14,000"
    /> */}

        {arr}
      </div>
    </div>
  );
};

export default Prd;
