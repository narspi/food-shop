import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import 'focus-visible';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
