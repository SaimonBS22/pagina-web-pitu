import ScrollReveal from "../scrollReveal/scrollReveal.jsx"
import Contacto from "../contacto/contacto.jsx"



const SobreNosotros = () => {
    return(
        <section className="contenedor-supremo-sobreN">
            <hr />
            <ScrollReveal>
            <div className="contenedor-sobre-nosotros">
                <h2 className="h2-sobre-nosotros">¿Quienes somos?</h2>
                    <p className="p-sobre-nosotros"><b>Blaksley & Aznar</b> es un estudio jurídico de prestigio que se especializa en brindar asesoramiento
                        legal integral a empresas y particulares. Con una trayectoria consolidada y un equipo de abogados
                        altamente capacitados, ofrecemos soluciones estratégicas para enfrentar los desafíos legales de
                        un mundo en constante cambio.</p>
            </div>
            </ScrollReveal>

            <ScrollReveal>
            <div className="contenedor1-sobre-nosotros">
                <h2 className="h2-sobre-nosotros1">Nuestra Filosofia</h2>
                    <p className="p-sobre-nosotros">En <b>Blaksley & Aznar</b> creemos en la excelencia, la ética y la innovación como pilares fundamentales de nuestro ejercicio profesional.
                     Nos enfocamos en comprender a fondo las necesidades de nuestros clientes para ofrecer respuestas eficientes y personalizadas. Nuestro objetivo es
                      proporcionar seguridad jurídica y garantizar el mejor resultado en cada caso.</p>
            </div>
            </ScrollReveal>

            <ScrollReveal>
            <div className="contenedor2-sobre-nosotros"> 
                <div className="div-foto-trabajador">
                    <img src="" alt="Foto de trabajador" className="img-sobre-nosotros-trabajador"/>
                    <ul className="ul-foto-trabajador">
                        <li>Fransisco Blaksley</li>
                        <li>Abogado</li>
                        <li>Datos</li>
                    </ul>
                </div>
                <div className="div-foto-trabajador">
                    <img src="" alt="Foto de trabajador" className="img-sobre-nosotros-trabajador"/>
                    <ul className="ul-foto-trabajador"> 
                        <li>Milagros Aznar</li>
                        <li>Abogado</li>
                        <li>Datos</li>
                    </ul>
                </div>
            </div>
            </ScrollReveal> 
        </section>
    )
}


export default SobreNosotros