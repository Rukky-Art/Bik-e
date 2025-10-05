import React from "react";
import { useSelector } from "react-redux";
import {type RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const FloatingCart: React.FC = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const navigate = useNavigate();

  if (cartCount === 0) return null; // don’t show if empty

  return (
    <div
      className="position-fixed"
      style={{
        bottom: "20px",
        right: "20px",
        zIndex: 1055,
        cursor: "pointer",
      }}
      onClick={() => navigate("/carts")}
    >
      <div
        className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          width: "60px",
          height: "60px",
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        {cartCount}
      </div>
    </div>
  );
};

export default FloatingCart;
