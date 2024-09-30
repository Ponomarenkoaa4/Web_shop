import React, { useState } from "react";
import Order from "./Order";
import { FaShoppingCart } from "react-icons/fa";

const showOrders = (orders, onDelete) => {
  let summa = 0;
  orders.forEach((order) => (summa = summa + Number.parseFloat(order.price)));
  return (
    <div>
      {orders.map((elem) => (
        <Order onDelete={onDelete} key={elem.id} item={elem} />
      ))}
      <p className="summa">
        Общая сумма: {new Intl.NumberFormat().format(summa)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товаров пока нет</h2>
    </div>
  );
};

const Header = ({ orders, onDelete }) => {
  var [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>

        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen ? "active" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
