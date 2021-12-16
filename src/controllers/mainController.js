//Importación del controlador universal 🌍
const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('productos'); //le mandamos la referencia a nuestro archivo JSON

const mainController = {
    home: (req,res) =>{
        const destacados = productModel.buscadorGenericoObjetosLiterales("category", "destacados");
        const ofertas = productModel.buscadorGenericoObjetosLiterales("category", "ofertas");
        const novedades = productModel.buscadorGenericoObjetosLiterales("category", "novedades");
        res.render("home", {destacados, ofertas, novedades})
    },
}



module.exports = mainController;