import React from "react"

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    style?: React.CSSProperties;
}

const PoultryProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
            style={product.style}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">₦{product.price.toLocaleString()}</p>
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#0EDF26" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
}

export default PoultryProductCard
