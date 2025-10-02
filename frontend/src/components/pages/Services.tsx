import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../homepage/Navbar"
import birds from "../../assets/birds.svg"
import feeds from "../../assets/feedss.svg"
import rams from "../../assets/rams.svg"
import goats from "../../assets/goats.svg"
import snails from "../../assets/snails.svg"
import Footer from "../homepage/footer"


const Services: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="container py-5">
        {/* Title Row */}
        <div className="row">
          <div className="col text-center">
            <h4 className="text-success fw-bold mb-4">Product & Services</h4>
          </div>
        </div>

        {/* Services Teaser */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {[
              {
                title: "We have a wide range of chickens available",
                subtitle: "Fresh, healthy chickens for your farm",
                image: birds,
                path: "/poultry-birds",
              },
              {
                title: "We have different breeds of goats",
                subtitle: "Quality goats for breeding and farming",
                image: goats,
                path: "/goats",
              },
              {
                title: "Healthy different breeds of ram",
                subtitle: "Premium cattle for dairy and beef production",
                image: rams,
                path: "/ram",
              },
              {
                title: "Available wholesale snails",
                subtitle: "Fresh snails for culinary and farming purposes",
                image: snails,
                path: "/snails",
              },
              {
                title: "Feed for all mentioned",
                subtitle: "Nutritious feed for all your livestock",
                image: feeds,
                path: "/feeds",
              },
            ].map((item, index) => (
              <Link to={item.path} key={index} className="text-decoration-none">
                <div className="row align-items-center bg-success bg-gradient text-white p-3 rounded mb-3 shadow-sm">
                  <div className="col-auto">
                    <img
                      src={item.image}
                      className="img-fluid rounded"
                      alt={item.title}
                      style={{ width: "100px" }}
                    />
                  </div>
                  <div className="col">
                    <h6 className="mb-1 fw-bold">{item.title}</h6>
                    <small className="opacity-75">{item.subtitle}</small>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services
