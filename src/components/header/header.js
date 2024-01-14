import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { category } from "../category/category";

export const Header = () => {
  const [show, setShow] = useState(null);
  const x = useRef();
  console.log(x);

  return (
    <div className="header-conteiner">
      <div className="header">
        <div></div>
        <div className="site-name">GentStyleHub</div>

        <div className="menu-bar">
          <div className="category">
            {category.map((item, index) => (
              <button
                key={index}
                name={item.name}
                className={item.name===show && "background-white"}
                onMouseOver={(e) => {
                  setShow(e.target.name);
                }}
                onMouseOut={(e) => {
                  setShow(null);
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="search">
            <input type="search" placeholder="search..."></input>
          </div>
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </div>
      </div>
      <div
        className={`${show != null && "show-category"}`}
        onMouseOver={() => {
          setShow(show);
        }}
        onMouseOut={() => {
          setShow(null);
        }}
      >
        {show != null &&
          category.map(
            (item) =>
              item.name === show && item.cat.map((c, index) => <a>{c}</a>)
          )}
      </div>
    </div>
  );
};
