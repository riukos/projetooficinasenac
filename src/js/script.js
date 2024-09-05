const { ipcRenderer } = require('electron');

const CdCliente = document.getElementById('cadastroCliente');

CdCliente.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cliente');
});


const cadastroVeiculos = document.getElementById('cadastroVeiculos');

cadastroVeiculos.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cadastroVeiculos');
});