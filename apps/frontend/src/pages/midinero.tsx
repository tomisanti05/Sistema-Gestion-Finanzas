import './midinero.css';

function MiDinero() {
  const cuentas = [
    { nombre: 'Efectivo', monto: 50000 },
    { nombre: 'Cuenta corriente', monto: 200000 },
    { nombre: 'Caja de ahorro', monto: 100000 },
  ];

  return (
    <div className="midinero">
      <h1>Mi dinero</h1>

      <div className="saldo-card">
        <h2>Dinero total</h2>
        <p className="saldo">$ 350.000</p>
      </div>

      <section className="midinero-seccion">
        <h2>Mis cuentas</h2>
        {cuentas.map((c) => (
          <div key={c.nombre} className="midinero-fila midinero-cuenta">
            <span className="midinero-concepto">{c.nombre}</span>
            <span className="midinero-monto">$ {c.monto.toLocaleString('es-AR')}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MiDinero;
