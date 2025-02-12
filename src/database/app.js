import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PUERTO = 8080


app.get("/form", (req, res)=>{
    res.send("Holaaa")
})

app.listen(PUERTO, ()=>{
    console.log(`Escuchando en el puerto: ${PUERTO}`)
})