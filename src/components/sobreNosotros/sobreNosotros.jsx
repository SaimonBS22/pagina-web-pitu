import ScrollReveal from "../scrollReveal/scrollReveal.jsx"
import { Helmet } from "react-helmet-async"



const SobreNosotros = () => {
    return(
        <>
      <Helmet>
        <title>¿Quiénes somos? | Estudio Jurídico Blaksley & Aznar</title>
        <meta name="description" content="Conoce a Blaksley & Aznar, un estudio jurídico con amplia experiencia en derecho inmobiliario, patrimonial y de daños. Nuestra filosofía se basa en la ética, excelencia e innovación." />
        <meta name="keywords" content="Blaksley & Aznar, derecho inmobiliario, derecho patrimonial, derecho de daños, abogados Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.blaksley&aznar.com/quienes-somos" />
      </Helmet>

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
                    <p className="p-sobre-nosotros1">Creemos en la excelencia, la ética y la innovación como pilares fundamentales de nuestro ejercicio profesional. Protegemos los derechos 
                        de nuestros clientes, asegurando su seguridad jurídica y su crecimiento justo. Con compromiso y profesionalismo, ofrecemos acompañamiento integral para la gestión de bienes, propiedades y reclamos.</p>
            </div>
            </ScrollReveal>
        </section>
        </>
    )
}


export default SobreNosotros