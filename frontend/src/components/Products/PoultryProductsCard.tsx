import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";
import { useOutletContext } from "react-router-dom";
import FloatingCart from "../common/FloatingCart";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

type OutletContextType = { triggerToast: (msg: string) => void };

const PoultryProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const { triggerToast } = useOutletContext<OutletContextType>();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    triggerToast(`${product.name} added to cart ✅`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body text-center">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">₦{product.price.toLocaleString()}</p>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <FloatingCart />
    </div>
  );
};

export default PoultryProductCard;
