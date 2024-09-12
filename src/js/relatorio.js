// Função para salvar os dados do formulário no localStorage
function saveFormDados() {
    const inputs = document.querySelectorAll('.Form-cliente input');
    const textareas = document.querySelectorAll('.Form-cliente textarea');
    const DadosCliente = {};

    inputs.forEach(input => {
        DadosCliente[input.name] = input.value;
    });

    // Coletar as entradas adicionais
    const additionalRows = document.querySelectorAll('.additional-row');
    DadosCliente['additionalRows'] = Array.from(additionalRows).map(row => row.value);

    // Recupera os dados existentes do localStorage
    let allDados = JSON.parse(localStorage.getItem('DadosCliente')) || [];
    allDados.push(DadosCliente);
    localStorage.setItem('DadosCliente', JSON.stringify(allDados));
    alert('Dados salvos com sucesso!');
}

// Função para gerar um arquivo de texto com os dados do localStorage
function downloadFile() {
    let fileContent = 'Dados Cadastrais:\n\n';

    const savedDados = localStorage.getItem('DadosCliente');
    if (savedDados) {
        const allDados = JSON.parse(savedDados);

        allDados.forEach((dados, index) => {
            fileContent += `Cadastro ${index + 1}:\n`;
            for (const [key, value] of Object.entries(dados)) {
                if (Array.isArray(value)) {
                    value.forEach((val, idx) => {
                        fileContent += `${key} ${idx + 1}: ${val}\n`;
                    });
                } else {
                    fileContent += `${key}: ${value}\n`;
                }
            }
            fileContent += '\n'; // Linha em branco entre registros
        });
    } else {
        alert('Nenhum dado para exportar!');
        return;
    }

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dados_cadastrais.txt';
    document.body.appendChild(a); // Adiciona o link ao DOM
    a.click();
    document.body.removeChild(a); // Remove o link após o clique
    URL.revokeObjectURL(url);
}

// Função para limpar os campos do formulário
function clearForm() {
    const inputs = document.querySelectorAll('.Form-cliente input');
    inputs.forEach(input => {
        input.value = '';
    });

    // Limpa o conteúdo dos campos textarea, se houver
    const textareas = document.querySelectorAll('.Form-cliente textarea');
    textareas.forEach(textarea => {
        textarea.value = '';
    });

    // Limpa as linhas adicionais
    const additionalRowsContainer = document.getElementById('additional-rows-container');
    additionalRowsContainer.innerHTML = '';
}

// Função para limpar o formulário ao carregar a página
function clearFormOnLoad() {
    clearForm(); // Limpa os campos do formulário
}

// Adiciona o listener para limpar o formulário quando a página carrega
document.addEventListener('DOMContentLoaded', clearFormOnLoad);

// Função para imprimir o relatório
function printReport() {
    window.print(); // Simples chamada para abrir o diálogo de impressão
}

