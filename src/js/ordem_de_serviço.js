document.addEventListener('DOMContentLoaded', () => {
    const gerarOrdemServicoBtn = document.getElementById('gerarOrdemServico');

    gerarOrdemServicoBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;

        // Coleta os dados do formulário
        const nomeCliente = document.getElementById('nomeCliente').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const veiculo = document.getElementById('veiculo').value;
        const placa = document.getElementById('placa').value;
        const servicos = document.getElementById('servicos').value;
        const data = document.getElementById('data').value;
        const status = document.getElementById('status').value;
        const observacoes = document.getElementById('observacoes').value;

        // Verifica se todos os campos obrigatórios estão preenchidos
        if (!nomeCliente || !telefone || !veiculo || !placa || !servicos || !data || !status) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Cria um novo documento PDF
        const doc = new jsPDF();

        // Adiciona o conteúdo ao PDF
        doc.setFontSize(12);
        doc.text(`Ordem de Serviço`, 10, 10);
        doc.text(`Nome do Cliente: ${nomeCliente}`, 10, 20);
        doc.text(`Telefone: ${telefone}`, 10, 30);
        doc.text(`Email: ${email || 'Não fornecido'}`, 10, 40);
        doc.text(`Veículo: ${veiculo}`, 10, 50);
        doc.text(`Placa: ${placa}`, 10, 60);
        doc.text(`Serviços Solicitados:`, 10, 70);
        doc.text(servicos, 10, 80);
        doc.text(`Data de Entrada: ${data}`, 10, 90);
        doc.text(`Status: ${status}`, 10, 100);
        doc.text(`Observações: ${observacoes || 'Nenhuma observação'}`, 10, 110);

        // Salva o PDF com um nome específico
        doc.save('ordem_de_servico.pdf');
    });
});
