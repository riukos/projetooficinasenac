function loadClients() {
    const clientList = document.getElementById('clientList');
    const savedClients = JSON.parse(localStorage.getItem('DadosCliente')) || [];

    clientList.innerHTML = ''; // Clear the list before adding new clients

    savedClients.forEach((client, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('client-item');

        // Create and append client data
        Object.entries(client).forEach(([key, value]) => {
            const p = document.createElement('p');
            p.textContent = `${key}: ${value}`;
            listItem.appendChild(p);
        });

        // Create and append delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.onclick = () => deleteClient(index);
        listItem.appendChild(deleteButton);

        clientList.appendChild(listItem);
    });
}

function deleteClient(index) {
    let savedClients = JSON.parse(localStorage.getItem('DadosCliente')) || [];
    savedClients.splice(index, 1);
    localStorage.setItem('DadosCliente', JSON.stringify(savedClients));
    loadClients();
}

window.onload = loadClients;
