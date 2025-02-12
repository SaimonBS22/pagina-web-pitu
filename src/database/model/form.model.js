import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require
    },
    apellido:{
        type: String,
        require
    },
    empresa:{
        type: String,
        require
    },
    email:{
        type: String,
        require
    },
    mensaje:{
        type: String,
        require
    }
})

const formModel = mongoose.model("formulario", formSchema)

export default formModel
