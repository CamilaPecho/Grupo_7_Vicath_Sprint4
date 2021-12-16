/* Soluciono el tema de las imagenes multiples haciendo uso de un array de imagenes*/
const jsonDB = require('../model/jsonDatabase');

const product = jsonDB('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    cart: (req,res) =>{
        res.render("./products/cart");
    },

    productDetail:(req, res)=>{
        let productoElegido = product.find(req.params.id);
        res.render("./products/productDetail", {detailProd: productoElegido})
        console.log(productoElegido);
    },

    verProducts:(req,res) =>{
        let productos = product.all()
        res.render("./products/listProducts",{productos})
    },

    viewProductAdd: (req,res) =>{
        res.render("./products/productAdd")
    },

    productAdd: (req,res) =>{
        let producto = {
            id:0,
            ...req.body
        }
        product.create(producto)
    },
}



module.exports = productController;
