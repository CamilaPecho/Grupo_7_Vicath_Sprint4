/* Soluciono el tema de las imagenes multiples haciendo uso de un array de imagenes*/
const jsonDB = require('../model/jsonDatabase');

const products = jsonDB('productos');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {

    all:(req,res)=>{
        productos = products.all()
        res.render("./products/all",{productos})
    },

    category:(req,res)=>{
        let productos = products.buscardorPorCategoria("type",req.params.categoria)
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
        let productos = products.all();
        res.render("./products/listProducts",{productos})
    },

    viewProductAdd: (req,res) =>{
        res.render("./products/productAdd")
    },

    productAdd: (req,res) =>{
        let imagenes= []

        for(let i = 0 ; i<req.files.length;i++){
            imagenes.push(req.files[i].filename)
        }

        let producto = {
            id:0,
            title:req.body.title,
            price:req.body.price,
            category: req.body.category,
            description: req.body.description,
            image:req.files != undefined?imagenes:"default.jpg"
        }
        products.create(producto)
        res.redirect("/products/verProducts")
    },

    viewProductEdit:(req,res)=>{
        let producto = products.find(req.params.id)
        res.render("./products/productEdit",{producto})
    },
    
    productEdit:(req,res)=>{
        //let product = products.find(req.params.id)
        let imagenes= []

        for(let i = 0 ; i<req.files.length;i++){
            imagenes.push(req.files[i].filename)
        }

        //console.log(product + "-----------")

        let producto = {
            id: req.params.id,
            title:req.body.title,
            price:req.body.price,
            category: req.body.category,
            description: req.body.description,
            image:req.files != undefined?imagenes:product.image // pasaron cosas
        }
        products.update(producto)
        res.redirect("/products/verProducts")
    },

    productDelete:(req,res)=>{
        products.delete(req.params.id)
        res.redirect("/products/verProducts")
    }

}

module.exports = productController;
