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

const relatorio = document.getElementById('relatorio');
relatorio.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-relatorio');
});

const listaClientes = document.getElementById('listar-clientes');
listaClientes.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-lista-clientes');
});

const listaDeOrcamentos = document.getElementById('listar-Orcamentos');
listaDeOrcamentos.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-lista-orcamentos');
});