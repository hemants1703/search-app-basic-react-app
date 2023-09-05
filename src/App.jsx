import { useState } from "react";
import "./App.css";

function App() {
  const fruitsList = [
    "Apple",
    "Banana",
    "Kiwi",
    "Orange",
    "Pineapple",
    "Mango",
  ];

  const [fruits, setFruits] = useState(fruitsList);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFruits(fruitsList);
      return;
    }

    const filteredFruits = fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setFruits(filteredFruits);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="inputs">
          <label htmlFor="searchBox">
            Search:
            <input
              type="text"
              name="search-box"
              id="searchBox"
              onChange={handleSearch}
            />
          </label>
        </div>
        <div className="list">{
          fruits.map((fruit, index) => <div className={index}>{fruit}</div>)
        }</div>
      </div>
    </div>
  );
}

export default App;
