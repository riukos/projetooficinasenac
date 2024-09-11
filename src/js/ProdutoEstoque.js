// Função para salvar os dados no LocalStorage
function salvarCadastro() {
    // Obter os valores dos campos
    const produto = {
        produtoNome: document.getElementById('produtoNome').value,
        categoria: document.getElementById('categoria').value,
        codigoProduto: document.getElementById('codigoProduto').value,
        quantidade: document.getElementById('quantidade').value,
        preco: document.getElementById('preco').value,
        fornecedor: document.getElementById('fornecedor').value,
        descricao: document.getElementById('descricao').value
    };

    // Salvar no LocalStorage
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Cadastro de produto salvo com sucesso!');
}

// Função para gerar arquivo .txt
function gerarArquivoTxt() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    if (produtos.length === 0) {
        alert('Nenhum produto cadastrado para gerar arquivo.');
        return;
    }

    let conteudo = 'Lista de Produtos Cadastrados:\n\n';

    produtos.forEach((produto, index) => {
        conteudo += `Produto ${index + 1}:\n`;
        conteudo += `Nome do Produto: ${produto.produtoNome}\n`;
        conteudo += `Categoria: ${produto.categoria}\n`;
        conteudo += `Código do Produto: ${produto.codigoProduto}\n`;
        conteudo += `Quantidade: ${produto.quantidade}\n`;
        conteudo += `Preço Unitário: R$ ${produto.preco}\n`;
        conteudo += `Fornecedor: ${produto.fornecedor}\n`;
        conteudo += `Descrição: ${produto.descricao}\n\n`;
    });

    const blob = new Blob([conteudo], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'produtos_cadastrados.txt';
    link.click();
}

// Função para limpar os campos do formulário
function limparFormulario() {
    document.getElementById('produtoNome').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('codigoProduto').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('fornecedor').value = '';
    document.getElementById('descricao').value = '';
}

// Adicionar eventos aos botões
document.querySelector('.save-btn').addEventListener('click', salvarCadastro);
document.querySelector('.cancel-btn').addEventListener('click', limparFormulario);
document.querySelector('.generate-txt-btn').addEventListener('click', gerarArquivoTxt);
document.querySelector('.generate-txt-btn').addEventListener('click', gerarArquivoTxt);
