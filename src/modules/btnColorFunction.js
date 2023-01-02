import { loadProjectTasks } from "./loadProjectTasks";

export const btnColorFunction = function(){
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const activeBtn = document.querySelector('.active')
            activeBtn.classList.remove('active')
            button.classList.add('active')
            loadProjectTasks()
        })
    });
}
