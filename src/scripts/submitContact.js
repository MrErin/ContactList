const createPerson = require('./createPerson')
const contactListDisplay = require('./contactListDisplay')

const submitContact = () => {
	const submit = document.getElementById('submit')
	submit.addEventListener('click', () => {
		const inputName = document.getElementById('PersonName')
		const inputPhone = document.getElementById('PersonPhone')
		const inputAddress = document.getElementById('PersonAddress')
		const inputContact = createPerson(inputName.value, inputPhone.value, inputAddress.value)
		contactListDisplay()
		inputName.value = ''
		inputPhone.value = ''
		inputAddress.value = ''
	})
}

module.exports = submitContact
