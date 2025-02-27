import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NavBar = ({ isMenuVisible, showMenu, hideMenu })=>{
 

    return(
        <>
        <section>
            <nav className="nav-bar"> 
                <div className="nav-bar-logo">
                    <img src='/pagina-web-pitu/imagenes/logo2.png' alt="Logo" className="img-logo" />
                </div>

                <div className="nav-bar-link" onMouseEnter={showMenu}>
                    <Link to="/pagina-web-pitu/" className="link"  onMouseEnter={hideMenu}>Inicio</Link>
                    <Link to="/pagina-web-pitu/sobreNosotros" className="link" onMouseEnter={hideMenu} >Sobre Nosotros</Link>
                    <Link to="/pagina-web-pitu/areasDePractica" className="link" onMouseEnter={showMenu}>Derecho Inmobiliario</Link>
                    <Link to="/pagina-web-pitu/dañosPerjuicios" className="link" onMouseEnter={hideMenu} >Daños y Perjuicios</Link>
                    <Link to="/pagina-web-pitu/contacto" className="link" onMouseEnter={hideMenu} >Contacto</Link> 
                </div>
            </nav>
            </section>
           
    </>
    )
}

export default NavBar