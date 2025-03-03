import { useState, useEffect } from "react";

const DañosYPerjuicios = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const datos = [
    { src: "/pagina-web-pitu/imagenes/daños-contractuales.jpg", titulo: "Daños Contractuales", clase: "estilo-contractuales", parrafo: "-Incumplimientos", parrafo1: "-Perjuicios económicos" },
    { src: "/pagina-web-pitu/imagenes/mala-praxis.jpg", titulo: "Mala Praxis", clase: "estilo-praxis", parrafo: "-Errores Médicos", parrafo1: "-Reclamos a clínicas y profesionales" },
    { src: "/pagina-web-pitu/imagenes/accidente-transito.jpg", titulo: "Accidentes de Tránsito", clase: "estilo-transito", parrafo: "-Indemnizaciones", parrafo1: "-Responsabilidad Civil" },
    { src: "/pagina-web-pitu/imagenes/accidente-laboral.jpg", titulo: "Indemnizaciones Laborales", clase: "estilo-laboral", parrafo: "-Reclamos a aseguradoras", parrafo1: "-Indemnizaciones" },
  ];

  const siguiente = () => {
    setIndex((prevIndex) => (prevIndex + 1) % datos.length);
  };

  const togglePause = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  useEffect(() => {
    if (!paused) { 
      const interval = setInterval(siguiente, 5000);
      return () => clearInterval(interval);
    }
  }, [index, paused]); 

  return (
    <>
      <section className="contenedor-daños">
        <div>
          <div className="div-daños3">
            <img src={datos[index].src} className="img-daños" alt={datos[index].titulo} />
            <h1 className={`h1-daños ${datos[index].clase}`}>{datos[index].titulo}</h1>
            <p className="p-daños">{datos[index].parrafo}</p>
            <p className="p-daños1">{datos[index].parrafo1}</p>
          </div>
        </div>
      </section>
      <div onClick={togglePause} className="boton-pausa">
        {paused ? <i class="bi bi-play-fill"></i> : <i class="bi bi-pause-fill"></i>}
      </div>
    </>
  );
};

export default DañosYPerjuicios;
