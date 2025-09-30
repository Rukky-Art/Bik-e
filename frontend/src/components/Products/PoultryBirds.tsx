import React from "react";
import broiler from "../../assets/products/broiler.svg";
import noiler from "../../assets/products/noiler.svg";
import turkey from "../../assets/products/turkey.svg";
import guinea from "../../assets/products/guineaFowl.svg";
import duck from "../../assets/products/duck.svg";
import layer from "../../assets/products/layer.svg";
import Navbar from "../homepage/Navbar"
import Footer from "../homepage/footer";
import PoultryProductCard from "../../components/Products/PoultryProductsCard"

const PoultryBirds: React.FC = () => {
  const products = [
    { id: 1, name: "Broiler", price: 25000, image: broiler },
    { id: 2, name: "Noiler", price: 12000, image: noiler },
    { id: 3, name: "Turkey", price: 15000, image: turkey },
    { id: 4, name: "Guinea Fowl", price: 15000, image: guinea },
    {
      id: 5,
      name: "Duck",
      price: 15000,
      image: duck,
      style: { marginLeft: "10px" },
    },
    { id: 6, name: "Layer", price: 15000, image: layer },
  ];

  return (
    <div className="container my-5">
      <Navbar />
      <h2 className="text-center text-success mb-4">Poultry Birds</h2>
      <div className="row">
        {products.map((item) => (
          <PoultryProductCard key={item.id} product={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default PoultryBirds
