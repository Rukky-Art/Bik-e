import React, { useEffect, useState } from "react"
import cartUrl from "../../assets/cart.svg";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/footer";

const DELIVERY_FEE = 5000;

interface CartItemType {
  name: string;
  price: number;
  quantity: number;
  category?: string;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  // Load from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  // Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (index: number, change: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const setQuantity = (index: number, value: number) => {
    const quantity = parseInt(value.toString());
    if (quantity > 0) {
      setCart((prev) =>
        prev.map((item, i) => (i === index ? { ...item, quantity } : item))
      );
    }
  };

  const removeItem = (index: number) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCart((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const saveForLater = (index: number) => {
    alert(`${cart[index].name} saved for later!`);
    // You could implement "saved items" here
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + DELIVERY_FEE;

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Proceeding to checkout\nTotal: ₦${total.toLocaleString()}`);
    // Navigate to checkout page if needed
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Cart Header */}
      <div>
        <Navbar />
      </div>

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
              {cart.map((item, index) => (
                <div
                  className="cart-item shadow-sm p-3 rounded mb-3 bg-white"
                  key={index}
                >
                  <div className="row align-items-center">
                    <div className="col-md-2 col-3">
                      <img
                        src="https://via.placeholder.com/100"
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-3 col-9">
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <small className="text-muted">
                        {item.category || "Livestock"}
                      </small>
                    </div>
                    <div className="col-md-2 col-6 price-text">
                      ₦ {item.price.toLocaleString()}
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => updateQuantity(index, -1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          style={{ width: "60px" }}
                          value={item.quantity}
                          onChange={(e) =>
                            setQuantity(index, Number(e.target.value))
                          }
                          min={1}
                        />
                        <button
                          className="btn btn-outline-success btn-sm"
                          onClick={() => updateQuantity(index, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex gap-2">
                      <button
                        className="btn btn-outline-success btn-sm flex-fill"
                        onClick={() => saveForLater(index)}
                      >
                        <i className="bi bi-heart"></i> Save
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm flex-fill"
                        onClick={() => removeItem(index)}
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart
