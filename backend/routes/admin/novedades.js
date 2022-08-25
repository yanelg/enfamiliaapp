var express = require('express');
var router = express.Router();
var contactosModel = require('../../models/contactosModel');

/*GET home page */
router.get('/', function (req,res,next) {

    var novedades = await contactosModel.getContactos ();

    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});

module.exports = router;