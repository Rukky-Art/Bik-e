import React from 'react'

const Services: React.FC = () => {
  return (
    <div>
          {/* Services Teaser */}
          <div className="col-lg-6">
              <h4 className="text-success fw-bold mb-4">Product & Services</h4>

              {[
                  {
                      title: "We have a wide range of chickens available",
                      subtitle: "Fresh, healthy chickens for your farm",
                  },
                  {
                      title: "We have different breeds of goats",
                      subtitle: "Quality goats for breeding and farming",
                  },
                  {
                      title: "Healthy different breeds of cow",
                      subtitle: "Premium cattle for dairy and beef production",
                  },
                  {
                      title: "Available wholesale snails",
                      subtitle: "Fresh snails for culinary and farming purposes",
                  },
                  {
                      title: "Feed for all mentioned",
                      subtitle: "Nutritious feed for all your livestock",
                  },
              ].map((item, index) => (
                  <div
                      key={index}
                      className="product-card bg-success bg-gradient text-white p-3 rounded mb-3 shadow-sm"
                  >
                      <h6 className="mb-1 fw-bold">{item.title}</h6>
                      <small className="opacity-75">{item.subtitle}</small>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default Services
