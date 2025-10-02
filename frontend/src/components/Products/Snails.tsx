import React from "react"
import achatina from "../../assets/products/achatina.svg"
import achatinaM from "../../assets/products/achatinaM.svg"
import achatinaA from "../../assets/products/achatinaA.svg"
import Navbar from "../homepage/Navbar"
import Footer from "../homepage/footer"
import PoultryProductCard from "./PoultryProductsCard"

const Snails: React.FC = () => {
  const products = [
    { id: 1, name: "Achatina Fulica", price: 3000, image: achatina },
    { id: 2, name: "Achatina M.", price: 4000, image: achatinaM },
    { id: 3, name: "Achatina A.", price: 3000, image: achatinaA },
  ]

  return (
    <div>
      <Navbar />
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Snails</h2>
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

export default Snails
