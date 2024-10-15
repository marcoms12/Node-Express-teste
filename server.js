const express = require('express');
const app = express();
const port = 3000;

//Rota get
app.get('/', (req, res) => {
    res.send('ta rodando!');
});

//Subindo o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em:${port}`);
});