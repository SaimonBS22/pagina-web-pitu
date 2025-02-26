import { useState } from "react"

const DañosYPerjuicios = ()=>{

    const [index, setIndex] = useState(0)
    

    const datos = [
        //RESPONSABILIDAD CIVIL
        { src:"/pagina-web-pitu/imagenes/daños-contractuales.jpg" ,titulo: 'Daños Contractuales', clase:'estilo-contractuales', parrafo:'-Incumplimientos', parrafo1:'-Perjuicios economicos'},
        { src:"/pagina-web-pitu/imagenes/mala-praxis.jpg" ,titulo: 'Mala Praxis', clase:'estilo-praxis', parrafo:'-Errores Medicos', parrafo1:'-Reclamos a clinicas y profesionales'},
        { src:"/pagina-web-pitu/imagenes/accidente-transito.jpg" ,titulo: 'Accidentes de Transito', clase:'estilo-transito', parrafo:'-Indemnizaciones', parrafo1:'-Responsabilidad Civil'},
        { src:"/pagina-web-pitu/imagenes/accidente-laboral.jpg" ,titulo: 'Indemnizaciones Laborales', clase:'estilo-laboral', parrafo:'-Reclamos a aseguradoras', parrafo1:'-Indemnizaciones'},
        //DAÑOS EN PROPIEDADES
]



    const siguiente = ()=>{
        setIndex((prevIndex)=> (prevIndex + 1) % datos.length)
    }

    const anterior = ()=>{
        setIndex((prevIndex)=> (prevIndex - 1 + datos.length) % datos.length)
    }

    return(
        <>
        <section className="contenedor-daños">
            <div>
                <div className="div-daños3">
                    <img src={datos[index].src} className="img-daños"/>
                    <h1 className= {`h1-daños ${datos[index].clase}`}> {datos[index].titulo}</h1>
                    <p className="p-daños">{datos[index].parrafo}</p>
                    <p className="p-daños1">{datos[index].parrafo1}</p>
                </div>
                
            </div>
        </section>
        <i class="bi bi-arrow-right" onClick={siguiente}></i>
        <i class="bi bi-arrow-left" onClick={anterior}></i>
        </>
     
    )
}

export default DañosYPerjuicios