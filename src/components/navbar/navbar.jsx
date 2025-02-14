import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = ()=>{
 const [menuOpen, setMenuOpen] = useState(false)
    return(
        <>
     <nav className="nav-bar"> 
        <div className="nav-bar-logo">
            <h2 className="h2-logo">Logo</h2>
        </div>

        <div className="nav-bar-link">
            <Link to="/inicio" className="link">Inicio</Link>
            <Link to="/sobreNosotros" className="link">Sobre Nosotros</Link>
            <Link to="/areasDePractica" className="link" 
            onMouseEnter={()=>setMenuOpen(true)}  onMouseLeave={()=> setMenuOpen(false)}>Areas de Practica</Link>
                    {menuOpen && (
                        <div className="menu-hamburguesa">
                            <Link to="/derecho-civil" className="link-menu-hamburguesa">Derecho civil</Link>
                            <Link to="/real-estate" className="link-menu-hamburguesa">Real Estate</Link>
                            <Link to="/regularizacion-de-propiedades" className="link-menu-hamburguesa">Regularización de Propiedades</Link>
                            <Link to="/sucesiones" className="link-menu-hamburguesa">Sucesiones</Link>
                            <Link to="/divisiones-de-condominio" className="link-menu-hamburguesa">Divisiones de condominio</Link>
                            <Link to="/subdivisiones-lotes-y-mensuras" className="link-menu-hamburguesa">Subdivisiones, lotes y mensuras</Link>
                            <Link to="/acciones-reivindicatorias" className="link-menu-hamburguesa">Acciones reivindicatorias</Link>
                            <Link to="/desalojos-civiles" className="link-menu-hamburguesa">Desalojos civiles</Link>
                            <Link to="/acciones-posesorias-e-interdictos" className="link-menu-hamburguesa">Acciones posesorias e interdictos</Link>
                            <Link to="/regularizacion-de-dominio-y-titulos-de-propiedad" className="link-menu-hamburguesa">Regularización de dominio y títulos de propiedad</Link>
                        </div>)}
            <Link to="/dañosPerjuicios" className="link">Daños y Perjuicios</Link>
            <Link to="/contacto" className="link">Contacto</Link> 
        </div>
    </nav>

    </>
    )
}

export default NavBar