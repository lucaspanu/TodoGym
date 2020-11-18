const mongoose = require('mongoose');

let turnoSchema = new mongoose.Schema({
    fecha: {
        type: String,
        require: true
    },
    usuario: {
        type: String,
        require: true
    },
    horario: {
        type: String,
        require: true
    },
    clase: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Turno', turnoSchema);