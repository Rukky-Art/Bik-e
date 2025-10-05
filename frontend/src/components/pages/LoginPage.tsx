import React, { useEffect, useState, type FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {type AppDispatch, type RootState } from "./../../store/store";
import { signInUser } from "../../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { Modal, Spinner } from "react-bootstrap";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
    dispatch(signInUser({ email, password }));
  };

  useEffect(() => {
    if (!loading && isAuthenticated) {
      setTimeout(() => {
        setShowModal(false);
        navigate("/home");
      }, 2000);
    } else if (!loading && error) {
      setShowModal(false);
    }
  }, [loading, isAuthenticated, error, navigate]);

useEffect(() => {
  localStorage.removeItem("authToken");
}, []);



  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ background: "#f5f5f5" }}
    >

      {/* Login Container */}
      <div className="login-container flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div
          className="login-card bg-white rounded-3 shadow p-4"
          style={{ maxWidth: "450px", width: "100%" }}
        >
          <h2 className="login-title text-center fw-bold mb-4">Login</h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-medium text-dark">Email</label>
              <input
                type="email"
                className="form-control bg-dark text-white border-secondary rounded-3 p-3"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-medium text-dark">Password</label>
              <input
                type="password"
                className="form-control bg-dark text-white border-secondary rounded-3 p-3"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn login-btn w-100 py-2 fw-bold text-white"
              style={{ background: "#20c997" }}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Login"}
            </button>

            {/* Error message */}
            {error && (
              <span className="text-danger d-block text-center mt-3">
                {error}
              </span>
            )}
          </form>

          <p className="account-text text-center text-secondary mt-4 mb-1">
            Don’t have an account?
          </p>
          <a
            href="/register"
            className="create-account-btn border border-2 border-success rounded-3 d-block text-center py-2 fw-semibold text-success text-decoration-none"
          >
            Create an Account
          </a>
        </div>
      </div>

      {/* Verifying Modal */}
      <Modal show={showModal} centered>
        <Modal.Body className="text-center py-5">
          <Spinner animation="border" variant="success" />
          <p className="mt-3 mb-0 fw-semibold">Verifying your credentials...</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginPage;
