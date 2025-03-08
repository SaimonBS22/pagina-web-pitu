 import { useState, useEffect, useRef } from "react";

 const DañosYPerjuicios = () => {
   const [index, setIndex] = useState(0);
   const [fade, setFade] = useState(false);
   const [touchStartX, setTouchStartX] = useState(null);


   const datos = [
     { id:'1',src: "/pagina-web-pitu/imagenes/daños-contractuales.jpg", titulo: "Daños Contractuales", clase: "estilo-contractuales", parrafo: "Incumplimiento Contractual", parrafo1: "Indemnización por daños y perjuicios derivados de relaciones contractuales." , parrafo2:"Reclamos Comerciales."},
     { id:'2',src: "/pagina-web-pitu/imagenes/mala-praxis.jpg", titulo: "Mala Praxis", clase: "estilo-praxis", parrafo: "Negligencia médica y errores de diagnóstico.", parrafo1: "Indemnización por daños derivados de tratamientos inadecuados.", parrafo2:"Protección de derechos de pacientes y sus familias." },
     { id:'3',src: "/pagina-web-pitu/imagenes/accidente-transito.jpg", titulo: "Accidentes de Tránsito", clase: "estilo-transito", parrafo: "Indemnización por daños materiales y lesiones.", parrafo1: "Gestión de acuerdos con aseguradoras y litigios judiciales." , parrafo2:"Asistencia legal en casos de responsabilidad civil."},
     { id:'4',src: "/pagina-web-pitu/imagenes/accidente-laboral.jpg", titulo: "Indemnizaciones Laborales", clase: "estilo-laboral", parrafo: "Reclamos por despidos injustificados.", parrafo1: "Accidentes y enfermedades laborales.", parrafo2:"Indemnizaciones por daños y perjuicios en el ámbito laboral." },
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
       {/* <div onClick={togglePause} className="boton-pausa">
         {paused ? <i class="bi bi-play-fill" ></i> : <i class="bi bi-pause-fill" ></i>}
       </div> */}
     </>
   );
 };

 export default DañosYPerjuicios;



