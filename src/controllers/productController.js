/* Soluciono el tema de las imagenes multiples haciendo uso de un array de imagenes*/
const productos = [
    {   
        id:1,
        titulo : "Titulo Producto1",
        imagen:["cartuchera.jpg","cartuchera.jpg","cartuchera.jpg","cartuchera.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:2,
        titulo : "Calculadora CASIO FX-666",
        imagen: ["calculadora1.png", "calculadora2.png", "calculadora3.png", "calculadora4.png"], /*en home solo seria mostrar el principal, osea el first v:*/
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: "$12000",
        categoria: "destacados"
    },
    {
        id:3,
        titulo : "Titulo Producto3",
        imagen:["hojas.jpg","hojas.jpg","hojas.jpg","hojas.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:4,
        titulo : "Titulo Producto4",
        imagen:["lapicera.jpg","lapicera.jpg","lapicera.jpg","lapicera.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:5,
        titulo : "Titulo Producto5",
        imagen:["marcadores.jpg","marcadores.jpg","marcadores.jpg","marcadores.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
    {
        id:6,
        titulo : "Titulo Producto6",
        imagen:["marcadoresPastel.jpg","marcadoresPastel.jpg","marcadoresPastel.jpg","marcadoresPastel.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
    {
        id:7,
        titulo : "Titulo Producto7",
        imagen:["tijeras.jpg","tijeras.jpg","tijeras.jpg","tijeras.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
    {
        id:8,
        titulo : "Titulo Producto8",
        imagen:["tijeras.jpg","tijeras.jpg","tijeras.jpg","tijeras.jpg"],
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
]

const productController = {
    cart: (req,res) =>{
        res.render("./products/cart");
    },

    productDetail:(req, res)=>{
        let productoElegido = productos.find((producto) =>
        {return producto.id == req.params.idProduct})
        res.render("./products/productDetail", {detailProd: productoElegido})
        console.log(productoElegido);
    },

    verProducts:(req,res) =>{
        res.render("./products/listProducts",{productos:productos})
    },
    productAdd: (req,res) =>{
        res.render("./products/productAdd")
    },
}



module.exports = productController;
