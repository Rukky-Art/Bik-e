import React from "react"
import finisher from "../../assets/products/finisher.svg"
import starter from "../../assets/products/starter.svg"
import layerMash from "../../assets/products/layerMash.svg"
import snailFeed from "../../assets/products/snailFeed.svg"
import feed from "../../assets/products/feed2.svg"
import stack from "../../assets/products/stack.svg"
import Navbar from "../homepage/Navbar"
import Footer from "../homepage/footer"
import PoultryProductCard from "./PoultryProductsCard"

const Feeds: React.FC = () => {
  const products = [
    { id: 1, name: "Finisher Mash(Professional)", price: 26000, image: finisher },
    { id: 2, name: "Starter Mash(Professional)", price: 24000, image: starter },
    { id: 3, name: "Layer", price: 19000, image: layerMash },
    { id: 3, name: "Snail Feed", price: 18000, image: snailFeed },
    { id: 3, name: "Soya Peel", price: 15000, image: feed },
    { id: 3, name: "Hay stack", price: 15000, image: stack },
  ]

  return (
    <div>
      <Navbar />
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Feeds</h2>
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

export default Feeds
