import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {type AppDispatch, type RootState } from "./../../store/store";
import { signUpUser } from "./../../slice/authSlice";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      signUpUser({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
      })
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home"); // ✅ redirect to home after success
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              className="form-container bg-white p-4 shadow-sm rounded"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <div className="text-center mb-4">
                <h2 className="text-success fw-bold mb-1">Create an Account</h2>
              </div>

              {/* Bootstrap Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* ✅ Show error below button */}
                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn btn-success fw-bold text-white"
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Create an Account"}
                  </button>
                </div>

                {error && (
                  <div className="text-center text-danger fw-bold mb-3">
                    <span>{error}</span>
                  </div>
                )}

                <div className="text-center">
                  <small style={{ fontSize: "12px", color: "#D9D9D9" }}>
                    By signing up you accept our Terms & Conditions & Privacy
                    Policy
                  </small>
                </div>

                <div className="text-center mt-3">
                  <small className="text-muted">Already have an account?</small>
                  <br />
                  <a
                    href="/login"
                    className="btn btn-outline-success fw-bold mt-2"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Simple Bootstrap modal for verifying */}
      {loading && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <div
                className="spinner-border text-success mb-3"
                role="status"
              ></div>
              <p className="mb-0">Verifying...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
