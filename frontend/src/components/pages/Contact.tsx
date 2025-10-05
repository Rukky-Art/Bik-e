import React, { useState, type ChangeEvent, type FormEvent } from "react"
import Navbar from "../homepage/Navbar"

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface AlertType {
  msg: string;
  type: "success" | "danger";
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alert, setAlert] = useState<AlertType | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      showAlert("Please fill in all fields.", "danger");
      return;
    }

    showAlert("Thank you! Your message has been sent successfully.", "success");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const showAlert = (msg: string, type: "success" | "danger") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Alert Message */}
      {alert && (
        <div
          className={`alert alert-${alert.type} position-fixed top-0 start-50 translate-middle-x mt-3`}
          style={{ zIndex: 9999, maxWidth: "400px" }}
        >
          {alert.msg}
        </div>
      )}

      {/* Hero Section */}
      <div>
        <Navbar />
      </div>
      <section
        className="text-center text-white"
        style={{
          background: "linear-gradient(135deg, #198754 0%, #20c997 100%)",
          padding: "2.5rem 0",
        }}
      >
        <h1 className="fw-bold fs-2 mb-2">Contact Us</h1>
        <p className="mb-0">We’d love to hear from you!</p>
      </section>

      {/* Contact Section */}
      <section className="container py-4">
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="bg-white rounded-3 shadow-sm p-3 text-center h-100">
              <div
                className="mx-auto d-flex align-items-center justify-content-center mb-2"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(135deg, #20c997, #198754)",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.3rem",
                }}
              >
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h5 className="text-success fw-bold mb-2">Visit Us</h5>
              <p className="text-muted small mb-0">
                Bike Farms HQ
                <br />
                Ibadan, Oyo State
                <br />
                Nigeria
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="bg-white rounded-3 shadow-sm p-3 text-center h-100">
              <div
                className="mx-auto d-flex align-items-center justify-content-center mb-2"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(135deg, #20c997, #198754)",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.3rem",
                }}
              >
                <i className="bi bi-telephone-fill"></i>
              </div>
              <h5 className="text-success fw-bold mb-2">Call Us</h5>
              <p className="text-muted small mb-0">
                <a
                  href="tel:+2348012345678"
                  className="text-decoration-none text-muted"
                >
                  +2347071883442
                </a>
                <br />
                <small>Mon - Sat: 8AM - 6PM</small>
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="bg-white rounded-3 shadow-sm p-3 text-center h-100">
              <div
                className="mx-auto d-flex align-items-center justify-content-center mb-2"
                style={{
                  width: "50px",
                  height: "50px",
                  background: "linear-gradient(135deg, #20c997, #198754)",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.3rem",
                }}
              >
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h5 className="text-success fw-bold mb-2">Email Us</h5>
              <p className="text-muted small mb-0">
                <a
                  href="mailto:info@bikefarms.com"
                  className="text-decoration-none text-muted"
                >
                  rachealakorede1011@gmail.com
                </a>
                <br />
                <small>We reply within 24 hours</small>
              </p>
            </div>
          </div>
        </div>

        {/* Form and Map */}
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="bg-white rounded-3 shadow-sm p-3">
              <h5 className="text-success fw-bold mb-3">Send a Message</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="form-control"
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Send
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 mb-3">
            <div
              className="rounded-3 shadow-sm bg-white d-flex align-items-center justify-content-center flex-column p-3"
              style={{ height: "300px" }}
            >
              <i
                className="bi bi-map text-success mb-2"
                style={{ fontSize: "3rem", opacity: 0.3 }}
              ></i>
              <p className="text-muted small mb-0">
                Ibadan, Oyo State, Nigeria
              </p>
            </div>

            <div className="bg-white rounded-3 shadow-sm p-3 mt-3 text-center">
              <h5 className="text-success fw-bold mb-2">Follow Us</h5>
              <div>
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="d-inline-flex align-items-center justify-content-center text-white bg-success rounded-circle mx-1"
                      style={{
                        width: "40px",
                        height: "40px",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#20c997")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#198754")
                      }
                    >
                      <i className={`bi bi-${icon}`}></i>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
