import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="mb-3">Contact Us</h2>
            <p className="lead">
              We’d love to hear from you. Reach us through any of the options
              below.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <i
              className="bi bi-envelope text-success"
              style={{ fontSize: "2rem" }}
            ></i>
            <p className="mt-2">
              <a
                href="mailto:rachealakorede1011@gmail.com"
                className="text-success text-decoration-none"
              >
                rachealakorede1011@gmail.com
              </a>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <i
              className="bi bi-telephone text-success"
              style={{ fontSize: "2rem" }}
            ></i>
            <p className="mt-2">
              <a
                href="tel:+2348001234567"
                className="text-success text-decoration-none"
              >
                +234 707 188 3442
              </a>
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <i
              className="bi bi-geo-alt text-success"
              style={{ fontSize: "2rem" }}
            ></i>
            <p className="mt-2">
              <a
                href="https://www.google.com/maps/place/Iso Ege Sanyo, Ibadan,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success text-decoration-none"
              >
                Ibadan, Nigeria
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
