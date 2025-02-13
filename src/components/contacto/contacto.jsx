import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const [isServerUp, setIsServerUp] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/usuarios");
        if (response.ok) {
          setIsServerUp(true);
          const storedData = JSON.parse(localStorage.getItem("formularios"));
          if (storedData && storedData.length > 0) {
            await sendData(storedData);
          }
        } else {
          setIsServerUp(false);
        }
      } catch (error) {
        setIsServerUp(false);
        console.log("Hubo un error al comprobar el estado del servidor", error);
      }
    };

    const interval = setInterval(checkServerStatus, 10000);
    checkServerStatus();

    return () => clearInterval(interval);
  }, []);


  const sendData = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.removeItem("formularios");
        console.log("Datos enviados correctamente");
      } else {
        console.log("Hubo un error al enviar los datos");
      }
    } catch (error) {
      console.log("Error al enviar los datos", error);
    }
  };

  const handleChange = (e) => {
    const updatedFormulario = {
      ...formulario,
      [e.target.name]: e.target.value,
    };
    setFormulario(updatedFormulario);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!isServerUp) {
      const storedData = JSON.parse(localStorage.getItem("formularios")) || [];
      storedData.push(formulario); 
      localStorage.setItem("formularios", JSON.stringify(storedData));
      console.log("Datos guardados en localStorage porque el servidor está apagado");
      return;
    }
    await sendData([formulario]);
  };

  return (
    <section className="seccion-contacto">
      <div className="div-contacto">
        <h2 className="h2-contacto">Estudio juridico Blaksley & Aznar</h2>

        <div className="div-info-contactoSup">
          <div className="div-info-contacto">
            <i className="bi bi-geo-alt-fill">
              {" "}
              Nuestra direccion: Rivadavia 195 | San Isidro | Piso 5 | Depto B
            </i>
          </div>

          <div className="div-info-contacto">
            <i className="bi bi-telephone">
              {" "}
              Nuestro Celular/Whatsapp: +54 9 11 3215-8091
            </i>
          </div>

          <div className="div-info-contacto">
            <i className="bi bi-envelope">
              {" "}
              Nuestro email: blaksleyaznar@gmail.com
            </i>
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
              value={formulario.nombre}
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
              value={formulario.apellido}
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
          value={formulario.empresa}
        />

        <label htmlFor="">Email *</label>
        <input
          placeholder="ejemplo@mail.com"
          type="email"
          required
          className="input-contacto"
          name="email"
          onChange={handleChange}
          value={formulario.email}
        />

        <label htmlFor="">Mensaje *</label>
        <textarea
          className="textArea-contacto"
          placeholder="Escriba aqui..."
          name="mensaje"
          required
          onChange={handleChange}
          value={formulario.mensaje}
        ></textarea>
        <button type="submit" className="boton-contacto">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
