const express = require ('express');
//const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.json());
app.use(express.json());//ao invés de usar o body-parser pode só escrever dessa forma agora
const lembretes = {};
contador = 0;
app.get ('/lembretes', (req, res, next) => {
    res.send(lembretes);
});
app.put('/lembretes', (req, res, next) => {
    contador++;
    const {texto} = req.body;
    lembretes[contador] = {
    contador, texto
    }
    res.status(201).send(lembretes[contador]);
    });

app.listen(4000, () => {
console.log('Lembretes. Porta 4000');
});