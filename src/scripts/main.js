/*

Database Module

*/
//create the database
let contacts = []

//saves to local storage
const saveContacts = () => {
	const stringifiedDatabase = JSON.stringify(contacts)
	localStorage.setItem('Contacts', stringifiedDatabase)
}

//loads from local storage
const loadContacts = () => {
	const databaseString = localStorage.getItem('Contacts')
	contacts = JSON.parse(databaseString)
}

const determineSave = () => {
	//loads from storage
	loadContacts()

	//if not found in storage initializes and saves the contacts
	if (contacts === null) {
		contacts = []
		initializeContacts()
		saveContacts()
	} else {
		//if the contacts isn't empty but contains less than the initialized amount of people, initializes and saves the contacts
		if (contacts.length < 6) {
			contacts = []
			initializeContacts()
			saveContacts()
		} else {
			//if it contains more than the initial amount, saves the contacts with no other changes
			saveContacts()
		}
	}
}


/*

Creting Entities

*/
//creates an ID

let personID = 1

//creates a person and pushes them to the contact database

const createPerson = (name, phone, address) => {
	contacts.push(Object.create({}, {
		contactID:
            {
            	value: personID,
            	enumerable: true
            },
		contactName:
            {
            	value: name,
            	enumerable: true
            },
		contactPhone:
            {
            	value: phone,
            	enumerable: true
            },
		contactAddress:
            {
            	value: address,
            	enumerable: true
            }
	}))
	personID++
}


const initializeContacts = () => {
	createPerson('Morticia Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Gomez Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Wednesday Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Pugsley Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Grandmama Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Fester Addams', '123-456-7890', '1313 Mockingbird Lane')
}

determineSave()

/*

Contact List

*/

const componentFactory = (type, contents, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.classList = classes
	return component
}

const appendinator = (parent, child) => {
	parent.appendChild(child)
}

const contentHook = document.querySelector('#contentHook')
const fragment = document.createDocumentFragment()

const newContactDisplay = () => {
	contacts.forEach(person => {
		//section for the entire entry
		const section = componentFactory('section', '', 'card')
		//individual elements
		const pName = componentFactory('p', person.contactName, 'contactName')
		const pPhone = componentFactory('p', person.contactPhone, 'contactPhone')
		const pAddress = componentFactory('p', person.contactAddress, 'contactAddress')
		appendinator(section, pName)
		appendinator(section, pPhone)
		appendinator(section, pAddress)
		appendinator(fragment, section)
	})
	appendinator(contentHook, fragment)
}
newContactDisplay()