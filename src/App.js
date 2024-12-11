import React, { useState } from "react";
import "./App.css";
import items from "./items.json"; // Importa el archivo JSON

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Agregar un artículo al carrito
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Mostrar el pop-up del carrito
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Catálogo de Artículos</h1>
        <button className="cart-button" onClick={toggleCart}>
          Ver Carrito ({cart.length})
        </button>
      </header>

      <div className="catalog">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Añadir al carrito</button>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-popup">
          <div className="cart-content">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.nombre} - ${item.precio.toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
            <button onClick={toggleCart}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;