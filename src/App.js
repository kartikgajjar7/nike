import "./App.css";
import "./Navbar";
import Card from "./Card";
import products from "./Productss";
import Navbar from "./Navbar";
import Prd from "./Prd";
import Cart from "./Cart";
import Random from "./Random";
import { Cartt } from "./Contextt";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

let arr = products.map((each) => {
  return <Card image={each.url} name={each.name} price={each.price} />;
});

function App() {
  const { cartitem, setcartitem } = useContext(Cartt);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Prd cartitem={cartitem} setcartitem={setcartitem} />}
        />

        <Route
          path="/cart"
          element={<Cart cartitem={cartitem} setcartitem={setcartitem} />}
        />
        <Route path="/:UseId" element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
