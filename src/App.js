import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import FarmStore from "./pages/farmStore";
import PriceList from "./pages/priceList";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="page-container">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/farmstore" element={<FarmStore />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/pricelist" element={<PriceList />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
