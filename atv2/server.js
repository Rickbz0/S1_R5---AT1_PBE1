const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/soma', (req, res) => {
    try {
        const { soma: { numUm, numDois, numTres }  } = req.body;
        console.log(numUm, numDois, numTres);

        // faz a soma dos numeros informados pelo usuario
        res.status(201).json({ message: `o valor da sua soma é ${numUm+numDois+numTres}` });

    } catch (error) {
        console.error('Erro: ', error);
        res.status(500).json({ errorMessage: error });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
});

