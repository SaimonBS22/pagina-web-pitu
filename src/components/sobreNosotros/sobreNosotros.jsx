import ScrollReveal from "../scrollReveal/scrollReveal.jsx"



const SobreNosotros = () => {
    return(
        <section className="contenedor-supremo-sobreN">
           
            <ScrollReveal>
            <div className="contenedor-sobre-nosotros">
                <h2 className="h2-sobre-nosotros">¿Quienes somos?</h2>
                    <p className="p-sobre-nosotros">En <b>Blaksley & Aznar</b>, contamos con una sólida trayectoria en el ámbito del derecho inmobiliario, patrimonial y de daños. Durante años, nos hemos dedicado a la resolución de casos relacionados con propiedades, consolidándonos como un referente en la provincia de Buenos Aires. Además, somos especialistas en la defensa de los derechos de quienes han sufrido perjuicios, brindando soluciones efectivas en materia de responsabilidad civil y daños.</p>
            </div>
            </ScrollReveal>

            <ScrollReveal>
            <div className="contenedor1-sobre-nosotros">
                <h2 className="h2-sobre-nosotros1">Nuestra Filosofia</h2>
                    <p className="p-sobre-nosotros1">En <b>Blaksley & Aznar</b> creemos en la excelencia, la ética y la innovación como pilares fundamentales de nuestro ejercicio profesional.
                     Nos enfocamos en proteger y regularizar los derechos de nuestros clientes, garantizando la seguridad jurídica de sus bienes y el resarcimiento justo en caso de daños.
                     Creemos en la importancia de la seguridad jurídica como pilar fundamental del bienestar personal y patrimonial. Por ello, nos dedicamos con profesionalismo y compromiso a ofrecer asesoramiento integral, convirtiéndonos en tu mejor aliado en la gestión de bienes, propiedades y reclamos por daños.</p>
            </div>
            </ScrollReveal>

            {/* <ScrollReveal>
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
            </ScrollReveal>  */}
        </section>
    )
}


export default SobreNosotros