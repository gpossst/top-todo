import { factories, dataGrab, data, toDoMethods } from "./todos";

// Assigns all necessary elements to keys in object
export const elements = {
    listContainer: document.querySelector('#list'),
    list: document.querySelector('#populated-list'),
    gridHeader: document.querySelector('#grid-header'),
    form: document.querySelector('form'),
    itemName: document.querySelector('#item-name'),
    itemDesc: document.querySelector('#item-desc'),
    itemDue: document.querySelector('#due-date'),
    itemPriority: document.querySelector("#item-priority"),
    itemNotes: document.querySelector('#item-notes'),
    projectList: document.querySelector('#project-list')
}

// Funcitons for DOM Manipulation
export const domManipulation = {
    clearContainer: function(container) {
        // Clears the container provided as an argument
        container.innerHTML = "";
    },
    populateGridTitles: function(container) {
        // Populates grid titles
        const titles = ['Item', 'Description', 'Due Date', 'Priority', 'Notes']
        for (let i = 0; i < titles.length; i++){
            const div = document.createElement('div');
            div.classList.add('grid-header')
            div.textContent = titles[i];
            container.appendChild(div);
        }
    },
    populateItems: function(data, container) {
        // Populates given container with objects in array from data
        for(let i = 0; i < dataGrab.getCurrent().items.length; i++){
            const current = data[i]
            for(const property in current) {
                const div = document.createElement('div');
                div.innerText = `${current[property]}`;
                container.appendChild(div)
            }
        }
    },
    populateList: function(data, container) {
        this.clearContainer(container)
        this.populateGridTitles(container)
        this.populateItems(data, container)
    },
    populateProjects: function(data, container) {
        // Populates given container with objects in array from data
        for(let i = 0; i < data.length; i++){
            const div = document.createElement('div');
            div.textContent = data[i];
            div.addEventListener('click', (e) => {
                dataGrab.changeCurrent(data[i])
            })
            container.appendChild(div);
        }
    },
    populateSidebar: function(data, container) {
        // clear and refill sidebar info
        this.populateProjects(data, container)
    },
}


// Event listeners for objects
export function domSetup () {
    // Applies event listeners to buttons
    elements.form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (elements.itemName.value != '' && elements.itemDesc.value != '' && elements.itemDue.value != '' && elements.itemPriority.value != '') {
            // make the todo object
            const newObject = factories.toDoFactory(elements.itemName.value, elements.itemDesc.value, elements.itemDue.value, elements.itemPriority.value, elements.itemNotes.value);
            domManipulation.populateList(dataGrab.getCurrent().items, elements.list)
        }
    });
}