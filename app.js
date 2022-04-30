const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index', { username: 'Bert'});
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})