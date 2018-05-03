const databaseContactIDGenerator = Object.create({}, {
	currentID: {
		value: 1,
		writable: true,
		enumerable: true
	},
	saveID: {
		value: function() {
			localStorage.setItem('ID', JSON.stringify(this.currentID))
		}
	},
	loadID: {
		value: function() {
			if (localStorage.getItem('ID') !== null) {
				this.currentID = JSON.parse(localStorage.getItem('ID'))
			}
		}
	}
})

module.exports = databaseContactIDGenerator