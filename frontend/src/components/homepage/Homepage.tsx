import React from 'react'
import Navbar from "./Navbar.tsx"
import Hero from "./Hero.tsx"
import About from "./About.tsx"
import Service from "./Service.tsx"
import Contact from "./Contact.tsx"
import Footer from "./footer.tsx"

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default Homepage
