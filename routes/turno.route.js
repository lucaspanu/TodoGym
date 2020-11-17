const Turno = require('../models/turno.model');

const express = require('express');

const app = express();

app.post('/turno', function(req, res) {

    let { fecha, usuario, horario, clase } = req.query;
    // if (!fecha) {
    //     return res.status(400).json({
    //         ok: false,
    //         motivo: 'La fecha es un campo obligatorio'
    //     });
    // }
    // if (!horario) {
    //     return res.status(400).json({
    //         ok: false,
    //         motivo: 'El horario es un campo obligatorio'
    //     });
    // }
    // if (!cupos) {
    //     return res.status(400).json({
    //         ok: false,
    //         motivo: 'El cupo es un campo obligatorio'
    //     });
    // }
    console.log(`${[fecha, usuario, horario, clase ].join(',')}`);
    let turno = new Turno({
        fecha,
        usuario,
        horario,
        clase
    });

    turno.save((err, turnoDB) => {
        console.log(`Error: ${err}`);
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            turno: turnoDB
        });
    });


});


app.get('/turno/:id', function(req, res) {
    let idturno = req.params.id;
    Turno.findOne({ _id: idturno })
        .exec((err, turno) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    error: err
                });
            }

            res.json({
                turno
            });

        });

});
module.exports = app;