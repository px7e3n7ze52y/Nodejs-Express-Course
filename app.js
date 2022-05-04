const express = require('express');
const req = require('express/lib/request');
const products = require("./data/products.json");
const path = require('path');

const app = express();
const port = 3000;
const productRouter = express.Router();

app.use(express.static(path.join(__dirname, "/public/")));

productRouter.route("/").get ( (req, res) => {
    res.render("products", products);
})

productRouter.route("/1").get ( (req, res) => {
    res.send("Hello World! I'm Product first");
})

app.use("/products", productRouter)

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index', { username: 'Bert'});
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})