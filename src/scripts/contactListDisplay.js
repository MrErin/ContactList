const databaseContacts = require('./databaseContacts')
const componentFactory = require('./componentFactory')
const appendinator = require('./appendinator')
const determineSave = require('./databaseDetermineSave')
const nuke = require('./nukeDom')


const contentHook = document.querySelector('#contentHook')
const fragment = document.createDocumentFragment()

const contactListDisplay = () => {
	determineSave()
	nuke('contentHook')
	for (let person in databaseContacts.contacts) {
		//section for the entire entry
		const section = componentFactory('section', '', 'card')
		//individual elements
		const pName = componentFactory('p', databaseContacts.contacts[person].personName, 'contactName')
		const pPhone = componentFactory('p', databaseContacts.contacts[person].personPhone, 'contactPhone')
		const pAddress = componentFactory('p', databaseContacts.contacts[person].personAddress, 'contactAddress')
		appendinator(section, pName)
		appendinator(section, pPhone)
		appendinator(section, pAddress)
		appendinator(fragment, section)
	}
	appendinator(contentHook, fragment)
}

module.exports = contactListDisplay