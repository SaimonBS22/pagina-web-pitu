import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import formModel from "./model/form.model.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const corsOptions = {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));


mongoose.connect('mongodb+srv://simonblaksley:pepo300523@cluster0.1xoua.mongodb.net/formularioPitu?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Conectado a Mongo Atlas'))
.catch((err) => console.log('Error al conectar a Mongo Atlas', err))
const PUERTO = 8080


app.post("/usuarios", async (req, res)=>{
    try {
        const {nombre, apellido, empresa, email, mensaje} = req.body
        const nuevoUsuario = new formModel({nombre, apellido, empresa, email, mensaje})
        await nuevoUsuario.save()
        res.json({
            status:'Exitoso',
            message:'Los datos fueron guardados'
        })
    } catch (error) {
        res.json({
            status:'Error',
            message:'Los datos no se guardaron',
            error
        })
    }
})

app.listen(PUERTO, ()=>{
    console.log(`Escuchando en el puerto: ${PUERTO}`)
})