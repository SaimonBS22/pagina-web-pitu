 import { useState, useEffect } from "react";
 import { Helmet } from "react-helmet-async";

 const DañosYPerjuicios = () => {
   const [index, setIndex] = useState(0);
   const [fade, setFade] = useState(false);
   const [touchStartX, setTouchStartX] = useState(null);


   const datos = [
     { id:'1',src: "/imagenes/daños.webp", titulo: "Daños Contractuales", clase: "estilo-contractuales", parrafo: "Incumplimiento Contractual", parrafo1: "Indemnización por daños y perjuicios derivados de relaciones contractuales." , parrafo2:"Reclamos Comerciales."},
     { id:'2',src: "/imagenes/mala-praxis.webp", titulo: "Mala Praxis", clase: "estilo-praxis", parrafo: "Negligencia médica y errores de diagnóstico.", parrafo1: "Indemnización por daños derivados de tratamientos inadecuados.", parrafo2:"Protección de derechos de pacientes y sus familias." },
     { id:'3',src: "/imagenes/accidente-transito.webp", titulo: "Accidentes de Tránsito", clase: "estilo-transito", parrafo: "Indemnización por daños materiales y lesiones.", parrafo1: "Gestión de acuerdos con aseguradoras y litigios judiciales." , parrafo2:"Asistencia legal en casos de responsabilidad civil."},
     { id:'4',src: "/imagenes/accidente-laboral.webp", titulo: "Indemnizaciones Laborales", clase: "estilo-laboral", parrafo: "Reclamos por despidos injustificados.", parrafo1: "Accidentes y enfermedades laborales.", parrafo2:"Indemnizaciones por daños y perjuicios en el ámbito laboral." },
   ];

    const siguiente = () => {
    setFade(false); 
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % datos.length);
      setFade(true); 
    }, 100);
  };

  useEffect(() => {
    setFade(true); 
    const interval = setInterval(siguiente, 15000); 
    return () => clearInterval(interval);
  }, []);


 





  





  useEffect(() => {
   const handleKeyDown = (event) => {
     if (event.key === "ArrowRight") siguiente();
     if (event.key === "ArrowLeft") anterior();
   };

   window.addEventListener("keydown", handleKeyDown);
   return () => window.removeEventListener("keydown", handleKeyDown);
 }, []);


 const handleWheel = (event) => {
   if (event.deltaX > 50) siguiente(); 
   if (event.deltaX < -50) anterior(); 
 };


 const handleTouchStart = (event) => {
   setTouchStartX(event.touches[0].clientX);
 };

 const handleTouchEnd = (event) => {
   if (touchStartX === null) return;

   const touchEndX = event.changedTouches[0].clientX;
   const diff = touchStartX - touchEndX;

   if (diff > 50) siguiente(); 
   if (diff < -50) anterior(); 

   setTouchStartX(null);
 };


   return (
     <>
    <Helmet>
        <title>Daños y Perjuicios | Estudio Jurídico Blaksley & Aznar</title>
        <meta name="description" content="Conoce los casos de daños y perjuicios que gestionamos en Estudio Jurídico Blaksley & Aznar. Te asesoramos en situaciones legales relacionadas con daños a propiedades o lesiones." />
        <meta name="keywords" content="daños y perjuicios, asesoría legal, Estudio Jurídico Blaksley & Aznar, daño a propiedades, lesiones, abogados" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.blaksley&aznar.com/daños" />
      </Helmet>


       <section className="contenedor-daños" 
       onTouchStart={handleTouchStart} 
       onTouchEnd={handleTouchEnd}
       onWheel={handleWheel}>
       <div>
              <div className="div-daños3">
                <img src={datos[index].src} className='img-daños' alt={datos[index].titulo} />
                <h1 className={`h1-daños ${datos[index].clase} ${fade ? "fade fade-1" : ""}`}>{datos[index].titulo}</h1>
                <ul>
                  <li className={`p-daños ${fade ? "fade fade-2" : ""}`}>{datos[index].parrafo}</li>
                </ul>
                <ul>
                  <li className={`p-daños1 ${fade ? "fade fade-3" : ""}`}>{datos[index].parrafo1}</li>
                </ul>
                <ul>
                  <li className={`p-daños2 ${fade ? "fade fade-4" : ""}`}>{datos[index].parrafo2}</li>
                </ul>
              </div>
          </div>
      </section>
     </>
   );
 };

 export default DañosYPerjuicios;



