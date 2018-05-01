const database = require("./database.js")
const componentFactory = require("./componentFactory.js")
const appendinator = require("./appendinator.js")


const contentHook = document.querySelector("#contentHook")
const fragment = document.createDocumentFragment()

const contactListDisplay = () => {
	database.forEach(person => {
		//section for the entire entry
		const section = componentFactory("section", "", "card")
		//individual elements
		const pName = componentFactory("p", person.contactName, "contactName")
		const pPhone = componentFactory("p", person.contactPhone, "contactPhone")
		const pAddress = componentFactory("p", person.contactAddress, "contactAddress")
		appendinator(section, pName)
		appendinator(section, pPhone)
		appendinator(section, pAddress)
		appendinator(fragment, section)
	})
	appendinator(contentHook, fragment)
}

module.exports = contactListDisplay