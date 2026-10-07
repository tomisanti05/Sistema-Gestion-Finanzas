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
  interface Tarjeta {
  id: string;
  numero: string;
  codigo: string;
  vencimiento: string;
  estaPausada: boolean;
  } 
  interface Transaccion {
  id: number;
  fecha: string;
  lugar: string;
  monto: number;
  Icono: LucideIcon;
  }
  const [tarjetas, setTarjetas] = useState<Tarjeta[]>([
  {
    id: "card_1",
    numero: "4876 5678 2364 5978",
    codigo: "060",
    vencimiento: "10/31",
    estaPausada: false,
  },
  {
    id: "card_2",
    numero: "5412 7512 3412 8901",
    codigo: "415",
    vencimiento: "05/29",
    estaPausada: false,
  },
])
const historial_transacciones: Transaccion[] = [
  { id: 1, fecha: "08 Oct", lugar: "Cinemacenter BBCA", monto: 10500, Icono: Film },
  { id: 2, fecha: "08 Oct", lugar: "McDonalds", monto: 19000, Icono: Utensils },
  { id: 3, fecha: "08 Oct", lugar: "Lucciano's", monto: 6500, Icono: IceCream },
  { id: 4, fecha: "07 Oct", lugar: "YPF Estación", monto: 24800, Icono: Fuel },
  { id: 5, fecha: "06 Oct", lugar: "Supermercado Coto", monto: 42150, Icono: ShoppingCart },
  { id: 6, fecha: "05 Oct", lugar: "Steam Games", monto: 15900, Icono: Gamepad2 },
  { id: 7, fecha: "04 Oct", lugar: "Farmacia del Pueblo", monto: 8900, Icono: Pill },
  { id: 8, fecha: "02 Oct", lugar: "Spotify Argentina", monto: 4200, Icono: Music2 },
  { id: 9, fecha: "01 Oct", lugar: "PedidosYa", monto: 11300, Icono: Bike },
];
  
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
