// importar Menu para criar menu personalizado
// importar Shell para abrir um link externo
const { app, BrowserWindow, ipcMain, Menu, shell, nativeTheme } = require('electron');

app.on('ready', () => {
    // nativeTheme.themeSource = 'dark'
    const janela = new BrowserWindow({
        width: 1100,
        height: 660,
        // resizable: false,
        // autoHideMenuBar: true,
        // titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Menu personalizado
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    janela.loadURL(`file://${__dirname}/src/index.html`);
})

let CadastroCliente = null;

ipcMain.on('abrir-janela-cliente', () => {
    if (CadastroCliente === null) {
        CadastroCliente = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
    }
    
    CadastroCliente.loadURL(`file://${__dirname}/src/cadastroCliente.html`);
        
    CadastroCliente.on('closed', () => {
        CadastroCliente = null;
    });
    
});


let relatorio = null;

ipcMain.on('abrir-janela-relatorio', () => {
    if (relatorio === null) {
        relatorio = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
    }
    
    relatorio.loadURL(`file://${__dirname}/src/relatorio.html`);
        
    relatorio.on('closed', () => {
        relatorio = null;
    });
    
});

let orcamento = null;

ipcMain.on('abrir-janela-orcamento', () => {
    if (orcamento === null) {
        orcamento = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
    }
    
    orcamento.loadURL(`file://${__dirname}/src/Orcamento.html`);
        
    orcamento.on('closed', () => {
        orcamento = null;
    });
    
});


let ordemdeServico = null;

ipcMain.on('abrir-janela-ordem_de_servico', () => {
    if (ordemdeServico === null) {
        ordemdeServico = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
    }

    ordemdeServico.loadURL(`file://${__dirname}/src/ordem_de_servico.html`);

    ordemdeServico.on('closed', () => {
        ordemdeServico = null;
    });

});



let produtoeestoque = null;

ipcMain.on('abrir-janela-produtoeestoque', () => {
    if (produtoeestoque === null) {
        produtoeestoque = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });
    }

    produtoeestoque.loadURL(`file://${__dirname}/src/produto_e_estoque.html`);

    produtoeestoque.on('closed', () => {
        produtoeestoque = null;
    });

});


let cadastrodeveiculo = null;
          
ipcMain.on('abrir-janela-cadastroVeiculos', () => {
    if (cadastrodeveiculo === null) {
        cadastrodeveiculo = new BrowserWindow({
            width: 1000,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
                       }
        });
    }
  
    cadastrodeveiculo.loadURL(`file://${__dirname}/src/cadastroVeiculos.html`);

    cadastrodeveiculo.on(`closed`, () => {
        cadastrodeveiculo = null;
    });

})


app.on('window-all-closed', () => {
    app.quit();
})


// Criando Template para o Menu
const template = [
    {
        label: 'Arquivo',
        submenu: [
            {
                label: 'Sair',
                click: () => app.quit(),
                accelerator: 'Alt + F4'
            }
        ]
    },
    {
        label: 'Exibir',
        submenu: [
            {
                label: 'Recarregar',
                role: 'reload'
            }, 
            {
                label: 'Ferramentas do desenvolvedor',
                role: 'toggleDevTools'  
            },
            {
                type: 'separator'
            },
            {
                label: 'Aumentar zoom',
                role: 'zoomIn'  
            },
            {
                label: 'Reduzir zoom',
                role: 'zoomOut'  
            }, 
            {
                label: 'Restaurar zoom padrão',
                role: 'resetZoom'  
            },             
                       
        ]
    },
    {
        label: 'Ajuda',
        submenu: [
            {
                label: 'Docs',
                click: () => shell.openExternal('https://www.electronjs.org/'),
            }
        ]
    }
]