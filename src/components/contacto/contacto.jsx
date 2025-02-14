import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const [serverStatus, setServerStatus] = useState(null);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverOnline = await checkServerStatus();

    if (serverOnline) {
      sendDataToServer(formData);
    } else {
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Formulario enviado con éxito");
    }
  };

  const checkServerStatus = async () => {
    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "GET",
      });

      if (response.ok) {
        setServerStatus(true);
        return true;
      } else {
        setServerStatus(false);
        return false;
      }
    } catch (error) {
      setServerStatus(false);
      return false;
    }
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        localStorage.removeItem("formData");  
      } else {
        alert("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  
  useEffect(() => {
    const enviarDatosGuardados = async () => {
      const storedData = JSON.parse(localStorage.getItem("formData"));
      if (storedData) {
        const serverOnline = await checkServerStatus();
        if (serverOnline) {
          sendDataToServer(storedData);   
        }
      }
    };

    enviarDatosGuardados();
  }, []);  

  return (
    <section className="seccion-contacto">
      <div className="div-contacto">
        <h2 className="h2-contacto">Estudio juridico Blaksley & Aznar</h2>

        <div className="div-info-contactoSup">
          <div className="div-info-contacto">
            <i className="bi bi-geo-alt-fill"> Nuestra direccion: Rivadavia 195 | San Isidro | Piso 5 | Depto B</i>
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
              onChange={handleChange}
            />
          </div>
        </div>

        <label htmlFor="">Empresa *</label>
        <input
          placeholder="Empresa"
          type="text"
          required
          className="input-contacto"
          name="empresa"
          onChange={handleChange}
        />

        <label htmlFor="">Email *</label>
        <input
          placeholder="ejemplo@mail.com"
          type="email"
          required
          className="input-contacto"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="">Mensaje *</label>
        <textarea
          className="textArea-contacto"
          placeholder="Escriba aqui..."
          name="mensaje"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="boton-contacto">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
