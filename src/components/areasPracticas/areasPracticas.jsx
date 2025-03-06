import ScrollReveal from "../scrollReveal/scrollReveal.jsx";
import { useState, useEffect } from 'react'

const AreasDePractica = ()=>{

    const [mobile, setMobile] = useState(false)


    useEffect(()=>{
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setMobile(screenWidth >= 1 && screenWidth <= 399);
            };
    
            handleResize(); 
            window.addEventListener("resize", handleResize); 
    
            return () => window.removeEventListener("resize", handleResize);
    }
    ,[])



    const items = [
        {id:1,title:'Juicio de Escrituracion', img:'/pagina-web-pitu/imagenes/regularizacion.webp', text:'Te representamos en la acción legal para obtener la escritura de tu propiedad, asegurando la protección de tus derechos como comprador o propietario.'},
        {id:2,title:'Sucesiones', img:'/pagina-web-pitu/imagenes/sucesiones.jpg', text:'Gestionamos la transmisión de bienes a herederos de manera ágil y segura, evitando conflictos y garantizando el cumplimiento de los derechos sucesorios.'},
        {id:3,title:'Prescripciones adquisitivas', img:'/pagina-web-pitu/imagenes/desalojo.jpg', text:'Te ayudamos a obtener el reconocimiento legal de la propiedad cuando la has poseído de forma continua y pacífica.'},
        {id:4,title:'Regularizacion de loteos y subdivisiones', img:'/pagina-web-pitu/imagenes/regLoteos.jpeg', text:'Asesoramos en la regularización de lotes e inmuebles en barrios abiertos y cerrados, gestionando trámites municipales y judiciales para su reconocimiento y escrituración.'},
        {id:5,title:'Fideicomisos y desarrollos', img:'/pagina-web-pitu/imagenes/fideicomisos.jpeg', text:'Asesoramos en la planificación y ejecución de proyectos inmobiliarios, garantizando transacciones seguras y la correcta estructuración legal de fideicomisos.'},
        {id:6,title:'Division de Condominio', img:'/pagina-web-pitu/imagenes/divisionCondominio.webp', text:'Te representamos en la división y administración de bienes en condominio, protegiendo tus derechos como copropietario.'},
    ]

    const [visible, setVisible] = useState(null)

    const toggleVisibility = (id)=>{
        setVisible(visible === id ? null : id)
    }

    return(
        <>
        <hr />
        
        <div className="div-areas-practicas">
            {items.map(item=>(
                <ScrollReveal>
                <div className={`div-card-areas`}>
                <img src={item.img} className="img-areas-practicas" onMouseEnter={()=> toggleVisibility(item.id)} style={{cursor:'pointer'}}/>
                <div className="div-card-areas1">
                <h2 className="h2-areas-practicas" onMouseEnter={()=> toggleVisibility(item.id)} style={{cursor:'pointer'}}>{item.title}</h2>
                    <p className="p-areas-practicas" style={{
                        opacity: visible ===item.id ? 1 : 0,
                        transition:'opacity 0.7s ease-in-out'
                    }}>{item.text}</p>
                </div>
            </div>
            </ScrollReveal>
            ))}
        </div>


        </>
    )
}


export default AreasDePractica