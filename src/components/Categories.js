import React, { useState } from "react";

const Categories = ({ chooseCategory }) => {
  const [categories, setCategories] = useState([
    {
      key: "all",
      name: "Все",
    },
    {
      key: "chairs",
      name: "Стулья",
    },
    {
      key: "tables",
      name: "Столы",
    },
    {
      key: "sofa",
      name: "Диваны",
    },
    {
      key: "light",
      name: "Свет",
    },
  ]);

  return (
    <div className="categories">
      {categories.map((elem) => (
        <div onClick={() => chooseCategory(elem.key)} key={elem.key}>
          {elem.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
