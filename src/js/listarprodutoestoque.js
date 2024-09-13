// Função para carregar e exibir os produtos
function loadProducts() {
    const productList = document.getElementById('productList');
    const savedProducts = JSON.parse(localStorage.getItem('produtos')) || [];

    productList.innerHTML = ''; // Limpar a lista antes de adicionar novos produtos

    savedProducts.forEach((product, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('product-item');

        // Criar e adicionar os dados do produto
        Object.entries(product).forEach(([key, value]) => {
            const p = document.createElement('p');
            p.textContent = `${key}: ${value}`;
            console.log(`${key}`);
            listItem.appendChild(p);
        });

        // Criar e adicionar o botão de deletar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.onclick = () => deleteProduct(index);
        listItem.appendChild(deleteButton);

        productList.appendChild(listItem);
    });
}

// Função para deletar um produto
function deleteProduct(index) {
    let savedProducts = JSON.parse(localStorage.getItem('produtos')) || [];
    savedProducts.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(savedProducts));
    loadProducts(); // Recarregar a lista após deletar
}

// Carregar a lista de produtos quando a página for carregada
window.onload = loadProducts;
