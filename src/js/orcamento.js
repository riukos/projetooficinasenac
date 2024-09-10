// Salvar o orçamento no localStorage
function saveOrcamento() {
    const form = document.getElementById('orcamentoForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Obter orçamentos existentes ou criar uma lista nova
    const orcamentos = JSON.parse(localStorage.getItem('orcamentos')) || [];
    
    // Adicionar o novo orçamento à lista
    orcamentos.push(data);
    localStorage.setItem('orcamentos', JSON.stringify(orcamentos));

    alert('Orçamento salvo no localStorage!');
}

// Gerar o arquivo TXT
function generateTxtFile() {
    const form = document.getElementById('orcamentoForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    let fileContent = '';
    for (const key in data) {
        fileContent += `${key}: ${data[key]}\n`;
    }

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orcamento.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Finalizar o orçamento
function finalizarOS() {
    const form = document.getElementById('orcamentoForm');
    if (form.checkValidity()) {
        saveOrcamento();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        let fileContent = 'Orçamento Finalizado\n\n';
        for (const key in data) {
            fileContent += `${key}: ${data[key]}\n`;
        }

        const blob = new Blob([fileContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'orcamento_finalizado.txt';
        a.click();
        URL.revokeObjectURL(url);

        alert('Orçamento finalizado e salvo!');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
}

// Limpar os campos do formulário
function limparCampos() {
    const form = document.getElementById('orcamentoForm');
    form.reset();
}

// Mostrar a lista de orçamentos
function mostrarOrcamentos() {
    const orcamentos = JSON.parse(localStorage.getItem('orcamentos')) || [];
    const container = document.getElementById('orcamentosContainer');
    container.innerHTML = ''; // Limpar o conteúdo existente

    if (orcamentos.length === 0) {
        container.innerHTML = '<p>Nenhum orçamento salvo.</p>';
        return;
    }

    const ul = document.createElement('ul');
    orcamentos.forEach((orcamento, index) => {
        const li = document.createElement('li');
        li.className = 'btn-excluir';
        li.innerHTML = `
            <p><strong>Orçamento ${index + 1}</strong></p>
            <ul>
                ${Object.entries(orcamento).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
            </ul>
            <button onclick="excluirOrcamento(${index})">Excluir</button>
            <hr>
        `;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// Excluir um orçamento específico
function excluirOrcamento(index) {
    const orcamentos = JSON.parse(localStorage.getItem('orcamentos')) || [];
    orcamentos.splice(index, 1);
    localStorage.setItem('orcamentos', JSON.stringify(orcamentos));
    mostrarOrcamentos(); // Atualizar a lista
}
