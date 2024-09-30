import React from "react";

const ShowFullItem = ({ item, onAdd, onShowItem, isAdded }) => {
  return (
    <div className="full-item">
      <div>
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
    </div>
  );
};

export default ShowFullItem;
