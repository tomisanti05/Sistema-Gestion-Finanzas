import { NavLink } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
    const sidebarLinks = [

        { path: "/Inicio", name: "Inicio"},
        { path: "/Midinero", name: "Mi dinero"},
        { path: "/Facturacion", name: "Facturacion"},
        { path: "/Tarjetas", name: "Tarjetas"},
        { path: "/Subscripciones", name: "Subscripciones"},
        { path: "/MiCuenta", name: "Mi cuenta"}
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