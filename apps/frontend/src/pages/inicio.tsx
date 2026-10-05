import './inicio.css';

function Inicio() {
  return (
    <div className="inicio">
      <h1>Hola, Nombre 👋</h1>

      <div className="saldo-card">
        <h2>Saldo total</h2>
        <p className="saldo">$ 350.000</p>
      </div>
    </div>
  );
}

export default Inicio;
