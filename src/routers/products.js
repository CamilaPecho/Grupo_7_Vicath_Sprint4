const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/cart', productController.cart);

//Para mostrar un producto 👀
router.get('/productDetail/:idProduct', productController.productDetail)

//Para agregar un producto
router.get('/productAdd', productController.viewProductAdd); //para devolver la vista formulario
router.post('/productAdd', productController.productAdd);

//Para listar productos tabla admin 📖
router.get('/verProducts', productController.verProducts);


module.exports = router;