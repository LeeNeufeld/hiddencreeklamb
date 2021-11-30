import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import FarmStore from './pages/farmStore';
import PriceList from './pages/priceList';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        
        <Router>
          <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/farmstore" component={FarmStore} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/pricelist" component={PriceList} />
          </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
