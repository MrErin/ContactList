let database = require("./database.js")

const databaseSave = () => {
	const stringifiedDatabase = JSON.stringify(database)
	localStorage.setItem("Database", stringifiedDatabase)
}
module.exports = databaseSave