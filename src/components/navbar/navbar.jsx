import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const NavBar = ({ isMenuVisible, showMenu, hideMenu })=>{
 

    return(
        <>
        <section>
            <nav className="nav-bar"> 
                <div className="nav-bar-logo">
                    <img src={`${process.env.PUBLIC_URL}/imagenes/logo2.png`} alt="Logo" className="img-logo" />
                </div>

                <div className="nav-bar-link" onMouseEnter={showMenu}>
                    <Link to="/" className="link"  onMouseEnter={hideMenu}>Inicio</Link>
                    <Link to="/sobreNosotros" className="link" onMouseEnter={hideMenu} >Sobre Nosotros</Link>
                    <Link to="/areasDePractica" className="link" onMouseEnter={showMenu}>Areas de Practica</Link>
                    <Link to="/dañosPerjuicios" className="link" onMouseEnter={hideMenu} >Daños y Perjuicios</Link>
                    <Link to="/contacto" className="link" onMouseEnter={hideMenu} >Contacto</Link> 
                </div>
            </nav>
            </section>
            <div className="menu-hamburguesa-container" >
            {isMenuVisible&& (
                <div  >
                <motion.div
                onMouseEnter={showMenu}
                    className="menu-hamburguesa"
                    initial={{ height: 0, opacity: 0 }}
                    animate={isMenuVisible ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                 <h3 className="h3-menu-hamburguesa">Areas de Practica</h3>
                    <div className="div-link-menu-hamburguesa">
                        <li>
                            <Link to="/derecho-civil" className="link-menu-hamburguesa">Derecho civil</Link>
                        </li>
                        <li>
                            <Link to="/real-estate" className="link-menu-hamburguesa">Real Estate</Link>
                        </li>
                        <li>
                            <Link to="/regularizacion-de-propiedades" className="link-menu-hamburguesa">Regularización de Propiedades</Link>
                        </li>
                    </div>

                    <div className="div-link-menu-hamburguesa">
                        <li>
                            <Link to="/sucesiones" className="link-menu-hamburguesa">Sucesiones</Link>
                        </li>
                        <li>
                            <Link to="/divisiones-de-condominio" className="link-menu-hamburguesa">Divisiones de condominio</Link>
                        </li>
                        <li>
                            <Link to="/subdivisiones-lotes-y-mensuras" className="link-menu-hamburguesa">Subdivisiones, lotes y mensuras</Link>
                        </li>
                    </div>
                   
                   <div className="div-link-menu-hamburguesa">
                        <li>
                            <Link to="/acciones-reivindicatorias" className="link-menu-hamburguesa">Acciones reivindicatorias</Link>
                        </li>
                        <li>
                            <Link to="/desalojos-civiles" className="link-menu-hamburguesa">Desalojos civiles</Link>
                        </li>
                        <li>
                            <Link to="/acciones-posesorias-e-interdictos" className="link-menu-hamburguesa">Acciones posesorias e interdictos</Link>
                        </li>
                        <li>
                            <Link to="/regularizacion-de-dominio-y-titulos-de-propiedad" className="link-menu-hamburguesa">Regularización de dominio y títulos de propiedad</Link>
                        </li>
                   </div>
                    
                </motion.div>
                </div>
                )}
        </div>


    </>
    )
}

export default NavBar