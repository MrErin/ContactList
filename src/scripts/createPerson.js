const database = require("./database")

let personID = 1
const createPerson = (personName, personPhone, personAddress) => {
	const newPerson = database.push(Object.create({}, {
		personName: {
			value: personName,
			enumerable: true
		},
		personPhone: {
			value: personPhone,
			enumerable: true
		},
		personAddress: {
			value: personAddress,
			enumerable: true
		},
		personID: {
			value: personID,
			enumerable: false
		}


	}))
	personID++
	return newPerson
}

module.exports = createPerson