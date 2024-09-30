import React from "react";

const Item = ({ item, onAdd, isAdded, onShowItem }) => {
  return (
    <div className="item">
      <img
        src={"./img/" + item.img}
        alt="product"
        onClick={() => onShowItem(item)}
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div
        className={`add-to-cart ${isAdded ? "active" : ""}`}
        onClick={() => onAdd(item)}
      >
        {isAdded ? "✔" : "+"}
      </div>
    </div>
  );
};

export default Item;
