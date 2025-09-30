import Navbar from "./components/homepage/Navbar.tsx"
import Hero from "./components/homepage/Hero.tsx"
import About from "./components/homepage/About.tsx"
import Service from "./components/homepage/Service.tsx"
import Contact from "./components/homepage/Contact.tsx"
import Footer from "./components/homepage/footer.tsx"
import PoultryBirds from "./components/Products/PoultryBirds.tsx"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Contact />
      <Footer />
      <PoultryBirds/>
    </>
  )
}

export default App
