import React from "react"
import boer from "../../assets/products/boer.svg"
import dwarf from "../../assets/products/dwarf.svg";
import kalahari from "../../assets/products/kalahari.svg"
import wad from "../../assets/products/wad.svg"
import sokoto from "../../assets/products/sokoto.svg"
import sahelian from "../../assets/products/sahelian.svg"
import Navbar from "../homepage/Navbar"
import Footer from "../homepage/footer"
import PoultryProductCard from "./PoultryProductsCard"

const Goat: React.FC = () => {
  const products = [
    { id: 1, name: "Boer", price: 100000, image: boer },
    { id: 2, name: "Nigerian Dwarf", price: 65000, image: dwarf },
    { id: 3, name: "Kalahari Red", price: 350000, image: kalahari },
    { id: 4, name: "Wad", price: 65000, image: wad },
    {
      id: 5,
      name: "Sokoto Red",
      price: 150000,
      image: sokoto,
      style: { marginLeft: "10px" },
    },
    { id: 6, name: "Sahelian", price: 120000, image: sahelian },
  ]

  return (
    <div>
      <Navbar />
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Goats</h2>
      <div className="row">
        {products.map((item) => (
          <PoultryProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
      <Footer />

    </div>
  )
}

export default Goat
