import React from "react";
import Item from "./Item";

const Items = ({ items, onAdd, orders, onShowItem }) => {
  return (
    <main>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onAdd={onAdd}
          isAdded={orders.some((order) => order.id === item.id)}
          onShowItem={onShowItem}
        />
      ))}
    </main>
  );
};

export default Items;
