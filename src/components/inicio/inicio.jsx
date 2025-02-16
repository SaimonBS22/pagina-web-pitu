import { useState, useEffect, useRef } from 'react';

const Inicio = () => {
    const videos = [
        "/imagenes/abogados-editado1.mp4",
        "/imagenes/abogados1-1.mp4",
        "/imagenes/edificios.mp4"
    ];
    const [index, setIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)
   

    
    useEffect(() => {
        const interval = setInterval(() => {
            
            setIsTransitioning(true)

            setTimeout(()=>{
                setIndex(nextIndex)
                setNextIndex((prev) => (prev + 1 ) % videos.length)
                setIsTransitioning(false)
            },1000)
        
        }, 5000); 

        return () => clearInterval(interval);
    }, [nextIndex]);



    return (
        <div className="video-container">
            <video  src={videos[index]} key={index} className="video-inicio" autoPlay loop muted></video>
            <video  src={videos[index]} key={index} className="video-inicio" autoPlay loop muted></video>


            <h1 className="h3-inicio">Especialistas en Derecho Civil y Real Estate</h1>
            <h3 className="p-inicio">Resolviendo conflictos patrimoniales con eficiencia y profesionalismo</h3>
        </div>
    );
}

export default Inicio;
