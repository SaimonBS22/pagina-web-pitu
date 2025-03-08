// import "bootstrap-icons/font/bootstrap-icons.css";
// import { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import ScrollReveal from "../scrollReveal/scrollReveal.jsx";
// import emailjs from '@emailjs/browser'

// const Contacto = () => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     apellido: "",
//     telefono: "",
//     email: "",
//     mensaje: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Enviando:", formData);

//     emailjs
//       .send(
//         "service_fwl1ys1",  // ID del servicio
//         "template_wzxm8sp", // ID de la plantilla
//         {
//           nombre: formData.nombre,
//           apellido: formData.apellido,
//           telefono: formData.telefono,
//           email: formData.email,
//           mensaje: formData.mensaje,
//         },
//         "NNZKjmaEe1KbUOOQh" // Clave pública de EmailJS
//       )
//       .then(() => {
//         alert("Correo enviado con éxito");
//         setFormData({ nombre: "", apellido: "", telefono: "", email: "", mensaje: "" }); 
//       })
//       .catch((error) => {
//         console.error("Error al enviar correo:", error);
//       });
//   };









//   return (
//     <>
//       <Helmet>
//         <title>Contacto | Estudio Jurídico Blaksley & Aznar</title>
//         <meta name="description" content="Ponte en contacto con nosotros. En Estudio Jurídico Blaksley & Aznar te ofrecemos asesoría legal en diversas áreas del derecho. Llámanos o envíanos un mensaje." />
//         <meta name="keywords" content="contacto, estudio jurídico, Blaksley & Aznar, asesoría legal, abogado, consulta, San Isidro" />
//         <meta name="robots" content="index, follow" />
//       </Helmet>


//     <hr />
//     <ScrollReveal>
//     <section className="seccion-contacto">
//       <div className="div-contacto">
//         <h2 className="h2-contacto">Estudio juridico Blaksley & Aznar</h2>
//         <br />

//         <div className="div-info-contactoSup">
//           <div className="div-info-contacto">
//             <i className="bi bi-geo-alt-fill"> Nuestra direccion: Rivadavia 195 | San Isidro | Piso 5 | Depto B</i>
//           </div>

//           <div className="div-info-contacto">
//             <i className="bi bi-telephone"> Nuestro Celular/Whatsapp: +54 9 11 3215-8091</i>
//           </div>

//           <div className="div-info-contacto">
//             <i className="bi bi-envelope"> Nuestro email: blaksleyaznar@gmail.com</i>
//           </div>
//         </div>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.2408364059675!2d-58.5116666!3d-34.4714142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0345fd9f25f%3A0x7e85d251c2b93988!2sRivadavia%20195%2C%20B1642CEC%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1739313378695!5m2!1ses!2sar"
//           allowFullScreen
//           className="iframe"
//         ></iframe>
//       </div>

//       <form onSubmit={handleSubmit} className="form-contacto">
//         <div className="div-form-contactoSup">
//           <div className="div-form-contacto">
//             <label htmlFor="">Nombre *</label>
//             <input
//               placeholder="Nombre"
//               type="text"
//               required
//               className="input-contacto"
//               name="nombre"
//               value={formData.nombre}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="div-form-contacto1">
//             <label htmlFor="">Apellido *</label>
//             <input
//               placeholder="Apellido"
//               type="text"
//               required
//               className="input-contacto"
//               name="apellido"
//               value={formData.apellido}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <label htmlFor="">Telefono *</label>
//         <input
//           placeholder="Telefono"
//           type="text"
//           required
//           className="input-contacto"
//           name="telefono"
//           value={formData.telefono}
//           onChange={handleChange}
//         />

//         <label htmlFor="">Email *</label>
//         <input
//           placeholder="ejemplo@mail.com"
//           type="email"
//           required
//           className="input-contacto"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <label htmlFor="">Mensaje *</label>
//         <textarea
//           className="textArea-contacto"
//           placeholder="Escriba aqui..."
//           name="mensaje"
//           required
//           value={formData.mensaje}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit" className="boton-contacto">
//           Enviar
//         </button>
//       </form>
//     </section>
//     </ScrollReveal>

//     </>
//   );
// };

// export default Contacto;




import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "../scrollReveal/scrollReveal.jsx";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enviando:", formData);

    emailjs
      .send(
        "service_fwl1ys1",  // ID del servicio
        "template_wzxm8sp", // ID de la plantilla
        {
          nombre: formData.nombre,
          apellido: formData.apellido,
          telefono: formData.telefono,
          email: formData.email,
          mensaje: formData.mensaje,
        },
        "NNZKjmaEe1KbUOOQh" // Clave pública de EmailJS
      )
      .then(() => {
        // Usar SweetAlert para mostrar el mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Correo enviado!',
          text: 'Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.',
          confirmButtonText: 'Aceptar',
        });

        // Limpiar el formulario después de enviar
        setFormData({ nombre: "", apellido: "", telefono: "", email: "", mensaje: "" });
      })
      .catch((error) => {
        // Usar SweetAlert para mostrar el mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar tu mensaje. Intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        });
        console.error("Error al enviar correo:", error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Estudio Jurídico Blaksley & Aznar</title>
        <meta name="description" content="Ponte en contacto con nosotros. En Estudio Jurídico Blaksley & Aznar te ofrecemos asesoría legal en diversas áreas del derecho. Llámanos o envíanos un mensaje." />
        <meta name="keywords" content="contacto, estudio jurídico, Blaksley & Aznar, asesoría legal, abogado, consulta, San Isidro" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <hr />
      <ScrollReveal>
        <section className="seccion-contacto">
          <div className="div-contacto">
            <h2 className="h2-contacto">Estudio jurídico Blaksley & Aznar</h2>
            <br />

            <div className="div-info-contactoSup">
              <div className="div-info-contacto">
                <i className="bi bi-geo-alt-fill"> Nuestra dirección: Rivadavia 195 | San Isidro | Piso 5 | Depto B</i>
              </div>

              <div className="div-info-contacto">
                <i className="bi bi-telephone"> Nuestro Celular/Whatsapp: +54 9 11 3215-8091</i>
              </div>

              <div className="div-info-contacto">
                <i className="bi bi-envelope"> Nuestro email: blaksleyaznar@gmail.com</i>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.2408364059675!2d-58.5116666!3d-34.4714142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0345fd9f25f%3A0x7e85d251c2b93988!2sRivadavia%20195%2C%20B1642CEC%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1739313378695!5m2!1ses!2sar"
              allowFullScreen
              className="iframe"
            ></iframe>
          </div>

          <form onSubmit={handleSubmit} className="form-contacto">
            <div className="div-form-contactoSup">
              <div className="div-form-contacto">
                <label htmlFor="">Nombre *</label>
                <input
                  placeholder="Nombre"
                  type="text"
                  required
                  className="input-contacto"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="div-form-contacto1">
                <label htmlFor="">Apellido *</label>
                <input
                  placeholder="Apellido"
                  type="text"
                  required
                  className="input-contacto"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="">Telefono *</label>
            <input
              placeholder="Telefono"
              type="text"
              required
              className="input-contacto"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />

            <label htmlFor="">Email *</label>
            <input
              placeholder="ejemplo@mail.com"
              type="email"
              required
              className="input-contacto"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="">Mensaje *</label>
            <textarea
              className="textArea-contacto"
              placeholder="Escriba aqui..."
              name="mensaje"
              required
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="boton-contacto">
              Enviar
            </button>
          </form>
        </section>
      </ScrollReveal>
    </>
  );
};

export default Contacto;
