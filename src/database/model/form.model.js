import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required:true
    },
    empresa:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    mensaje:{
        type: String,
        required:true
    }
})

const formModel = mongoose.model("formularioPitu", formSchema, "formularioPitu")

export default formModel
