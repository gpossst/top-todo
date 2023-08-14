import "./reset.css";
import "./styles.css";
import {factories, toDoMethods, dataGrab} from "./todos";
import {domSetup, domManipulation, elements} from "./dom-manipulation"

domSetup()

const defaultProject = factories.projectFactory('default');
dataGrab.changeCurrent(defaultProject)
toDoMethods.addToProjects(defaultProject)

const garrett = factories.toDoFactory('Garrett', 'Human', '02-23', 2, '')
const jordan = factories.toDoFactory('Jordan', 'Human', '02-19', 1, '')

domManipulation.populateList(dataGrab.getCurrent().items, elements.list)
console.log(dataGrab.getCurrent().items)

// domManipulation.clearContainer(elements.list)