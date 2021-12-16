const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get('/cart', productController.cart);

//para mostrar un producto
router.get('/productDetail/:idProduct', productController.productDetail)

//para agregar un producto
router.get('/productAdd', productController.viewProductAdd);
router.post('/productAdd', productController.productAdd);

//para listar productos tabla admin
router.get('/verProducts', productController.verProducts);


module.exports = router;