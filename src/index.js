import "./reset.css";
import "./styles.css";
import {factories, toDoMethods, dataGrab, data} from "./todos";
import {domSetup, domManipulation, elements} from "./dom-manipulation"

domSetup()

const defaultProject = factories.projectFactory('default');
dataGrab.changeCurrent(defaultProject)
toDoMethods.addToProjects(defaultProject)

const garrett = factories.toDoFactory('Garrett', 'Human', '02-23', 2, '')
const jordan = factories.toDoFactory('Sidebar', 'Add event listener stuff to sidebar and figure out how to populate witht the keys of the objects given with the function', '08-15', 1, '')

domManipulation.populateList(dataGrab.getCurrent().items, elements.list)
domManipulation.populateSidebar(Object.keys(dataGrab.getProjects()), elements.projectList)
console.log(dataGrab.getCurrent().items)
console.log(Object.keys(dataGrab.getProjects()))