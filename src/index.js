import { createNewProjectInput } from "./modules/newProject";
import { btnColorFunction } from "./modules/btnColorFunction";
import { loadProjectList } from "./modules/loadProjectList";

const createNewProjectBtn = document.querySelector("#create-new-project-btn")
createNewProjectBtn.addEventListener('click', function(){
    createNewProjectBtn.parentNode.removeChild(createNewProjectBtn)
    createNewProjectInput()
})

export const localStorageProjectList = JSON.parse(localStorage.getItem('projectList'))
export let projectList = localStorage.getItem('projectList') !== null ? localStorageProjectList : []

loadProjectList()
btnColorFunction()