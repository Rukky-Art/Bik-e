import React, { useEffect } from "react";

const Success: React.FC = () => {
  useEffect(() => {
    // Clear local cart
    localStorage.removeItem("cart");

    // Auto redirect after 5s
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
          <div className="email-icon-wrapper mb-3">
            <i
              className="bi bi-envelope"
              style={{ fontSize: "3rem", color: "#0d6e4f" }}
            ></i>
          </div>
          <p className="text-success mb-0" style={{ fontSize: "0.95rem" }}>
            An email containing your order details
            <br />
            has been sent to the email provided
          </p>
        </div>
      </div>
    </div>
  )
}

export default Success
