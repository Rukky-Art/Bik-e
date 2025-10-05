import React from "react";
import cartUrl from "../../assets/cart.svg";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/footer";
import { useSelector, useDispatch } from "react-redux";
import {type RootState } from "../../store/store";
import { addToCart, removeFromCart, clearCart } from "../../slice/cartSlice";
import { useNavigate } from "react-router-dom";

const DELIVERY_FEE = 1000;

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate totals
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + DELIVERY_FEE;

  // Increase quantity
  const handleIncrease = (id: number) => {
    dispatch(
      addToCart({
        id,
        name: cart.find((item) => item.id === id)!.name,
        price: cart.find((item) => item.id === id)!.price,
        image: cart.find((item) => item.id === id)!.image,
        quantity: 1, // always increment by +1
      })
    );
  };

  // Decrease quantity
  const handleDecrease = (id: number) => {
    dispatch(removeFromCart(id)); // reducer will -1 or remove
  };

  // Remove completely (clear one item)
  const handleRemove = (id: number) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      // Dispatch remove until item is gone
      const item = cart.find((i) => i.id === id);
      if (item) {
        for (let i = 0; i < item.quantity; i++) {
          dispatch(removeFromCart(id));
        }
      }
    }
  };

 const proceedToCheckout = () => {
   navigate("/success");
 };


  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      {/* Continue Shopping */}
      <div className="container">
        <button
          className="btn btn-outline-success mt-5"
          onClick={() => window.history.back()}
          style={{ color: "#0EDF26", borderColor: "#0EDF26" }}
        >
          <i className="bi bi-arrow-left"></i> Continue Shopping
        </button>
      </div>

      {/* Cart */}
      <div className="container">
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <img src={cartUrl} alt="cart" />
            <h3 className="text-muted mt-3">Your Cart is Empty</h3>
            <p className="text-muted">
              Looks like you have not added anything to your cart yet.
            </p>
            <a href="/" className="btn btn-success px-4 rounded-pill">
              Start Shopping
            </a>
          </div>
        ) : (
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <h4 className="fw-bold mb-3">Cart</h4>
              {cart.map((item) => (
                <div
                  className="cart-item shadow-sm p-3 rounded mb-3 bg-white"
                  key={item.id}
                >
                  <div className="row align-items-center">
                    <div className="col-md-2 col-3">
                      <img
                        src={item.image || "https://via.placeholder.com/100"}
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-3 col-9">
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                    </div>
                    <div className="col-md-2 col-6 price-text">
                      ₦ {item.price.toLocaleString()}
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => handleDecrease(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          style={{ width: "60px" }}
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => handleIncrease(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex gap-2">
                      <button
                        className="btn btn-outline-danger btn-sm flex-fill"
                        onClick={() => handleRemove(item.id)}
                      >
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div
                className="card shadow-sm sticky-top"
                style={{ top: "20px" }}
              >
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal:</span>
                    <span>₦ {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Delivery:</span>
                    <span>₦ {DELIVERY_FEE.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                    <span>Total:</span>
                    <span className="text-success">
                      ₦ {total.toLocaleString()}
                    </span>
                  </div>
                  <button
                    className="btn btn-success w-100"
                    onClick={proceedToCheckout}
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    className="btn btn-outline-danger w-100 mt-2"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
