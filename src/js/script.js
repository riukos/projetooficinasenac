const { ipcRenderer } = require('electron');

const CdCliente = document.getElementById('cadastroCliente');

CdCliente.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cliente');
});

const CdOrcamento = document.getElementById('orcamento');

CdOrcamento.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-orcamento');
});