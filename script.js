const inputTarefa = document.querySelector('.inputTarefa');

const botaoTarefa = document.querySelector('.botaoTarefa');
botaoTarefa.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  const divTarefa = document.createElement("div");
  divTarefa.classList.add("todo");
  const novaTarefa = document.createElement("li");
  novaTarefa.innerText = inputTarefa.value;
  inputTarefa.value = "";
  novaTarefa.classList.add("todoItem");
  divTarefa.appendChild(novaTarefa);

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("completedBtn");
  divTarefa.appendChild(completedBtn);

  listaTarefas.appendChild(divTarefa);
}

const listaTarefas = document.querySelector('.listaTarefas');
listaTarefas.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  const item = e.target;

  if(item.classList[0] === 'completedBtn') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
