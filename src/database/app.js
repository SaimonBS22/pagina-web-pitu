import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import formModel from "./model/form.model.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



mongoose.connect('mongodb+srv://simonblaksley:pepo300523@cluster0.1xoua.mongodb.net/formularioPitu?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado a Mongo Atlas'))
.catch((err) => console.log('Error al conectar a Mongo Atlas', err))
const PUERTO = 8080


app.get('/usuarios', (req, res) => {
    res.json({ message: 'Usuarios encontrados' });
  });
  

app.post("/usuarios", async (req, res) => {
    try {
        const { nombre, apellido, empresa, email, mensaje } = req.body;
        const nuevoUsuario = new formModel({ nombre, apellido, empresa, email, mensaje });
        await nuevoUsuario.save();
        res.json({ status: "Exitoso", message: "Los datos fueron guardados" });
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).json({ status: "Error", message: "Los datos no se guardaron", error });
    }
});


app.listen(PUERTO, ()=>{
    console.log(`Escuchando en el puerto: ${PUERTO}`)
})