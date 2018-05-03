let databaseContacts = require('./databaseContacts')
const initializeDatabase = require('./initializeDatabase')

function ObjectLength(object) {
	let length = 0
	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			++length
		}
	}
	return length
};


const determineSave = () => {
	//load from storage
	databaseContacts.load()

	//if database isn't in storage, initialize with existing data and saves it
	if (databaseContacts.contacts === null) {
		databaseContacts.contacts = {}
		initializeDatabase()
		databaseContacts.save()
	} else {
		//if it is in storage but has fewer than the initial records, erases existing data and re-initializes the database
		if (ObjectLength(databaseContacts.contacts) < 6) {
			databaseContacts.contacts = {}
			initializeDatabase()
			databaseContacts.save()
		} else {
			//if it is in storage but contains more than the initial amount, save with no changes
			databaseContacts.save()
		}
	}
}

module.exports = determineSave