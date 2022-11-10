import React from "react";
import "./random.css";
import products from "./Productss";
import { useParams, Link } from "react-router-dom";
const Random = () => {
  const params = useParams();
  const g = products[params.UseId];
  console.log(products[params.UseId]);
  console.log(products[params.UseId].image);
  return (
    <div className="random">
      <div className="headrpp">
        {/* <Link classname="thelinkhere" to="/"> */}
        <Link to="/" className="thelinkhere">
          <img
            className="imagearr"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/angle-left-icon.png"
            alt=""
          />
          <p className="textprd">Products</p>
        </Link>
      </div>
      <div className="thisis">
        <div className="rightpp">
          <img
            className="imagemains"
            src={products[params.UseId - 1].url}
            alt=""
          />
          <div className="allpics">
            <img
              className="picsother"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3148164-fe3c-4d29-83f9-31ff38c52ee4/air-force-1-mid-react-shoes-Hbs6fH.png"
              alt=""
            />
            <img
              className="picsother"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3148164-fe3c-4d29-83f9-31ff38c52ee4/air-force-1-mid-react-shoes-Hbs6fH.png"
              alt=""
            />
            <img
              className="picsother"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b3148164-fe3c-4d29-83f9-31ff38c52ee4/air-force-1-mid-react-shoes-Hbs6fH.png"
              alt=""
            />
          </div>
        </div>
        <div className="leftpp">
          <div className="thename">
            <h1 className="textnames">Nike Air Zoom Pegasus 39 Premium</h1>
            <h4 className="textnamesv">Men's Road Running Shoes</h4>
            <h1 className="textnamesvs">MRP: ₹11,895</h1>
            <h4 className="war">incl. of taxes</h4>
            <h4 className="war">(Also includes all applicable duties)</h4>
          </div>
          <div className="selectyoursize">
            <h1 className="asit">Select Size</h1>
          </div>
          <div className="sizes">
            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt1"
            />
            <label className="mylabels" for="rtt1">
              UK 6.5
            </label>

            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt2"
            />
            <label className="mylabels" for="rtt2">
              UK 7.5
            </label>
            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt3"
            />
            <label className="mylabels" for="rtt3">
              UK 7.5
            </label>

            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt4"
            />
            <label className="mylabels" for="rtt4">
              UK 7.5
            </label>

            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt5"
            />
            <label className="mylabels" for="rtt5">
              UK 7.5
            </label>

            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt6"
            />
            <label className="mylabels" for="rtt6">
              UK 7.5
            </label>

            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt7"
            />
            <label className="mylabels" for="rtt7">
              UK 7.5
            </label>
            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt8"
            />
            <label className="mylabels" for="rtt8">
              UK 7.5
            </label>
            <input
              name="allthisradio"
              type="radio"
              className="radioss"
              id="rtt9"
            />
            <label className="mylabels" for="rtt9">
              UK 7.5
            </label>
          </div>
          <button className="checkbtnfordetails">Add to Bag</button>
          <button className="checkbtnfordetailsfav">
            Favourite
            <svg
              className="favsvg"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Random;
