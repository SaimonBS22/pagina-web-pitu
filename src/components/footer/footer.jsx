import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollReveal from "../scrollReveal/scrollReveal.jsx";

const Footer = ()=> {
    return(
        <>
            <div className="div-footer">
                <ScrollReveal>
                    <img src="/imagenes/logo-editado.png" alt="" className="img-footer"/>
                    <div className="div-footer-icons"> 
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </ScrollReveal>
            </div>
        </>
    )
}


export default Footer