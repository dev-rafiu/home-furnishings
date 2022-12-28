import React, { useContext, useState } from "react";
import { context } from "./hooks/context";

function Product({ item }) {
  const { addToCart } = useContext(context);
  const [isClicked, setIsClicked] = useState(false);

  const { image, name, price } = item.fields;
  const URL = image[0].url;

  function setInCart() {
    setIsClicked(true);
    addToCart(item);
  }

  return (
    <article className="product">
      <div className="product-img-container">
        <img src={URL} alt={name} className="product__img" />
      </div>
      <div className="details">
        <div className="info flex">
          <h4>{name}</h4>
          <h5>
            GH¢
            {price / 100}
          </h5>
        </div>
        <button className="add-btn" onClick={() => setInCart()}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span> {isClicked ? "In Cart" : "Add To Cart"}</span>
        </button>
      </div>
    </article>
  );
}

export default Product;
