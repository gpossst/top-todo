import "./reset.css";
import "./styles.css";
import {factories, toDoMethods, dataGrab, data} from "./todos";
import {domSetup, domManipulation, elements} from "./dom-manipulation"
import { storageManipulation } from "./storage-manipulation";

domSetup()

const defaultProject = factories.projectFactory('default');

storageManipulation.loadProjects()
dataGrab.changeCurrent(dataGrab.getProjects().default)

domManipulation.populateList(dataGrab.getCurrent().items, elements.list)
domManipulation.populateSidebar(Object.keys(dataGrab.getProjects()), elements.projectList)