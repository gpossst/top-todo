export const data = {
    items: []
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
    }
}

// Builds to-do items and pushes those items to the array that holds all to-do items
export function toDoFactory(title, description, dueDate, priority, notes) {
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

    return item
}