import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const NavBar = ()=>{

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth >= 1 && screenWidth <= 900);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (!isMobile) {
          setMenuOpen(false);
      }
  }, [isMobile]);
 

    return(
        <>
        {!isMobile ?(
        <section>
            <nav className="nav-bar"> 
                <div className="nav-bar-logo">
                    <img src='/pagina-web-pitu/imagenes/logo2.png' alt="Logo" className="img-logo" />
                </div>

                <div className="nav-bar-link" >
                    <Link to="/pagina-web-pitu/" className="link" >Inicio</Link>
                    <Link to="/pagina-web-pitu/sobreNosotros" className="link"  >Sobre Nosotros</Link>
                    <Link to="/pagina-web-pitu/areasDePractica" className="link" >Derecho Inmobiliario</Link>
                    <Link to="/pagina-web-pitu/dañosPerjuicios" className="link"  >Daños y Perjuicios</Link>
                    <Link to="/pagina-web-pitu/contacto" className="link" >Contacto</Link> 
                </div>
            </nav>
            </section>
        ) :( null
            )}



{isMobile && (
        <section>
          <nav className="nav-bar">
              <div className="nav-bar-logo">
                <img src="/pagina-web-pitu/imagenes/logo2.png" alt="Logo" className="img-logo" />
              </div>

              {!menuOpen && (
                <i class="bi bi-list" onClick={() => setMenuOpen(true)}></i>
                )}
              {menuOpen && (
                <div className="nav-bar-link">
                  <i class='bi bi-x' onClick={() => setMenuOpen(false)}></i>
                <Link to="/pagina-web-pitu/" className="link" onClick={() => setMenuOpen(false)}>Inicio</Link>
                <Link to="/pagina-web-pitu/sobreNosotros" className="link" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
                <Link to="/pagina-web-pitu/areasDePractica" className="link" onClick={() => setMenuOpen(false)}>Derecho Inmobiliario</Link>
                <Link to="/pagina-web-pitu/dañosPerjuicios" className="link" onClick={() => setMenuOpen(false)}>Daños y Perjuicios</Link>
                <Link to="/pagina-web-pitu/contacto" className="link" onClick={() => setMenuOpen(false)}>Contacto</Link>
                </div>
            )}

          </nav>
        </section>
      )}

    </>
    )
}

export default NavBar