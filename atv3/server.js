const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());


app.post('/login', (req, res) => {
    try {
        const { usuarioUm, senhaUm } = req.body;

        // verifica senha e usuario se estão corretos
    if (usuarioUm != "henrique" || senhaUm != 1234 ) {
            return res.status(400).json({ message: `Usuario ou Senha incorretos. Login não efetuado` });
        }

    } catch (error) {
        console.error('Erro: ', error);
        res.status(500).json({ errorMessage: error });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
});
