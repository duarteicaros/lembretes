const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.json());
app.use(express.json()); //ao invés de usar o body-parser pode só escrever dessa forma agora
const lembretes = {};
contador = 0;
app.get('/lembretes', (req, res, next) => {
    res.send(lembretes);
});
// Na aula de barreamento de eventos colocar isso
const axios = require("axios");

//app.put('/lembretes', (req, res, next) => {  --linha antiga do código, mudar para esse debaixo
app.put("/lembretes", async (req, res) => {
    contador++;
    const {
        texto
    } = req.body;
    lembretes[contador] = {
        contador,
        texto
    }
    //acrescentar essa linha depois da aula barreamento de eventos
    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado",
        dados: {
            contador,
            texto,
        },
    });
    //daqui pra baixo, normal
    res.status(201).send(lembretes[contador]);
});


app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});