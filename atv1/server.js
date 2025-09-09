const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/mensagem', (req, res) => {
    try {

        // informar nome, time e idade do usuario
        const { mensagem: { nome, idade, time }  } = req.body;
        console.log(nome, idade, time);
        res.status(201).json({ message: `Ola ${nome}, voce tem ${idade} anos e torce para o ${time}` });

    } catch (error) {
        console.error('Erro: ', error);
        res.status(500).json({ errorMessage: error });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
});

