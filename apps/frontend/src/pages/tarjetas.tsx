import { useState } from "react"

export default function Tarjetas() {
  const [tipo,setTipo] = useState < 'visa' | 'mastercard'>('mastercard')
  
  return (
    <div className="tarjetas-body">
        <div className="tarjetas-header">
            <h1> Mis Tarjetas </h1>
        </div>
        <div className="tarjetas-content">
            <div className="tarjetas-imagen"> 
                <img src="../public/img/tarjetas/mastercard_tarjeta.png" alt="Tarjeta mastercard" width="350" height="221" /> 
            </div>
            <div className="tarjetas-descripcion">
              <p className="datos de tarjeta">
                <p> numero:7876 5678 2364 5978 </p>

                <p> codigo: 060 </p>
                <p> vencimiento: 10/31 </p>
                <button>
                  editar datos
                </button>
              </p> 
            </div>
            <div className="tarjetas-opciones">
              <p className="boton">
              <button>
                pausar tarjeta  
              </button>
              <button>
              borrar tarjeta
              </button>
              </p>
            </div>

            <div className="historial tarjetas"> historial de tarjetas</div>
        </div>
    </div>
        


  )
}
