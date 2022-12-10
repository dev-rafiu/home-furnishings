import React, { useContext } from "react";
import { context } from "./hooks/context";
import { Link } from "react-router-dom";

function Nav() {
  const { cart } = useContext(context);
  return (
    <header className="header ">
      <div className="section-center flex">
        <h2>
          <Link to="/" className="name">
            Store
          </Link>
        </h2>

        <nav>
          <ul className="nav-links flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div className="cart-area">
          <Link to="/cart" className="cart-link">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <div className="items-count">{cart.length}</div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
