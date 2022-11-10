import { createContext, useContext, useState } from "react";

export const Cartt = createContext();

const Contextt = ({ children }) => {
  const [cartitem, setcartitem] = useState([]);
  const [total, settotal] = useState(0);
  return (
    <Cartt.Provider value={{ cartitem, setcartitem, total, settotal }}>
      {children}
    </Cartt.Provider>
  );
};

export const CartState = () => {
  return useContext(Cartt);
};

export default Contextt;
