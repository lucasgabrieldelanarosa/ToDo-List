import { btnColorFunction } from "./btnColorFunction";

export const loadProjectTasks = function(){
    const main = document.querySelector('#main');
    const activeProject = document.querySelector('.active');

    const projectName = activeProject.textContent;

    main.innerHTML = ''

    main.innerHTML = `
    <h1>${projectName}</h1>
    `
}