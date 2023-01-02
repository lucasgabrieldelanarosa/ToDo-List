import { btnColorFunction } from "./btnColorFunction";
import { projectList } from ".."

export const loadProjectList = function (newProject) {
    const projectListHTML = document.querySelector('#project-list');

    projectListHTML.innerHTML = ''
        
    projectList.forEach(project => {
        projectListHTML.innerHTML += `
        <div class="projects-container" id="projects-container">
            <button class="nav-btn">
                <img src="imgs/folder.png">
                ${project.name}
            </button>
        </div>  
        `
        btnColorFunction()
    });
}