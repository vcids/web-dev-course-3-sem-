let header = document.querySelector('.Header');
header.innerHTML="ToDoList";

let header2 = document.querySelector('.Header2');
header2.innerHTML="ToDoList";

let addButton = document.getElementById('add-btn');
addButton.onclick = function() {
    var taskName = document.getElementById('inpt').value;
    if (taskName == '') {
        return;
    }
    let task = document.createElement('div');
    document.body.appendChild(task);
    task.className = 'task-content';
    // let textContent = document.createElement('div');
    // task.appendChild(textContent);
    // textContent.className = 'text-content';
    let text = document.createElement('p');
    text.innerHTML = taskName;
    text.className = 'text';
    task.appendChild(text);
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'check-box';
    task.appendChild(checkBox);

    let delButton = document.createElement('input');
    delButton.className = 'del-btn';
    delButton.type = 'Image';
    delButton.src = 'pngegg.png';
    task.appendChild(delButton);

    delButton.onclick = function() {
        document.body.removeChild(task);
    }

}