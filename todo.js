let tasks = [];

function addTask() { // Adiciona uma nova tarefa
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) { // Verifica se o texto não está vazio
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) { // Alterna o estado de conclusão da tarefa
    tasks[index].completed = !tasks[index].completed;
    renderTasks(); // Re-renderiza a lista para refletir a mudança
}

function deleteTask(index) { // Remove a tarefa do array
    tasks.splice(index, 1); 
    renderTasks();
}

function renderTasks() { // Renderiza a lista de tarefas no HTML
    const tasksList = document.getElementById('taskList'); // Limpa a lista antes de renderizar
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => { // Para cada tarefa, cria um elemento <li>
        const li = document.createElement('li');
        
// Estilo para indicar se a tarefa está concluída ou não
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        li.style.cursor = 'pointer';
        
        // Clique no texto para marcar como feita
        li.textContent = task.text;
        li.onclick = () => toggleTask(index);

        // Botão de deletar
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        
        // Importante: stopPropagation evita que o clique no botão ative o toggleTask do li
        deleteBtn.onclick = (e) => {
            e.stopPropagation(); 
            deleteTask(index);
        };

        li.appendChild(deleteBtn); // Adiciona o botão de deletar ao item da lista
        tasksList.appendChild(li);
    });
}