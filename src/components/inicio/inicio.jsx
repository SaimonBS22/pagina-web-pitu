import { Helmet } from "react-helmet-async";

const Inicio = () => {
    return (
        <>
         <Helmet>
                <title>Inicio | Estudio Jurídico Blaksley & Aznar</title>
                <meta name="description" content="Blaksley & Aznar, expertos en Derecho Civil y Real Estate, ofrecemos soluciones efectivas en conflictos patrimoniales con un enfoque profesional y eficiente." />
                <meta name="keywords" content="Derecho Civil, Real Estate, conflictos patrimoniales, abogados Buenos Aires, Blaksley & Aznar" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.blaksley&aznar.com" />
        </Helmet>
        <div className="video-container">
            <video className="video-inicio" src="./videos/videos/ed1.mp4" autoPlay muted loop playsInline></video>
            <h1 className="h3-inicio">Especialistas en Derecho Civil y Real Estate</h1>
            <h3 className="p-inicio">Resolviendo conflictos patrimoniales con eficiencia y profesionalismo</h3>
        </div>
        
        </>
    );
}

export default Inicio;

