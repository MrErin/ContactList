let database = require("./database.js") /*eslint no-unused-vars: "off" */

const databaseLoad = () => {
	const databaseString = localStorage.getItem("Database")
	database = JSON.parse(databaseString)
}

module.exports = databaseLoad