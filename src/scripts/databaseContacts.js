const databaseContacts = Object.create({}, {
	contacts: {
		value: {},
		writable: true,
		enumerable: true
	},
	save: {
		value: function() {
			localStorage.setItem('Contacts', JSON.stringify(this.contacts))
		}
	},
	load: {
		value: function() {
			if (localStorage.getItem('Contacts') !== null) {
				this.contacts = JSON.parse(localStorage.getItem('Contacts'))
			}
		}
	}
})


module.exports = databaseContacts