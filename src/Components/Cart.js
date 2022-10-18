import "./Cart.css";
import { useState } from "react";
import Modal from "./Modal";

function Cart({ setCartDB, cartDB, total }) {
  const [delItem, setDelItem] = useState(false);
  const [delIndex, setDelIndex] = useState();
  const [isModOpen, setIsModOpen] = useState(false);

  function openModal() {
    setIsModOpen(true);
  }

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const changeQuantity = (e, index) => {
    if (e.target.innerText === "+") {
      setCartDB([
        ...cartDB.slice(0, index),
        { ...cartDB[index], quantity: cartDB[index].quantity + 1 },
        ...cartDB.slice(index + 1, cartDB.length),
      ]);
    } else {
      if (cartDB[index].quantity > 1) {
        setCartDB([
          ...cartDB.slice(0, index),
          { ...cartDB[index], quantity: cartDB[index].quantity - 1 },
          ...cartDB.slice(index + 1, cartDB.length),
        ]);
      } else if (cartDB[index].quantity === 1) {
        setDelIndex(index);
        openModal();
      }
    }
  };

  const productList = cartDB.map((prod, index) => {
    return (
      <div className="prod" key={index}>
        <div className="prod-image">
          <img src={prod.image} alt="product" />
        </div>
        <div className="prod-name">{prod.title}</div>
        <div className="prod-price">
          {formatter.format(Math.round(prod.price * 100) / 100)}
        </div>
        <div className="prod-btns">
          <button onClick={(e, i) => changeQuantity(e, index)}>-</button>
          {prod.quantity}
          <button onClick={(e, i) => changeQuantity(e, index)}>+</button>
        </div>
        <div className="prod-total">
          {formatter.format(Math.round(prod.price * prod.quantity * 100) / 100)}
        </div>
      </div>
    );
  });

  function deleteProduct(index) {
    setCartDB([
      ...cartDB.slice(0, index),
      ...cartDB.slice(index + 1, cartDB.length),
    ]);
    setDelItem(false);
    setDelIndex(null);
  }

  return (
    <div>
      {/* <DeleteModal setDelItem={setDelItem} /> */}

      <div className="header">
        <h1>Cart</h1>
        <h3 style={total > 500 ? { color: "green" } : { color: "red" }}>
          {total > 500 ? "Free Shipping" : "Shipping will be charged"}
        </h3>
        <h3>
          Total: <span>{formatter.format(Math.round(total * 100) / 100)}</span>
        </h3>
      </div>
      <div className="main">
        <Modal
          open={isModOpen}
          close={() => setIsModOpen(false)}
          setDelItem={setDelItem}
        />
        {delItem ? (deleteProduct(delIndex), productList) : productList}
      </div>
    </div>
  );
}

export default Cart;
