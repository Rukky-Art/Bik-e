import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Bike Farms Logo"
            style={{ height: "40px" }}
            className="me-2"
          />
        </Link>

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
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Contact
              </Link>
            </li>
          </ul>

          {/* search + account + cart remain unchanged */}

          <div className="d-flex">
            <a
              href="#account"
              className="btn btn-outline-secondary me-2"
              style={{ color: "#0EDF26" }}
            >
              <i className="bi bi-person"></i> Account
            </a>
            <Link
              to="/carts"
              className="btn btn-outline-success me-2"
              style={{ color: "#0EDF26" }}
            >
              <i className="bi bi-cart"></i> Cart
            </Link>

            <Link
              to="/register"
              className="btn btn-outline-success"
              style={{ color: "#0EDF26" }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
