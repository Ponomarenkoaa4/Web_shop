import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Стул серый",
      img: "chair-grey.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 2,
      title: "Стол",
      img: "table.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      category: "tables",
      price: "149.99",
    },
    {
      id: 3,
      title: "Диван",
      img: "sofa.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      category: "sofa",
      price: "549.99",
    },
    {
      id: 4,
      title: "Лампа",
      img: "well-light.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      category: "light",
      price: "25.00",
    },
    {
      id: 5,
      title: "Стул белый",
      img: "chair-white.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      category: "chairs",
      price: "49.99",
    },
  ]);

  const [currentItems, setCurrentItems] = useState(items);
  const [orders, setOrders] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((elem) => {
      if (elem.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) setOrders((prevOrders) => [...prevOrders, item]);
  };

  const deleteToOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
    } else {
      setCurrentItems(items.filter((item) => item.category === category));
    }
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteToOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        onShowItem={onShowItem}
        items={currentItems}
        onAdd={addToOrder}
        orders={orders}
      />
      {showFullItem && (
        <ShowFullItem
          item={fullItem}
          onAdd={addToOrder}
          onShowItem={onShowItem}
          isAdded={orders.some((order) => order.id === fullItem.id)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
