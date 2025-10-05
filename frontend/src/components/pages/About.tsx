import React from "react";
import Navbar from "../homepage/Navbar";
import Footer from "../homepage/footer";

const About: React.FC = () => {
  return (
    <div className="bg-light">
      <Navbar />

      {/* Main Content */}
      <section className="content-section py-5">
        <div className="container">
          {/* Our Story */}
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
              <h2 className="section-title text-center text-success fw-bold mb-4">
                Our Story
              </h2>
              <p className="lead text-center mb-4">
                At Bìkẹ Farms, we are dedicated to providing healthy,
                high-quality livestock, young animals, and reliable feedstock to
                farmers, breeders, and agricultural enthusiasts. Our farm
                combines modern farming practices with a deep respect for
                tradition to ensure the best care for our animals and the
                highest standards of production. We specialize in raising
                well-nurtured livestock and young stock that are strong,
                disease-free, and ready to thrive in their new environments.
                Alongside this, we supply carefully selected feedstocks designed
                to support optimal animal growth, nutrition, and productivity.
                With a commitment to excellence, transparency, and sustainable
                farming, Bìkẹ Farm stands as a trusted partner in livestock and
                feed supply, helping our customers grow healthier herds and
                build stronger farms
              </p>
              <div
                className="mission-card bg-light p-4 rounded"
                style={{
                  borderLeft: "4px solid #198754",
                }}
              >
                <p>
                  Our farm embraces modern farming practices with a deep respect
                  for tradition to ensure the best care for our animals and the
                  highest standards of production. We specialize in raising
                  well-nurtured livestock and young stock that are strong,
                  disease-free, and ready to thrive in their new environments.
                </p>
                <p>
                  Alongside this, we supply carefully selected feedstocks that
                  promote optimal growth and health for various types of farm
                  animals. We believe in connecting farmers directly with
                  buyers, eliminating middlemen to save time, money, and energy
                  for everyone involved.
                </p>
                <p>
                  With a commitment to excellence, transparency, and sustainable
                  farming, Bìkẹ Farms stands as a trusted partner in livestock
                  and feed supply, helping our customers grow healthier herds
                  and build stronger farms.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title text-center text-success fw-bold mb-5">
                Our Core Values
              </h2>
            </div>

            {[
              {
                icon: "bi-heart-fill",
                title: "Quality First",
                text: "We ensure all our livestock and products meet the highest quality standards for our customers.",
              },
              {
                icon: "bi-people-fill",
                title: "Direct Connection",
                text: "We connect farmers directly with buyers, creating fair prices and building lasting relationships.",
              },
              {
                icon: "bi-leaf-fill",
                title: "Sustainability",
                text: "We practice sustainable farming methods that care for animals and the environment.",
              },
            ].map((value, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="value-item text-center p-4 h-100"
                  style={{ transition: "transform 0.3s" }}
                >
                  <div
                    className="value-icon mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      background: "linear-gradient(135deg, #20c997, #198754)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "2rem",
                      margin: "0 auto",
                    }}
                  >
                    <i className={`bi ${value.icon}`}></i>
                  </div>
                  <h4 className="fw-bold mb-3">{value.title}</h4>
                  <p className="text-muted">{value.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="row mb-5 py-5 bg-white rounded shadow-sm">
            <div className="col-12 mb-4">
              <h2 className="section-title text-center text-success fw-bold mb-5">
                By The Numbers
              </h2>
            </div>
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "1000+", label: "Livestock Sold" },
              { number: "50+", label: "Farm Partners" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div className="col-md-3 col-6 mb-4" key={index}>
                <div className="stat-card text-center p-4 bg-white rounded shadow-sm h-100">
                  <div
                    className="stat-number fw-bold mb-2"
                    style={{ fontSize: "3rem", color: "#198754" }}
                  >
                    {stat.number}
                  </div>
                  <div className="stat-label text-muted fs-6">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* What We Offer */}
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="section-title text-success fw-bold mb-3">
                What We Offer
              </h2>
              <p className="text-muted">
                We offer a wide range of products starting from healthy
                livestock to what they eat and products from them.
              </p>
            </div>

            {[
              {
                icon: "bi-egg",
                title: "Poultry Birds",
                text: "Chickens, ducks, turkeys, and more",
              },
              {
                icon: "bi-triangle",
                title: "Goats & Rams",
                text: "Various breeds for meat and dairy",
              },
              {
                icon: "bi-bag",
                title: "Feed & Snails",
                text: "Quality feed and fresh snails",
              },
            ].map((offer, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card border-0 shadow-sm h-100 text-center p-4">
                  <i
                    className={`bi ${offer.icon} text-success`}
                    style={{ fontSize: "3rem" }}
                  ></i>
                  <h5 className="mt-3 fw-bold">{offer.title}</h5>
                  <p className="text-muted">{offer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About
