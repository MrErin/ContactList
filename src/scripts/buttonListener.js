let database = require("./database.js") /*eslint no-unused-vars: "off" */
const createPerson = require("./createPerson.js")

const buttonListener = () => {
	const submit = document.getElementById("submit")
	submit.addEventListener("click", () => {
		const inputName = document.getElementById("PersonName")
		const inputPhone = document.getElementById("PersonPhone")
		const inputAddress = document.getElementById("PersonAddress")
		let contactsInjector = []
		contactsInjector = JSON.parse(localStorage.getItem("Database"))
		contactsInjector = createPerson(inputName.value, inputPhone.value, inputAddress.value)
		localStorage.setItem("Database", JSON.stringify(contactsInjector))
	})
}

module.exports = buttonListener