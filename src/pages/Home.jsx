import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  function handleBuscar() {
    navigate(`/usuario/${id}`);
  }

  return (
    <div className="pagina">
      <h2>Buscar usuario</h2>
      <p>Selecciona un ID del 1 al 10</p>

      <div className="form-buscar">
        <input
          type="number"
          min="1"
          max="10"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleBuscar}>Buscar →</button>
      </div>
    </div>
  );
}

export default Home;