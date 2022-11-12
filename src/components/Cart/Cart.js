import React, { useContext } from "react";
import { context } from "../hooks/context";

function Cart() {
  const { cart, increament, decreament, clearCart, removeCartItem } =
    useContext(context);

  return (
    <section className="cart-section">
      <div className="section-center">
        {cart.length === 0 ? (
          <h1 className="empty-cart-text">Empty Cart</h1>
        ) : (
          cart.map((item) => (
            <article key={item.id} className="product flex">
              <div className="product-details flex">
                <img src={item.fields.image[0].url} alt={item.fields.name} />
                <div className="info">
                  <h4>{item.fields.name}</h4>
                  <h5>GH¢ {item.fields.price / 100}</h5>

                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="item-count flex">
                <button
                  onClick={() => increament(item.id)}
                  className="increase-count"
                >
                  <i className="fa-sharp fa-solid fa-angle-up"></i>
                </button>

                <div className="count">{item.count}</div>

                <button
                  onClick={() => decreament(item.id)}
                  className="decrease-count"
                >
                  <i className="fa-solid fa-angle-down"></i>
                </button>
              </div>
            </article>
          ))
        )}

        <div className="total-info flex">
          <p>Total</p>
          <h4>
            GH¢{" "}
            {cart.reduce((total, item) => {
              const { price } = item.fields;
              const { count } = item;
              total += (price / 100) * count;
              return parseFloat(total.toFixed(2));
            }, 0)}
          </h4>
        </div>

        <button onClick={clearCart} className="clear-btn">
          Clear Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
