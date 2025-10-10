import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../../store/store"; 
import logo from "../../assets/logo.svg";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Redirect if user already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = document.querySelectorAll<HTMLElement>(".bg-shape");
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed - speed / 2;
        const y = mouseY * speed - speed / 2;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white hero position-relative d-flex align-items-center justify-content-center text-center text-white">
        {/* Animated Background Shapes */}
        <div className="bg-shape shape-1 position-absolute"></div>
        <div className="bg-shape shape-2 position-absolute"></div>
        <div className="bg-shape shape-3 position-absolute"></div>

        <div className="hero-content p-4" style={{ zIndex: 10 }}>
          <img
            src={logo}
            className="card-img-top"
            alt="logo"
            style={{ backgroundColor: "white" , borderRadius: "21%", width: "150px", height: "150px"}}
          />

          <p className="tagline mt-4 fs-5">
            Connecting Farmers Directly to Buyers <br />
            <strong>Save Time. Save Money. Save Energy.</strong>
          </p>

          {/* Features */}
          <div className="features d-flex justify-content-center flex-wrap gap-3 mb-4">
            <div className="feature-item d-flex align-items-center gap-2 bg-light bg-opacity-25 p-2 px-3 rounded-pill">
              <i className="bi bi-lightning-charge-fill"></i>{" "}
              <span>Quick Delivery</span>
            </div>
            <div className="feature-item d-flex align-items-center gap-2 bg-light bg-opacity-25 p-2 px-3 rounded-pill">
              <i className="bi bi-cash-coin"></i> <span>Best Prices</span>
            </div>
            <div className="feature-item d-flex align-items-center gap-2 bg-light bg-opacity-25 p-2 px-3 rounded-pill">
              <i className="bi bi-shield-check"></i>{" "}
              <span>Quality Assured</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons d-flex flex-wrap justify-content-center gap-3">
            <button
              className="btn btn-light text-success fw-bold px-5 py-2 rounded-pill shadow"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button
              className="btn btn-outline-light fw-bold px-5 py-2 rounded-pill"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="scroll-indicator position-absolute bottom-0 mb-4 start-50 translate-middle-x"
          onClick={() =>
            document
              .querySelector(".info-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-chevron-down fs-2 opacity-75 text-white"></i>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section bg-white py-5">
        <div className="container">
          <div className="row">
            {[
              {
                icon: "bi-people-fill",
                title: "Direct Connection",
                text: "We eliminate middlemen, connecting farmers directly with buyers for better prices and fresher products.",
              },
              {
                icon: "bi-clock-fill",
                title: "Save Time",
                text: "Browse our selection, place orders, and get deliveries without the hassle of traditional markets.",
              },
              {
                icon: "bi-piggy-bank-fill",
                title: "Save Money",
                text: "Get the best prices by buying directly from farmers, reducing costs for both buyers and sellers.",
              },
            ].map((info, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="info-card text-center p-4 shadow-sm border-0 rounded-4">
                  <div
                    className="info-icon mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #20c997, #198754)",
                      color: "white",
                    }}
                  >
                    <i className={`bi ${info.icon} fs-3`}></i>
                  </div>
                  <h3 className="info-title text-success fw-bold mb-2">
                    {info.title}
                  </h3>
                  <p className="info-text text-secondary">{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h2 className="fw-bold text-success mb-4">Ready to Start?</h2>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <button
                className="btn btn-success btn-lg px-5 rounded-pill"
                onClick={() => navigate("/register")}
              >
                Create Account
              </button>
              <button
                className="btn btn-outline-success btn-lg px-5 rounded-pill"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-success text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <small>
                &copy; Copyright Bike Farms {new Date().getFullYear()}. All
                rights reserved.
              </small>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-center gap-3 mt-3 mt-md-0">
              <a href="#twitter" className="text-white">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#instagram" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#facebook" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Inline Styles for floating animation */}
      <style>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #0d6e4f 0%, #198754 50%, #20c997 100%);
          overflow: hidden;
        }
        .bg-shape {
          border-radius: 50%;
          opacity: 0.1;
          position: absolute;
          animation: float 6s ease-in-out infinite;
        }
        .shape-1 {
          width: 300px; height: 300px; background: white; top: -100px; left: -100px;
        }
        .shape-2 {
          width: 200px; height: 200px; background: white; bottom: -50px; right: -50px;
          animation-duration: 8s; animation-direction: reverse;
        }
        .shape-3 {
          width: 150px; height: 150px; background: white; top: 50%; right: 10%;
          animation-duration: 7s;
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
