

import CheckoutPage from './components/CheckoutPage';
import Gamelist from './components/Gamelist';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/registration" element={<Registration/>} />
          <Route exact path="/gamelist" element={<Gamelist/>} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
