const { ipcRenderer } = require('electron');


const CdCliente = document.getElementById('cadastroCliente');
CdCliente.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cliente');
});


const CdordemdeServico = document.getElementById('ordemdeServico');
CdordemdeServico.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-ordem_de_servico');
});



const Cdprodutoeestoque = document.getElementById('produtoeestoque');
Cdprodutoeestoque.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-produtoeestoque');
});


  
const cadastroVeiculos = document.getElementById('cadastroVeiculos');
cadastroVeiculos.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cadastroVeiculos');
});

const CdOrcamento = document.getElementById('orcamento');
CdOrcamento.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-orcamento');

});