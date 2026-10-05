import './account.css';

function Account() {
  return (
    <div className="account-card">
      <h1>Mi cuenta</h1>

      <h2>Información personal</h2>
      <div className="info-row">
        <div className="avatar-circle">IM</div>
        <p>Ian Franco Manfredi</p>
        <button className="btn-edit">Editar</button>
      </div>
      <p>Correo electronico: ian.manfredi12@gmail.com</p>
      <p>Teléfono: 2914368082</p>

      <h2>Seguridad</h2>
      <p>Cambiar contraseña</p>
      <p>
        ********* <button className="btn-edit">Editar</button>
      </p>

      <button className="btn-delete">Eliminar cuenta</button>

      <br />
      <br />

      <button>Cerrar sesion</button>
    </div>
  );
}

export default Account;