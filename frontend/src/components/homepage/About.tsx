import React from "react"


const About: React.FC = () => {
    return (
      <section className="py-5 bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="text-success mb-3">About Us</h2>
                <h4 className="text-muted mb-4">From livestock to Feedstock</h4>
              </div>

              <div>
                <div>
                  <p>
                    At Bìkẹ Farms, we are dedicated to providing healthy,
                    high-quality livestock, young animals, and reliable
                    feedstock to farmers, breeders, and agricultural
                    enthusiasts. Our farm combines modern farming practices with
                    a deep respect for tradition to ensure the best care for our
                    animals and the highest standards of production. We
                    specialize in raising well-nurtured livestock and young
                    stock that are strong, disease-free, and ready to thrive in
                    their new environments. Alongside this, we supply carefully
                    selected feedstocks designed to support optimal animal
                    growth, nutrition, and productivity. With a commitment to
                    excellence, transparency, and sustainable farming, Bìkẹ
                    Farm stands as a trusted partner in livestock and feed
                    supply, helping our customers grow healthier herds and build
                    stronger farms
                  </p>
                  <div className="text-center">
                    <a
                      href="#more-about"
                      className="btn btn-success px-4 py-2 rounded-pill"
                      style={{ backgroundColor: "#0EDF26", width: "200px" }}
                    >
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About
