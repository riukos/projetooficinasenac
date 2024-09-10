function saveFormDados() {
    const inputs = document.querySelectorAll('.Form-cliente input');
    const DadosCliente = {};

    inputs.forEach(input => {
        DadosCliente[input.name] = input.value;
    });

    // Recupera os dados existentes do localStorage
    let allDados = JSON.parse(localStorage.getItem('DadosCliente')) || [];
    allDados.push(DadosCliente);
    localStorage.setItem('DadosCliente', JSON.stringify(allDados));
    alert('Dados salvos com sucesso!');
}



function downloadFile() {
    let fileContent = 'Dados Cadastrais:\n\n';

    const savedDados = localStorage.getItem('DadosCliente');
    if (savedDados) {
        const allDados = JSON.parse(savedDados);

        allDados.forEach((dados, index) => {
            fileContent += `Cadastro ${index + 1}:\n`;
            for (const [key, value] of Object.entries(dados)) {
                fileContent += `${key}: ${value}\n`;
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
    a.click();
    URL.revokeObjectURL(url);
}

function clearForm() {
    const inputs = document.querySelectorAll('.Form-cliente input');
    inputs.forEach(input => {
        input.value = '';
    });
}


function clearFormOnLoad() {
    clearForm(); // Limpa os campos do formulário
}

document.addEventListener('DOMContentLoaded', clearFormOnLoad);
