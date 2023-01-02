import { btnColorFunction } from "./btnColorFunction";
import { projectList } from ".."

export const loadProjectList = function () {
    const projectListHTML = document.querySelector('#project-list');

    projectListHTML.innerHTML = ''
        
    projectList.forEach(project => {
        projectListHTML.innerHTML += `
        <div class="projects-container" id="projects-container">
            <button class="nav-btn">
                <img src="imgs/folder.png">
                <span id='teste'>${project.name}</span>
            </button>
        </div>  
        `
        btnColorFunction()
    });
}