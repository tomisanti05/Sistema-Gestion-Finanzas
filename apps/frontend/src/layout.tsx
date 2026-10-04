import { NavLink } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
    const sidebarLinks = [

        { path: "/inicio", name: "Inicio"},
        { path: "/midinero", name: "Mi dinero"},
        { path: "/facturacion", name: "Facturacion"},
        { path: "/tarjetas", name: "Tarjetas"},
        { path: "/subscripciones", name: "Subscripciones"},
        { path: "/miCuenta", name: "Mi cuenta"}
        ];
    return(
      <div className="Layout">
        <h1>Bienvenido "Nombre"</h1>
        <nav className="sidebar-menu">
            {sidebarLinks.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className= {({ isActive }: any) => isActive ? "white" : "gray"}
                >
                    {link.name}
                </NavLink>
            ))}
        </nav>
      </div>
    )
    
}