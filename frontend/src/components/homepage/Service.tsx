import React from "react";
import bird from "../../assets/bird.svg";
import feed from "../../assets/feed.svg";
import goat from "../../assets/goat.svg";
import ram from "../../assets/ram.svg";
import snail from "../../assets/snail.svg";

const Service: React.FC = () => {
  const services = [
    { icon: bird, label: "Birds" },
    { icon: goat, label: "Goat" },
    { icon: ram, label: "Ram" },
    { icon: snail, label: "Snail" },
    { icon: feed, label: "Feed" },
  ];

  return (
    <section className="py-5" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="text-success mb-3">What We Offer</h2>
            <p className="text-muted">
              We offer a wide range of products starting from healthy livestock
              to what they eat and products from them
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row text-center">
              {services.map((item, index) => (
                <div key={index} className="col-6 col-md-2 mb-4">
                  <div
                    className="bg-success text-white rounded p-3 mb-3 mx-auto"
                    style={{
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>
                  <h6 className="text-success fw-bold">{item.label}</h6>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <a
                href="#more-services"
                className="btn btn-success px-4 py-2 rounded-pill"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
