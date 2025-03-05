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
        {id:4,title:'Juicio de Escrituracion', img:'/pagina-web-pitu/imagenes/regularizacion.webp', text:'La regularización de propiedades es el proceso para legalizar terrenos o inmuebles sin la documentación adecuada, asegurando que cumplan con normativas y permitiendo su venta, herencia o acceso a servicios.'},
        {id:1,title:'Sucesiones', img:'/pagina-web-pitu/imagenes/sucesiones.jpg', text:'Una sucesión es el proceso legal mediante el cual se transfieren los bienes, derechos y obligaciones de una persona fallecida a sus herederos o legatarios.'},
        {id:8,title:'Prescripciones adquisitivas', img:'/pagina-web-pitu/imagenes/desalojo.jpg', text:'Los desalojos civiles son procesos legales mediante los cuales se obliga a una persona a abandonar un inmueble que ocupa sin derecho, generalmente debido a falta de pago de alquiler o por incumplir el contrato de arrendamiento.'},
        {id:6,title:'Regularizacion de loteos y subdivisiones', img:'/pagina-web-pitu/imagenes/regLoteos.jpeg', text:'Las subdivisiones dividen terrenos, los lotes son las parcelas resultantes y las mensuras son las mediciones para establecer sus límites.'},
        {id:2,title:'Fideicomisos y desarrollos', img:'/pagina-web-pitu/imagenes/fideicomisos.jpeg', text:'El derecho civil regula las relaciones entre personas en aspectos como contratos, familia, sucesiones, propiedad y obligaciones, garantizando el respeto a sus derechos y deberes en la sociedad.'},
        {id:5,title:'Division de Condominio', img:'/pagina-web-pitu/imagenes/divisionCondominio.webp', text:'La división de condominio es el proceso legal que separa un inmueble en partes individuales, otorgando a cada copropietario la propiedad exclusiva de su fracción y poniendo fin a la copropiedad.'},
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
                <div className={`div-card-areas ${mobile ? 'mobile-layout' : ''}`}>
                <img src={item.img} className="img-areas-practicas" />
                <div className="div-card-areas1">
                <h2 className="h2-areas-practicas" >{item.title}</h2>
                    <i class="bi bi-arrow-down-circle" onClick={()=>toggleVisibility(item.id)} 
                    style={{display: visible === item.id ? 'none': 'inline-block'}}></i>
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