import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => {
    return state.reducer.cartData.length;
  });
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shop
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gadgets">
                Gadgets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fashion">
                Fashion
              </Link>
            </li>
          </ul>
          <div className="cart-icon">
            <Link to="/cart">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png"
                alt="img"
              />
              <span style={{background: !count && "transparent"}}> {(count > 0) && count}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
