// Função para salvar tarefas no localStorage
function salvarTarefas() {
    const tarefas = [];
    document.querySelectorAll('ul li').forEach(li => {
        tarefas.push({
            texto: li.firstChild.textContent,
            feita: li.classList.contains('checked')
        });
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função para carregar tarefas do localStorage
function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const ul = document.getElementById('ul__tarefa');
    ul.innerHTML = ''; // Limpa a lista antes de recarregar as tarefas

    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.textContent = tarefa.texto;
        if (tarefa.feita) {
            li.classList.add('checked');
        }
        const span = document.createElement('SPAN');
        span.className = 'close';
        span.textContent = 'Deletar';
        li.appendChild(span);
        ul.appendChild(li);

        span.onclick = function () {
            const div = this.parentElement;
            div.remove(); // Remove a tarefa da lista
            salvarTarefas(); // Atualiza o localStorage
        }
    });
}

// Função para exibir mensagem de erro
function mostrarErro(mensagem) {
    const erroElemento = document.createElement('div');
    erroElemento.className = 'erro';
    erroElemento.textContent = mensagem;
    document.body.appendChild(erroElemento);
    setTimeout(() => erroElemento.remove(), 2000);
}

// Criar Tarefa
function adicionarTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');
    const valor = inputTarefa.value.trim();

    if (valor === "") {
        mostrarErro('Digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = valor;
    const span = document.createElement('SPAN');
    span.className = 'close';
    span.textContent = 'Deletar';
    li.appendChild(span);
    document.getElementById('ul__tarefa').appendChild(li);

    span.onclick = function () {
        const div = this.parentElement;
        div.remove(); // Remove a tarefa da lista
        salvarTarefas(); // Atualiza o localStorage
    }

    inputTarefa.value = "";
    salvarTarefas();
}

// Marcar a tarefa como feita
const listaDeTarefas = document.querySelector('ul');
listaDeTarefas.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        salvarTarefas(); // Atualiza o localStorage
    }
});

document.getElementById('inputTarefa').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

// Carregar tarefas quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarTarefas);
