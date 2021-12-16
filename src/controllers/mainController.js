
const mainController = {
    home: (req,res) =>{
        res.render("home",{productos:productos})
    },
}

const productos = [
    {   
        id:1,
        titulo : "Titulo Producto1",
        imagen:"./images/cartuchera.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:2,
        titulo : "Titulo Producto2",
        imagen:"./images/calculadora1.png",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:3,
        titulo : "Titulo Producto3",
        imagen:"./images/hojas.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:4,
        titulo : "Titulo Producto4",
        imagen:"./images/lapicera.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "destacados"
    },
    {
        id:5,
        titulo : "Titulo Producto5",
        imagen:"./images/marcadores.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
    {
        id:6,
        titulo : "Titulo Producto6",
        imagen:"./images/marcadoresPastel.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
    {
        id:7,
        titulo : "Titulo Producto7",
        imagen:"./images/tijeras.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
    {
        id:8,
        titulo : "Titulo Producto8",
        imagen:"./images/lapicera.jpg",
        descripcion : "Lorem ipsum dolor sit amet consectetur, adipisicing elit Ab velit excepturi",
        precio: 999,
        categoria: "ofertas"
    },
]

module.exports = mainController;