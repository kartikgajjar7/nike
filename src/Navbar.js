import React from "react";
import "./navbar.css";
import { useContext } from "react";
import { Cartt } from "./Contextt";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cartitem } = useContext(Cartt);
  return (
    <div className="nav">
      {/* <img
        className="image"
        src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
        alt=""
      /> */}
      <Link to="/">
        <img
          className="oio"
          src="https://companieslogo.com/img/orig/NKE.D-14bad6cf.png?t=1632522146"
          alt=""
        />
        {/* <svg
          className="mem"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="60px"
          height="60px"
          fill="none"
        >
          <path
            color="currentcolor"
            fill-rule="evenodd"
            d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
            clip-rule="evenodd"
          ></path>
        </svg> */}
      </Link>

      <ul className="list">
        <Link className="links" to="/">
          <li className="sss">
            <svg
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
          </li>
        </Link>
        <li className="cente">
          <Link className="center" to="/cart">
            {/* <img
              className="cart"
              src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
              alt=""
            /> */}
            <svg
              aria-hidden="true"
              class="pre-nav-design-icon"
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
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              ></path>
            </svg>
            <span className="numincart">({cartitem.length})</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
