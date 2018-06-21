const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor: "leite",
        cobertura: "Caramelo",
        frescura: "Uva passa"
    });
});

app.listen(3000);