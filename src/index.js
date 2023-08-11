import "./reset.css";
import "./styles.css";
import {factories, toDoMethods, data} from "./todos";
import {domSetup, domManipulation, elements} from "./dom-manipulation"

domSetup()

const defaultProject = factories.projectFactory('default');
data.currentProject = defaultProject
toDoMethods.addToProjects(defaultProject)

const garrett = factories.toDoFactory('Garrett', 'Human', '02-23', 2, '')
const jordan = factories.toDoFactory('Jordan', 'Human', '02-19', 1, '')

domManipulation.populateList(defaultProject.items, elements.list)
console.log(defaultProject.items)
console.log(data.projects)