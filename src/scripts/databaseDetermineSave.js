let database = require("./database.js")
const databaseLoad = require("./databaseLoad.js")
const databaseSave = require("./databaseSave.js")
const initializeDatabase = require("./initializeDatabase.js")

const determineSave = () => {
	//load from storage
	databaseLoad()

	//if database isn't in storage, initialize with existing data and saves it
	if (database === null) {
		database = []
		initializeDatabase()
		databaseSave()
	} else {
		//if it is in storage but has fewer than the initial records, erases existing data and re-initializes the database
		if (database.length < 6) {
			database = []
			initializeDatabase()
			databaseSave()
		} else {
			//if it is in storage but contains more than the initial amount, save with no changes
			databaseSave()
		}
	}
}

module.export = determineSave