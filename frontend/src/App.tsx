import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/homepage/Homepage"
import Services from "./components/pages/Services"
import Register from "./components/pages/Register"
import Carts from "./components/pages/Carts"
import Feeds from "./components/products/Feeds"
import Goats from "./components/products/Goats"
import Ram from "./components/products/Ram"
import Snails from "./components/products/Snails"
import Success from "./components/products/Success"
import PoultryBirds from "./components/products/PoultryBirds"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/goats" element={<Goats />} />
        <Route path="/ram" element={<Ram />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/snails" element={<Snails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/poultry-birds" element={<PoultryBirds />} />
      </Routes>
    </Router>
  )
}

export default App;
