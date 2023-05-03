

import CheckoutPage from './components/CheckoutPage';
import Gamelist from './components/Gamelist';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Registration from './components/Registration';
import Ck from './components/Ck';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/registration" element={<Registration/>} />
          <Route exact path="/gamelist" element={<Gamelist/>} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
         {/*  <Route exact path="/checkout" element={<Ck />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
