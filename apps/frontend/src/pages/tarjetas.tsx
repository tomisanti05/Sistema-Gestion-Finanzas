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

            <div className="historial tarjetas">
              <h4>Historial</h4>
              <div className="card-historial">
                <span className="fecha-consumo">fecha de consumo | 08/10  </span>
                <span className="lugar">Cinemacenter BBCA </span>
                <span className="monto">Costo: $10500</span>
              </div>
              <div className="card-historial">
                <span className="fecha-consumo">fecha de consumo | 08/10  </span>
                <span className="lugar">McDonalds </span>
                <span className="monto">Costo: $19000</span>
              </div>
              <div className="card-historial">
                <span className="fecha-consumo">fecha de consumo | 08/10  </span>
                <span className="lugar">Lucciano's </span>
                <span className="monto">Costo: $6500</span>
              </div>
            </div>
        </div>
    </div>
        


  )
}
