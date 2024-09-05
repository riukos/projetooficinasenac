const { ipcRenderer } = require('electron');

const CdCliente = document.getElementById('cadastroCliente');

CdCliente.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-cliente');
});


const relatorio = document.getElementById('relatorio');

relatorio.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-relatorio');
});