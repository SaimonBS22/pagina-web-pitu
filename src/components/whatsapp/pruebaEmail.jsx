import { useState } from "react";
import emailjs from "@emailjs/browser";

const PruebaContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
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
          empresa: formData.empresa,
          email: formData.email,
          mensaje: formData.mensaje,
        },
        "NNZKjmaEe1KbUOOQh" // Clave pública de EmailJS
      )
      .then(() => {
        alert("Correo enviado con éxito");
        setFormData({ nombre: "", apellido: "", empresa: "", email: "", mensaje: "" }); // Limpiar formulario
      })
      .catch((error) => {
        console.error("Error al enviar correo:", error);
      });
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />

        <label>Empresa:</label>
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PruebaContacto;
