// Função para salvar os dados no LocalStorage
function salvarCadastro() {
    // Obter os valores dos campos
    const veiculo = {
        placa: document.getElementById('placa').value,
        anoFab: document.getElementById('anoFab').value,
        anoMod: document.getElementById('anoMod').value,
        kmAtual: document.getElementById('kmAtual').value,
        cliente: document.getElementById('cliente').value,
        motorista: document.getElementById('motorista').value,
        dataCadastro: document.getElementById('dataCadastro').value,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        tipoCombustivel: document.getElementById('tipoCombustivel').value,
        observacoes: document.getElementById('observacoes').value
    };

    // Salvar no LocalStorage
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.push(veiculo);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));

    alert('Cadastro salvo com sucesso!');
}

// Função para gerar arquivo .txt
function gerarArquivoTxt() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    if (veiculos.length === 0) {
        alert('Nenhum veículo cadastrado para gerar arquivo.');
        return;
    }

    let conteudo = 'Lista de Veículos Cadastrados:\n\n';

    veiculos.forEach((veiculo, index) => {
        conteudo += `Veículo ${index + 1}:\n`;
        conteudo += `Placa: ${veiculo.placa}\n`;
        conteudo += `Ano Fabricação: ${veiculo.anoFab}\n`;
        conteudo += `Ano Modelo: ${veiculo.anoMod}\n`;
        conteudo += `Km Atual: ${veiculo.kmAtual}\n`;
        conteudo += `Cliente: ${veiculo.cliente}\n`;
        conteudo += `Motorista: ${veiculo.motorista}\n`;
        conteudo += `Data Cadastro: ${veiculo.dataCadastro}\n`;
        conteudo += `Marca: ${veiculo.marca}\n`;
        conteudo += `Modelo: ${veiculo.modelo}\n`;
        conteudo += `Tipo Combustível: ${veiculo.tipoCombustivel}\n`;
        conteudo += `Observações: ${veiculo.observacoes}\n\n`;
    });

    const blob = new Blob([conteudo], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'veiculos_cadastrados.txt';
    link.click();
}

// Função para limpar os campos do formulário
function limparFormulario() {
    document.getElementById('placa').value = '';
    document.getElementById('anoFab').value = '';
    document.getElementById('anoMod').value = '';
    document.getElementById('kmAtual').value = '';
    document.getElementById('cliente').value = '';
    document.getElementById('motorista').value = '';
    document.getElementById('dataCadastro').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('tipoCombustivel').value = '';
    document.getElementById('observacoes').value = '';
}

// Adicionar eventos aos botões
document.querySelector('.save-btn').addEventListener('click', salvarCadastro);
document.querySelector('.cancel-btn').addEventListener('click', limparFormulario);
document.querySelector('.generate-txt-btn').addEventListener('click', gerarArquivoTxt);
