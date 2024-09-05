const { ipcRenderer } = require('electron');

const CdCliente = document.getElementById('cadastroCliente');

CdCliente.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cliente');
});

const Cdprodutoeestoque = document.getElementById('produtoeestoque');

Cdprodutoeestoque.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-produtoeestoque');
});