import ScrollReveal from "../scrollReveal/scrollReveal.jsx";
import { useState } from 'react'

const AreasDePractica = ()=>{

    const items = [
        {id:1,title:'Sucesiones', img:'/pagina-web-pitu/imagenes/sucesiones.jpg', text:'Una sucesión es el proceso legal mediante el cual se transfieren los bienes, derechos y obligaciones de una persona fallecida a sus herederos o legatarios.'},
        {id:2,title:'Derecho Civil', img:'/pagina-web-pitu/imagenes/derechoCivil1.webp', text:'El derecho civil regula las relaciones entre personas en aspectos como contratos, familia, sucesiones, propiedad y obligaciones, garantizando el respeto a sus derechos y deberes en la sociedad.'},
        {id:3,title:'Real Estate', img:'/pagina-web-pitu/imagenes/realEstate.jpg', text:'El Real Estate se refiere al sector inmobiliario, que incluye la compra, venta, alquiler y gestión de propiedades como casas, edificios, terrenos y locales comerciales. Es una industria clave en la economía y puede ser una inversión rentable a través de la valorización de bienes raíces y el ingreso por alquileres.'},
        {id:4,title:'Regularizacion de Propiedades', img:'/pagina-web-pitu/imagenes/regularizacion.webp', text:'La regularización de propiedades es el proceso para legalizar terrenos o inmuebles sin la documentación adecuada, asegurando que cumplan con normativas y permitiendo su venta, herencia o acceso a servicios.'},
        {id:5,title:'Division de Condominio', img:'/pagina-web-pitu/imagenes/divisionCondominio.webp', text:'La división de condominio es el proceso legal que separa un inmueble en partes individuales, otorgando a cada copropietario la propiedad exclusiva de su fracción y poniendo fin a la copropiedad.'},
        {id:6,title:'Subdivisiones, lotes y mensuras', img:'/pagina-web-pitu/imagenes/subdivisiones.jpg', text:'Las subdivisiones dividen terrenos, los lotes son las parcelas resultantes y las mensuras son las mediciones para establecer sus límites.'},
        {id:7,title:'Acciones Reivindicatorias', img:'/pagina-web-pitu/imagenes/accReivindicatorias.jpg', text:'Las acciones reivindicatorias son procesos legales para recuperar la posesión de un bien propio que está en manos de otra persona.'},
        {id:8,title:'Desalojos Civiles', img:'/pagina-web-pitu/imagenes/desalojo.jpg', text:'Los desalojos civiles son procesos legales mediante los cuales se obliga a una persona a abandonar un inmueble que ocupa sin derecho, generalmente debido a falta de pago de alquiler o por incumplir el contrato de arrendamiento.'},
        {id:9,title:'Acciones posesorias e interdictos', img:'/pagina-web-pitu/imagenes/accPosesorias.jpg',text:'Las acciones posesorias son procedimientos legales para defender la posesión de un bien, sin que se resuelva el fondo del derecho de propiedad.'},
        {id:10,title:'Regularización de dominio y títulos de propiedad', img:'/pagina-web-pitu/imagenes/regDominio.jpg', text:'La regularización de dominio es el proceso para legalizar la propiedad de un inmueble, mientras que el título de propiedad es el documento que certifica legalmente quién es el dueño de un bien.'},
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
                <div className="div-card-areas">
                <img src={item.img} className="img-areas-practicas" />
                <div className="div-card-areas1">
                    <h2 className="h2-areas-practicas" >{item.title}</h2>
                    <i class="bi bi-arrow-down-circle" onClick={()=>toggleVisibility(item.id)} 
                    style={{display: visible === item.id ? 'none': 'inline-block'}}></i>
                    <p className="p-areas-practicas" style={{
                        fontSize:'medium',
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