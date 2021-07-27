import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./item";

export const MyContext = React.createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mb-2 navbar-nav me-auto mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="text-white badge bg-dark ms-1 rounded-pill">
                  {cartCount}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* header */}
      <header className="py-5 bg-dark">
        <div className="container px-4 my-5 px-lg-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="mb-0 lead fw-normal text-white-50">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 mt-5 px-lg-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
           <MyContext.Provider value ={ { 
               count : [cartCount, setCartCount]
            }
               }>
            <Item
              sale={""}
              name={"Fancy Product"}
              lowPrice={"$40.00"}
              highPrice={"- $80.00"}
              mutedPrice={""}
              realPrice={""}
              stars={0}
            />
            <Item
              sale={"sale"}
              name={"Special Item"}
              lowPrice={""}
              highPrice={""}
              mutedPrice={"$20.00"}
              realPrice={"$18.00"}
              stars={5}
            />
            <Item
              sale={"sale"}
              name={"Sale Item"}
              lowPrice={""}
              highPrice={""}
              mutedPrice={"$50.00"}
              realPrice={"$25.00"}
            />
            <Item
              sale={""}
              name={"Popular Item"}
              lowPrice={"$40.00"}
              highPrice={""}
              mutedPrice={""}
              realPrice={""}
              stars={5}
            />
            <Item
              sale={"sale"}
              name={"Sale item"}
              lowPrice={""}
              highPrice={""}
              mutedPrice={"$50.00"}
              realPrice={"$25.00"}
              stars={0}
            />
            <Item
              sale={""}
              name={"Fancy Product"}
              lowPrice={"$120.00"}
              highPrice={"- $280.00"}
              mutedPrice={""}
              realPrice={""}
              stars={0}
            />
            <Item
              sale={"sale"}
              name={"Special item"}
              lowPrice={"$"}
              highPrice={""}
              mutedPrice={"$20.00"}
              realPrice={"$18.00"}
              stars={5}
            />
            <Item
              sale={""}
              name={"Popular item"}
              lowPrice={"$40.00"}
              highPrice={""}
              mutedPrice={""}
              realPrice={""}
              stars={5}
            />
            </MyContext.Provider>
            
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
