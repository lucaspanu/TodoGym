const mongoose = require('mongoose');

const ClasesSchema = new mongoose.Schema
({
    Titulo:
    {
        type: String,
        required: true
    },
    Descripcion: 
    {
        type: String,
        required: true,
        trim: true
    },
    Horarios:
    {
        type: Date,
        required: true
    },
    Estado: {
        type: Boolean,
        default: true
    },
})

module.exports = Clase = mongoose.model('clases', ClasesSchema);