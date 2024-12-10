import React, { useState } from "react";
import "./App.css";
import items from "./items.json"; // Importa el archivo JSON

const App = () => {

  const [cart, setCart] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="App">
      <header>
        <h1>Catálogo de Productos</h1>
        <button onClick={togglePopup}>
          Carrito ({cart.length})
        </button>
      </header>
      <main>
        <div className="catalog">
          {items.map((item) => (
            <div key={item.id} className="item">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </main>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
            <button onClick={togglePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
