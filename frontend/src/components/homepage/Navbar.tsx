import React from "react"
import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Bike Farms Logo"
            style={{ height: "40px" }}
            className="me-2"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-flex me-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search..."
              />
              <button
                className="btn search-btn text-white"
                type="button"
                id="searchBtn"
                style={{ backgroundColor: "#0EDF26" }}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          <div className="d-flex">
            <a
              href="#account"
              className="btn btn-outline-secondary me-2"
              style={{ color: "#0EDF26" }}
            >
              <i className="bi bi-person"></i> Account
            </a>
            <a
              href="#cart"
              className="btn btn-outline-success"
              style={{ color: "#0EDF26" }}
            >
              <i className="bi bi-cart"></i> Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

