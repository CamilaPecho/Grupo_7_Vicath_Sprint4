const express = require('express');
const app = express();
const main = require("./routers/main");
const users = require("./routers/users");
const products = require("./routers/products");

app.use(express.static('public'));


app.set("view engine","ejs");
app.set("views","views");

app.use("/", main);
app.use('/', users);
app.use('/products', products);
app.use((req, res, next) => 
{
    res.status(404).render('paginaNoEncontrada');
})

app.listen (3000, ()=>{
    console.log('Servidor funcionando 😀😂');
});
