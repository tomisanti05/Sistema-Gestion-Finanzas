import './inicio.css';

function Inicio() {
  const resumen = [
    { titulo: 'Ingresos del mes', monto: 250000, tipo: 'ingreso' },
    { titulo: 'Gastos del mes', monto: 120000, tipo: 'gasto' },
    { titulo: 'Ahorro', monto: 130000, tipo: 'ahorro' },
  ];

  const vencimientos = [
    { concepto: 'Boleta de luz', vence: '30/09', monto: 5000 },
    { concepto: 'Boleta de agua', vence: '30/09', monto: 10000 },
    { concepto: 'Boleta de gas', vence: '30/09', monto: 3000 },
  ];

  return (
    <div className="inicio">
      <h1>Hola, Nombre 👋</h1>

      <div className="saldo-card">
        <h2>Saldo total</h2>
        <p className="saldo">$ 350.000</p>
      </div>

      <div className="inicio-resumen">
        {resumen.map((r) => (
          <div key={r.titulo} className={`inicio-card ${r.tipo}`}>
            <h3>{r.titulo}</h3>
            <p>$ {r.monto.toLocaleString('es-AR')}</p>
          </div>
        ))}
      </div>

      <section className="inicio-seccion">
        <h2>Próximos vencimientos</h2>
        {vencimientos.map((v) => (
          <div key={v.concepto} className="inicio-fila">
            <span>{v.concepto}</span>
            <span>Vence {v.vence}</span>
            <span>$ {v.monto.toLocaleString('es-AR')}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Inicio;
