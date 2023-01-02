import { Project } from "./classes";
import { pushProjectToProjectList } from "./arrraysPushs";
import { loadProjectList } from "./loadProjectList";
import { pushProjectToLocalStorage } from "./localStorage";

export const saveBtnFunction = function(){    

    const newProjectInput = document.querySelector("#newProjectInput");
    const projectName = newProjectInput.value;

    let newProject = new Project(projectName)
    pushProjectToProjectList(newProject)
    pushProjectToLocalStorage(newProject)
    loadProjectList(newProject)
    createNewProjectButton()
}

export const cancelBtnFunction = function(){
    createNewProjectButton()
}

export const createNewProjectInput = function () {
    const projectList = document.querySelector('#project-list');
    const projectInputDiv = document.createElement('div');
    projectInputDiv.classList.add('project-input-div')

    projectList.parentNode.insertBefore(projectInputDiv, projectList);

    projectInputDiv.innerHTML = `
    <input id="newProjectInput"></input>
    <div>
        <button class="save-btn" id="save-btn">Save</button>
        <button class="cancel-btn" id="cancel-btn">Cancel</button>
    </div>
    `

    const saveBtn = document.querySelector("#save-btn");
    saveBtn.addEventListener('click', saveBtnFunction);

    const cancelBtn = document.querySelector("#cancel-btn");
    cancelBtn.addEventListener('click', cancelBtnFunction);
}

export const createNewProjectButton = function(){
    const projectInputDiv = document.querySelector('.project-input-div')
    projectInputDiv.parentNode.removeChild(projectInputDiv)

    const projectList = document.querySelector('#project-list');

    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add("nav-btn");
    newProjectButton.setAttribute('id', 'create-new-project-btn');
    newProjectButton.innerText = 'Create a New Project';

    newProjectButton.addEventListener('click', function(){
        newProjectButton.parentNode.removeChild(newProjectButton)
        createNewProjectInput()
    })

    newProjectButton.classList.add('active')
    projectList.parentNode.insertBefore(newProjectButton, projectList)
}