export const data = {
    projects: {},
    currentProject: {}
}

// Holds all to-do object methods
export const toDoMethods = {
    // Push item that is pass through to the items array and auto-sorts the array by priority
    updateList: function(array, item) {
        array.push(item)
        toDoMethods.prioritySort(array)
    },

    // Sorts the items array by the value of the priority key in each object
    prioritySort: function(array) {
        array.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
    },

    // puts new project into projects object
    addToProjects: function(newProject) {
        data.projects[newProject.title] = newProject
    }
}


// Builds to-do items and pushes those items to the array that holds all to-do items
export const factories = { 
    // builds to-dos
    toDoFactory: function(title, description, dueDate, priority, notes) {
        const item = {
            title,
            description,
            dueDate,
            priority,
            notes
        }
        if (!item.notes) {
            item.notes = 'None'
        }
        data.currentProject.items.push(item);
        return item
    },
    // builds new projects
    projectFactory: function(title) {
        const newProject = {
            title,
            items: [],
        }
        data.projects[newProject.title] = newProject;
        return newProject;
    }, 
}

export const dataGrab = {
    getCurrent: function() {return data.currentProject},
    changeCurrent: function(newData) {data.currentProject = newData},
    addToCurrent: function(newItem) {data.currentProject.items.push(newItem)}
}