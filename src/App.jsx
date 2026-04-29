import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalle from './pages/Detalle';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter basename="/Tarea4">
      <Navbar />
      <div className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuario/:id" element={<Detalle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;