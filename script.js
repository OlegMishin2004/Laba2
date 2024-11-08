const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let itemCount = 0;
let uncheckedCount = 0;

function newTodo() {
  // Create new todo item container
  const todoItem = document.createElement('li');
  todoItem.className = classNames.TODO_ITEM;

  // Create checkbox for marking TODO as done
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.addEventListener('change', updateUncheckedCount);

  // Create span for TODO text
  const todoText = document.createElement('span');
  todoText.className = classNames.TODO_TEXT;
  todoText.textContent = `TODO ${itemCount + 1}`;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.className = classNames.TODO_DELETE;
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    deleteTodoItem(todoItem, checkbox);
  });

  // Append elements to the todo item container
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  // Add new todo item to the list
  list.appendChild(todoItem);

  // Update counters
  itemCount++;
  uncheckedCount++;
  updateCounts();
}

function updateUncheckedCount(event) {
  uncheckedCount += event.target.checked ? -1 : 1;
  updateCounts();
}

function deleteTodoItem(todoItem, checkbox) {
  list.removeChild(todoItem);

  itemCount--;
  if (!checkbox.checked) {
    uncheckedCount--;
  }
  updateCounts();
}

function updateCounts() {
  itemCountSpan.textContent = itemCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}
