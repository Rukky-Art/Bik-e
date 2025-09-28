import React from "react"

const Footer: React.FC = () => {
  const socials = [
    { href: "#twitter", icon: "twitter", title: "Twitter" },
    { href: "#instagram", icon: "instagram", title: "Instagram" },
    { href: "#facebook", icon: "facebook", title: "Facebook" },
  ]

  return (
    <footer className="bg-success text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <small>&copy; Copyright Bike Farms 2025. All rights reserved.</small>
              <a href="#privacy" className="text-white text-decoration-none">
                <small>Privacy Policy</small>
              </a>
              <a href="#terms" className="text-white text-decoration-none">
                <small>Terms &amp; Conditions</small>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end justify-content-center gap-3 mt-3 mt-md-0">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white"
                  title={social.title}
                >
                  <i
                    className={`bi bi-${social.icon}`}
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer