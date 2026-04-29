import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Detalle.css';

function Detalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCargando(true);
    setError(false);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.id) {
          setError(true);
        } else {
          setUsuario(data);
        }
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <p className="estado-msg">Cargando...</p>;
  }

  if (error) {
    return (
      <div>
        <p className="estado-msg error">Usuario no encontrado.</p>
        <Link to="/" className="volver">← Volver</Link>
      </div>
    );
  }

  return (
    <div className="pagina-detalle">
      <Link to="/" className="volver">← Volver</Link>

      <div className="perfil-card">
        <div className="perfil-avatar">
          {usuario.name.charAt(0)}
        </div>
        <h2>{usuario.name}</h2>
        <p className="perfil-id">ID #{usuario.id}</p>

        <div className="perfil-datos">
          <div className="dato-item">
            <span className="dato-label">Email</span>
            <span>{usuario.email}</span>
          </div>
          <div className="dato-item">
            <span className="dato-label">Ciudad</span>
            <span>{usuario.address.city}</span>
          </div>
          <div className="dato-item">
            <span className="dato-label">Empresa</span>
            <span>{usuario.company.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detalle;