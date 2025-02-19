import { Link } from "react-router-dom"
import ScrollReveal from "../scrollReveal/scrollReveal.jsx"

const Footer = ()=>{
    return(
        <>
        <section className="contenedor-footer">
            
            <div className="div-footer">
            <ScrollReveal>
                <img src="/imagenes/logo-editado.png" className="img-footer" />
                <div className="div-icons">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                </div>
                </ScrollReveal>
            </div>


            
            <div className="div-footer2">
            <ScrollReveal>
                <div className="div-footer-contacto">
                   <h1 className="h1-footer">Contacto</h1> <i class="bi bi-person-rolodex"></i>
                </div>
                <p className="p-footer"><b>Email:</b> blaksleyaznar@gmail.com</p>
                <p className="p-footer"><b>Telefono:</b> +54 9 11 3215-8091</p>
                <Link to='/contacto'><button className="boton-footer">CONTACTANOS</button></Link>
            </ScrollReveal>
            </div>
            

            <div className="div-footer3">
                <ScrollReveal>
                    <div className="div-footer-contacto">
                        <h1 className="h1-footer">Oficina</h1> <i className="bi bi-geo-alt-fill"></i>
                    </div>
                        <p className="p-footer"><b>Direccion:</b> Rivadavia 195, <br /> San Isidro | Piso 5 | Depto B</p>
                        <p>TExto para que </p>
                        <p>quede bien</p>
                </ScrollReveal>
            </div>
        </section>
                <ScrollReveal>
                    <hr className="hr-footer"/>
                    <div className="div-hr-footer">
                        <i class="bi bi-c-circle"></i> <p className="p-footer-hr">Blaksley & Aznar | Todos los derechos reservados</p>
                    </div>
                </ScrollReveal>
        </>
    )
}


export default Footer