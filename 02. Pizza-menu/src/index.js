import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// *** HEADER COMPONENT
function Header() {
  return (
    <header className="header">
      <h1>fast react pizza co.</h1>
    </header>
  );
}

// *** MAIN COMPONENT
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza, i) => (
              <Pizza key={i} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// *** PIZZA CARD
function Pizza({ pizzaObj }) {
  //console.log(props);

  // EARLY RETURN IF PIZZA NOT AVAILABLE
  // if (pizzaObj.soldOut) return null;

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <li>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : <span>Price: {pizzaObj.price}</span>}
        </span>
      </li>
    </div>
  );
}

// *** FOOTER COMPONENT
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(hour);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
