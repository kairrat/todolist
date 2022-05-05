window.addEventListener('load',() => {
    const addTodo = document.querySelector('.input-wrapper');
    const userInput = document.getElementById('description-task');
    const todosWrapper = document.querySelector('.todos-wrapper');


    addTodo.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = userInput.value;

        if(!task){
            alert('fill the task');
         return;    
        }
        const task_el = document.createElement('div');
        task_el.classList.add('todos-wrapper');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('todo-item');
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('todo-task');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly','readonly');
        task_content_el.appendChild(task_input_el);

    
        
        const task_buttons_el = document.createElement('div');
        task_buttons_el.classList.add('buttons');

 
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('btn-edit');
        task_edit_el.innerText = 'edit';
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('btn-delete')
        task_delete_el.innerText = 'x';


        task_buttons_el.appendChild(task_edit_el);
        task_buttons_el.appendChild(task_delete_el);

        task_content_el.appendChild(task_buttons_el);


       todosWrapper.appendChild(task_el);

       userInput.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

        task_delete_el.addEventListener('click', () => {

            todosWrapper.removeChild(task_el);
        })


    })
})


