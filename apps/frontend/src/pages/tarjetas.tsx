import { useState } from "react"
import './tarjetas.css'

export default function Tarjetas() {
  const [numero, setNumero] = useState("4876 5678 2364 5978")
  const tipo = numero.startsWith("4") ? "visa" : "mastercard"
  
  return (
  
  <div className="tarjetas-container">
    
      <div className="tarjetas-header">
        <h1>Mis Tarjetas</h1>
      </div>
    <div className="tarjetas-grid">
    <div className="tarjetas-body-izq">

      <div className="tarjetas-content">
        <div className="tarjetas-imagen"> 
          <img 
            src={`/img/tarjetas/${tipo}_tarjeta.png`}
            alt={`Tarjeta ${tipo}`}
            width="350" 
            height="221" 
            /> 
        </div>

        <div className="tarjetas-descripcion">
          <div className="datos-tarjeta">
            <p className="numero-tarjeta"> numero: {numero} </p>
            <p className="codigo-tarjeta"> codigo: 060 </p>
            <p className="vencimiento-tarjeta"> vencimiento: 10/31 </p>
            <button>
              editar datos
            </button>
          </div> 
        </div>

        <div className="tarjetas-opciones">
          <div className="boton-pausar">
            <button>
              Pausar tarjeta  
            </button>
          </div>
          <div className="boton-borrar">
            <button>
              Borrar tarjeta
            </button>
          </div>
        </div>
      </div> 
      </div>

    
    <div className="tarjeta-body-der">
      <div className="historial-tarjetas">
        <h2>Historial</h2>
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
        <div className="card-historial">
          <span className="fecha-consumo">fecha de consumo | 07/10</span>
          <span className="lugar">YPF Estación</span>
          <span className="monto">Costo: $24800</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo">fecha de consumo | 06/10</span>
          <span className="lugar">Supermercado Coto</span>
          <span className="monto">Costo: $42150</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo">fecha de consumo | 05/10</span>
          <span className="lugar">Steam Games</span>
          <span className="monto">Costo: $15900</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo">fecha de consumo | 04/10</span>
          <span className="lugar">Farmacia del Pueblo</span>
          <span className="monto">Costo: $8900</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo">fecha de consumo | 02/10</span>
          <span className="lugar">Spotify Argentina</span>
          <span className="monto">Costo: $4200</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo">fecha de consumo | 01/10</span>
          <span className="lugar">PedidosYa</span>
          <span className="monto">Costo: $11300</span>
        </div>
      </div>
    </div> 
    </div>
  </div>

  )
}
