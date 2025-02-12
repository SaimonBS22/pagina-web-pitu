import "bootstrap-icons/font/bootstrap-icons.css"

const Contacto = ()=>{
    return(
        <section className="seccion-contacto">
            <div className="div-contacto">
                <h2 className="h2-contacto">Estudio juridico Blaksley & Aznar</h2>

                <div className="div-info-contactoSup">
                    <div className="div-info-contacto">
                        <i class="bi bi-geo-alt-fill">Nuestra direccion: Rivadavia 195 | San Isidro | Piso 5 | Depto B</i>
                    </div>

                    <div className="div-info-contacto">
                        <i class="bi bi-telephone">Nuestro Celular/Whatsapp: +54 9 11 3215-8091</i>
                    </div>

                    <div className="div-info-contacto">
                        <i class="bi bi-envelope"> Nuestro email: blaksleyaznar@gmail.com</i>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.2408364059675!2d-58.5116666!3d-34.4714142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0345fd9f25f%3A0x7e85d251c2b93988!2sRivadavia%20195%2C%20B1642CEC%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1739313378695!5m2!1ses!2sar"  allowfullscreen="" className="iframe"></iframe>
            </div>

            <form action="" className="form-contacto">
                <div className="div-form-contactoSup">
                    <div className="div-form-contacto">
                        <label htmlFor="">Nombre *</label>
                        <input placeholder="Nombre" type="text" required className="input-contacto"/>
                    </div>
                    <div className="div-form-contacto1">
                        <label htmlFor="">Apellido *</label>
                        <input placeholder="Apellido" type="text" required className="input-contacto"/>
                    </div>
                </div>

                    <label htmlFor="">Empresa *</label>
                    <input placeholder="Empresa" type="text" required className="input-contacto"/>

                    <label htmlFor="">Email *</label>
                    <input placeholder="ejemplo@mail.com" type="email" required className="input-contacto"/>
                    
                    <label htmlFor="">Mensaje *</label>
                    <textarea className="textArea-contacto" placeholder="Escriba aqui..." name="" id="" required></textarea>
                    <button className="boton-contacto">Enviar</button>
            </form>
        </section>
        
    )
}


export default Contacto