const express = require('express');
const calculadora = require('./calculadora.js');

const app = express();
const PORT = 3000;

app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.soma(a, b);
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtracao(a, b);
    res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicacao(a, b);
    res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (b === 0) {
        res.status(400).send('Erro: divisão por zero.');
    } else {
        const resultado = calculadora.divisao(a, b);
        res.send(`Resultado da divisão: ${resultado}`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});