import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
import Homepage from "./components/homepage/Homepage";
import Services from "./components/pages/Services";
import Register from "./components/pages/Register";
import Carts from "./components/pages/Carts";
import Feeds from "./components/products/Feeds";
import Goats from "./components/products/Goats";
import Ram from "./components/products/Ram";
import Snails from "./components/products/Snails";
import Success from "./components/products/Success";
import PoultryBirds from "./components/products/PoultryBirds";
import ToastNotification from "./components/common/ToastNotification";
import LoginPage from "./components/pages/LoginPage";
import LandingPage from "./components/pages/LandingPage";
import About from "./components/pages/About";
import ContactUs from "./components/pages/Contact";

function Layout() {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // auto-hide after 2s
  };

  return (
    <>
      {/* All child routes can access triggerToast via Outlet context */}
      <Outlet context={{ triggerToast }} />
      <ToastNotification
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/goats" element={<Goats />} />
          <Route path="/ram" element={<Ram />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/snails" element={<Snails />} />
          <Route path="/success" element={<Success />} />
          <Route path="/poultry-birds" element={<PoultryBirds />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
