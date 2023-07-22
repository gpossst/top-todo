import "./reset.css";
import "./styles.css";
import {toDoFactory, toDoMethods, data} from "./todos";
import {domSetup, domManipulation, elements} from "./dom-manipulation"

domSetup()

const garrett = toDoFactory('Garrett', 'Human', '02-23', 2, '')
const jordan = toDoFactory('Jordan', 'Human', '02-19', 1, '')

toDoMethods.updateList(data.items, jordan)
toDoMethods.updateList(data.items, garrett)

domManipulation.populateList(data.items, elements.list)
console.log(data.items)