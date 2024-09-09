function loadClients() {
    const clientTableBody = document.getElementById('clientTableBody');
    const savedClients = JSON.parse(localStorage.getItem('DadosCliente')) || [];

    savedClients.forEach((client, index) => {
        const row = document.createElement('tr');
        Object.values(client).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.onclick = () => deleteClient(index);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        clientTableBody.appendChild(row);
    });
}

function deleteClient(index) {
    let savedClients = JSON.parse(localStorage.getItem('DadosCliente')) || [];
    savedClients.splice(index, 1);
    localStorage.setItem('DadosCliente', JSON.stringify(savedClients));
    document.getElementById('clientTableBody').innerHTML = '';
    loadClients();
}

window.onload = loadClients;