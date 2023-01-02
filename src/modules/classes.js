export const projectList = [];

export const Project = function(name){
    this.name = name;
}

export const createProjectArray = function(newProject){
    const projectArray = [];

    projectArray.push('teste')
    console.log(projectArray)

    newProject = projectArray;
}

export const Task = function(title, description){
    this.title = title;
    this.description = description;
}