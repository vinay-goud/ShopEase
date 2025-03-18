import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
