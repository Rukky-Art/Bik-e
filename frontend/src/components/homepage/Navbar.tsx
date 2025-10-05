import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../store/store";
import { useState } from "react";
import { logout } from "../../slice/authSlice"; // <-- ensure this exists

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const token = useSelector((state: RootState) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token"); // clear token
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/home">
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
                <Link className="nav-link fw-semibold" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex">
              {token ? (
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={() => setShowModal(true)}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-outline-success me-2"
                  style={{ color: "#0EDF26" }}
                >
                  Sign In
                </Link>
              )}

              <Link
                to="/carts"
                className="btn btn-outline-success me-2"
                style={{ color: "#0EDF26" }}
              >
                <i className="bi bi-cart"></i> Cart
                {cartCount > 0 && (
                  <span className="position-relative ms-2 badge rounded-pill bg-success">
                    {cartCount}
                  </span>
                )}
              </Link>

              {!token && (
                <Link
                  to="/register"
                  className="btn btn-outline-success"
                  style={{ color: "#0EDF26" }}
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Bootstrap Sign-out Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Sign Out</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to sign out?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Yes, Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
