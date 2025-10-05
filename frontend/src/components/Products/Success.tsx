import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "./../../slice/cartSlice";

const Success: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ clear the cart once order is successful
    dispatch(clearCart());
  }, [dispatch]);

  const handleBackToShop = () => {
    navigate("/"); // go back to landing page
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-3">
      <div
        className="success-container bg-white shadow rounded-3 w-100"
        style={{ maxWidth: "600px" }}
      >
        {/* Success Header */}
        <div className="success-header bg-success text-center position-relative py-5 px-3">
          <div
            className="success-icon bg-success-subtle rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
            style={{
              width: "100px",
              height: "100px",
              background: "#20c997",
              position: "relative",
            }}
          >
            <div
              style={{
                content: "''",
                position: "absolute",
                width: "35px",
                height: "20px",
                borderLeft: "5px solid white",
                borderBottom: "5px solid white",
                transform: "rotate(-45deg) translate(2px, -5px)",
              }}
            />
          </div>
          <h1 className="text-white fw-bold mb-2">Thank You!</h1>
          <p className="text-white-50 mb-0">
            Your order was completed successfully
          </p>
        </div>

        {/* Email Section */}
        <div className="email-section text-center bg-light py-5 px-3">
          {/* ✅ Back to shop button */}
          <button
            className="btn btn-success px-4 py-2"
            style={{ backgroundColor: "#0d6e4f" }}
            onClick={handleBackToShop}
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
