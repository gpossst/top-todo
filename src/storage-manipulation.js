import { toDoMethods, dataGrab, data } from "./todos"

export const storageManipulation = {
    saveProjects: function() {
        toDoMethods.addToProjects(dataGrab.getCurrent());
        localStorage.setItem('projects', this.stringify(dataGrab.getProjects()))
    },
    loadProjects: function() {
        dataGrab.updateProjects(JSON.parse(localStorage.projects))
    },
    stringify: function(obj) {
        let cache = [];
        let str = JSON.stringify(obj, function(key, value) {
            if (typeof value === "object" && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
            }
            return value;
        });
        cache = null; // reset the cache
        return str;
    }
}