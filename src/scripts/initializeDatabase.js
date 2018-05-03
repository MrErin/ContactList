const createPerson = require('./createPerson')

const initializeDatabase = () => {
	createPerson('Morticia Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Gomez Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Wednesday Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Pugsley Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Grandmama Addams', '123-456-7890', '1313 Mockingbird Lane')
	createPerson('Fester Addams', '123-456-7890', '1313 Mockingbird Lane')
}

module.exports = initializeDatabase