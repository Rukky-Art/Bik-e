import React from "react"
import Footer from "../homepage/footer"
import Navbar from "../homepage/Navbar"

const Register: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstName: (e.currentTarget.firstName as HTMLInputElement).value,
      lastName: (e.currentTarget.lastName as HTMLInputElement).value,
      email: (e.currentTarget.email as HTMLInputElement).value,
      phone: (e.currentTarget.phone as HTMLInputElement).value,
      password: (e.currentTarget.password as HTMLInputElement).value,
    };

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      alert("Please fill in all fields");
      return;
    }

    alert(
      `Account creation attempted for: ${formData.firstName} ${formData.lastName}`
    )
  }

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              className="form-container bg-white p-4 shadow-sm rounded"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <div className="text-center mb-4">
                <h2 className="text-success fw-bold mb-1">Create an Account</h2>
              </div>

              {/* Bootstrap Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter First Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter Last Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    required
                  />
                </div>

                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn btn-success fw-bold text-white"
                  >
                    Create an Account
                  </button>
                </div>

                <div className="text-center">
                  <small style={{ fontSize: "12px", color: "#D9D9D9" }}>
                    By signing up you accept our terms and conditions & Privacy
                    Policy
                  </small>
                </div>
                <div className="text-center">
                  <small className="text-muted">Already have an account?</small>
                  <br />
                  <a href="/login" className="btn btn-outline-success fw-bold">
                    Login
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register
