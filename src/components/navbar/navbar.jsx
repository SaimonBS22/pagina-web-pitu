import { Link } from "react-router-dom"

const NavBar = ()=>{
    return(
     <nav className="nav-bar"> 
        <div className="nav-bar-logo">
            <h2>Logo</h2>
        </div>

        <div className="nav-bar-link">
            <Link to="/inicio" className="link">Inicio</Link>
            <Link to="/sobreNosotros" className="link">Sobre Nosotros</Link>
            <Link to="/areasDePractica" className="link">Areas de Practica</Link>
            <Link to="/dañosPerjuicios" className="link">Daños y Perjuicios</Link>
            <Link to="/contacto" className="link">Contacto</Link> 
        </div>
    </nav>
    )
}

export default NavBar