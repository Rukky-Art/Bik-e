import React from "react"
import balami from "../../assets/products/balami.svg"
import uda from "../../assets/products/uda.svg"
import yankasa from "../../assets/products/yankasa.svg"
import zulu from "../../assets/products/zulu.svg"
import Navbar from "../homepage/Navbar"
import Footer from "../homepage/footer"
import PoultryProductCard from "./PoultryProductsCard"

const Ram: React.FC = () => {
  const products = [
    { id: 1, name: "Balami", price: 250000, image: balami },
    { id: 2, name: "Uda", price: 300000, image: uda },
    { id: 3, name: "Yankasa", price: 310000, image: yankasa },
    { id: 4, name: "Zulu", price: 290000, image: zulu },
  ]

  return (
    <div>
      
      <Navbar />
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Rams</h2>
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

export default Ram
