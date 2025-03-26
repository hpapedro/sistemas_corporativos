const express = require('express');
const app = express(); 

app.use(express.json());

// Criação de 5 objetos com as propriedades solicitadas
const produtos = [
  {
    id: 1,
    nome: 'Arroz',
    preco: 20.5,
    dataValidade: '2025-12-31',
    quantidadeEstoque: 100
  },
  {
    id: 2,
    nome: 'Feijão',
    preco: 8.9,
    dataValidade: '2025-11-30',
    quantidadeEstoque: 200
  },
  {
    id: 3,
    nome: 'Macarrão',
    preco: 4.5,
    dataValidade: '2025-10-15',
    quantidadeEstoque: 150
  },
  {
    id: 4,
    nome: 'Óleo de Soja',
    preco: 7.2,
    dataValidade: '2026-01-20',
    quantidadeEstoque: 80
  },
  {
    id: 5,
    nome: 'Açúcar',
    preco: 3.8,
    dataValidade: '2026-03-10',
    quantidadeEstoque: 300
  }
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post("/produtos", (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = produtos.length + 1;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);                              
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });



