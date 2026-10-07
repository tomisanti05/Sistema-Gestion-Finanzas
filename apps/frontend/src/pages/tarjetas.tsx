import { useState } from "react"
import './tarjetas.css'
import { 
  Pause, 
  Trash2, 
  Pencil, 
  Film, 
  Utensils, 
  IceCream, 
  Fuel, 
  ShoppingCart, 
  Gamepad2, 
  Pill, 
  Music2, 
  Bike,
  CreditCard, ShieldCheck, Calendar1, Calendar
} from "lucide-react"
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
            <p className="numero-tarjeta"> <CreditCard size={20} /> Numero 
            <br />
              {numero} 
            </p>
            <p className="codigo-tarjeta"> <ShieldCheck size={20} /> Codigo  
              <br />
              060 
              </p>
            <p className="vencimiento-tarjeta"> <Calendar1 size={20}/> Vencimiento 
              <br />
              10/31 
              </p>
            <button>
              <Pencil size={16}/>
              Editar datos
            </button>
          </div> 
        </div>

        <div className="tarjetas-opciones">
          <div className="boton-pausar">
            <button>
              <Pause size={16} />
              <br />
              Pausar tarjeta  
            </button>
          </div>
          <div className="boton-borrar">
            <button>
            <Trash2 size={16} />
            <br />
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
          <span className="fecha-consumo"><Calendar size={16}/>  08 Oct  </span>
          <span className="lugar"><Film size={16}/> Cinemacenter BBCA </span>
          <span className="monto">- $10500</span>
        </div>
        <div className="card-historial">
          <span className="fecha-consumo"><Calendar size={16}/>  08 Oct  </span>
          <span className="lugar"><Utensils size={16}/> McDonalds </span>
          <span className="monto">- $19000</span>
        </div>
        <div className="card-historial">
          <span className="fecha-consumo"><Calendar size={16}/>  08 Oct  </span>
          <span className="lugar"><IceCream size={16}/> Lucciano's </span>
          <span className="monto">- $6500</span>
        </div>
        <div className="card-historial">
          <span className="fecha-consumo"> <Calendar size={16}/>  07 Oct</span>
          <span className="lugar"><Fuel size={16}/> YPF Estación</span>
          <span className="monto">- $24800</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo"> <Calendar size={16}/>  06 Oct</span>
          <span className="lugar"> <ShoppingCart size={16}/> Supermercado Coto</span>
          <span className="monto">- $42150</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo"> <Calendar size={16}/>  05 Oct</span>
          <span className="lugar"><Gamepad2 size={16}/> Steam Games</span>
          <span className="monto">- $15900</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo"><Calendar size={16}/>  04 Oct</span>
          <span className="lugar"><Pill size={16} /> Farmacia del Pueblo</span>
          <span className="monto">- $8900</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo"><Calendar size={16}/>  02 Oct</span>
          <span className="lugar"><Music2 size={16} /> Spotify Argentina</span>
          <span className="monto">- $4200</span>
        </div>

        <div className="card-historial">
          <span className="fecha-consumo"><Calendar size={16}/>  01 Oct</span>
          <span className="lugar"><Bike size={16}/> PedidosYa</span>
          <span className="monto"> - $11300</span>
        </div>
      </div>
    </div> 
    </div>
  </div>

  )
}
