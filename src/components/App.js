import React, { useState } from "react";
import "../styles/App.css";
import Menu from "./Menu";


function App() {
  const menuData = [
    { id: 1, title: "Pancakes", category: "breakfast", price: "$10" },
    { id: 2, title: "Aloo Paratha", category: "breakfast", price: "$5" },
    { id: 3, title: "Chicken Burger", category: "lunch", price: "$15" },
    { id: 4, title: "Paneer Tikka", category: "lunch", price: "$12" },
    { id: 5, title: "Oreo Shake", category: "shakes", price: "$8" },
    { id: 6, title: "Mango Shake", category: "shakes", price: "$7" },
  ];

  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    // Filter the menu items based on the selected category
    const newItems = menuData.filter((item) => item.category === category);
    // Update the state with the filtered items
    setMenuItems(newItems);
  }

  return <div id="main">
    <h1>Our Menu</h1>

    <div className="button-container">
      <button id="filter-btn-1" onClick={() => filterItems('breakfast')}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems('lunch')}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems('shakes')}>
          Shakes
        </button>
    </div>
    <Menu items={menuItems} />
  </div>;
}

export default App;
