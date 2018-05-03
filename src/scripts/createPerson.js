const databaseContactIDGenerator = require('./databaseContactIDGenerator')
const databaseContacts = require('./databaseContacts')

const createPerson = (personName, personPhone, personAddress) => {
	const newPerson = Object.create(null, {
		'personName': {
			value: personName,
			enumerable: true
		},
		'personPhone': {
			value: personPhone,
			enumerable: true
		},
		'personAddress': {
			value: personAddress,
			enumerable: true
		}
	})

	//get ID from generator object to use as contact object's name in the database
	databaseContactIDGenerator.loadID()
	let contactUID = '_' + databaseContactIDGenerator.currentID
	databaseContactIDGenerator.currentID++
	databaseContactIDGenerator.saveID()

	//create key in database from counter object
	databaseContacts.contacts[contactUID] = newPerson
	databaseContacts.save()
	return contactUID
}

module.exports = createPerson