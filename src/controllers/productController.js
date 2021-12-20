/* Soluciono el tema de las imagenes multiples haciendo uso de un array de imagenes*/
const jsonDB = require('../model/jsonDatabase');

const products = jsonDB('productos');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    all:(req,res)=>{
        productos = products.all()
        res.render("./products/all",{productos})
    },
    categoria:(req,res)=>{
        productos = products.buscardorPorCategoria("type")
        res.render("./products/all",{productos})
    },
    cart: (req,res) =>{
        res.render("./products/cart");
    },

    productDetail:(req, res)=>{
        let productoElegido = products.find(req.params.id);
        res.render("./products/productDetail", {detailProd: productoElegido})
    },

    verProducts:(req,res) =>{
        let productos = products.all()
        res.render("./products/listProducts",{productos})
    },

    viewProductAdd: (req,res) =>{
        res.render("./products/productAdd")
    },

    productAdd: (req,res) =>{
        let producto = {
            id:0,
            
        }
        products.create(producto)
    },
}


module.exports = productController;
