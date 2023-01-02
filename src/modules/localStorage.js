import { projectList, localStorageProjectList } from ".."

export const updateLocalStorage = function(){
    localStorage.setItem('projectList', JSON.stringify(projectList))
}

export const pushProjectToLocalStorage = function (newProject) {
    projectList.push(newProject)
    console.log(projectList)
    updateLocalStorage()
}