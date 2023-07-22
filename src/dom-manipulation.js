// Assigns all necessary elements to keys in object
export const elements = {
    newItem: document.querySelector('#new-item'),
    listContainer: document.querySelector('#list'),
    list: document.querySelector('#populated-list'),
    gridHeader: document.querySelector('#grid-header')
}

// Funcitons for DOM Manipulation
export const domManipulation = {
    clearContainer: function(container) {
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    },
    populateGridTitles: function(container) {
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
        for(let i = 0; i < data.length; i++){
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
    }  
}


// Event listeners for objects
export function domSetup () {
    elements.newItem.addEventListener('click', event => {
        domManipulation.clearContainer(elements.list)
    });
}