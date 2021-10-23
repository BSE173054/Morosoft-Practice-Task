const taskName = document.getElementById('exampleFormControlInput1');
const columnName = document.getElementById('exampleFormControlInput1Column');
const taskType = document.getElementById('task-status');
const saveChangesBtnTasks = document.getElementById('save-changes-btn');
const saveChangesBtnColumn = document.getElementById('save-changes-btn-column');
const toDoCard = document.getElementById('to-do');
const doingCard = document.getElementById('doing');
const doneCard = document.getElementById('done');
const parentCardContainer = document.getElementById('parent-card-container');
const tasks = [];
const columns = [];

const addNewTaskHandler = () => {
    const taskObj = {
        name: taskName.value,
        taskType: taskType.value
    };

    if (
        taskObj.name.trim() === '' ||
        taskObj.taskType.trim() === ''
    ) {
        alert('Please fill all the fields!');
        return;
    } else {
        tasks.push(taskObj);
        console.log(taskObj);
        appendToList(taskObj);
        taskName.value = "";
        taskType.selectedIndex = 0;

    }

};


const addNewColumnHandler = () => {

    const columnObj = {
        name: columnName.value,
    };

    if (
        columnObj.name.trim() === ''
    ) {
        alert('Please fill the field!');
        return;
    } else {
        const newColumnElement = document.createElement('div');
        newColumnElement.className = 'parent-card';
        newColumnElement.innerHTML = `
            <h2 class="title">${columnObj.name}</h2>
            <div class="card">
                <p>Homework Done</p>
            </div>
`;

        console.log(parentCardContainer);

        parentCardContainer.append(newColumnElement);
        columnName.value = "";

    }

};

const appendToList = (taskObj) => {
    const newTaskElement = document.createElement('div');
    newTaskElement.className = 'card';
    newTaskElement.innerHTML = `
<p>${taskObj.name}</p>
`;

    if (taskObj.taskType === '1') {
        toDoCard.append(newTaskElement);
    } else if (taskObj.taskType === '2') {
        doingCard.append(newTaskElement);
    } else if (taskObj.taskType === '3') {
        doneCard.append(newTaskElement);
    }

    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    );


};


saveChangesBtnTasks.addEventListener('click', addNewTaskHandler);
saveChangesBtnColumn.addEventListener('click', addNewColumnHandler)
