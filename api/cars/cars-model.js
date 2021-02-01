const db = require('../../data/db-config');

module.exports = {
	get,
	getByVIN,
	create,
};

async function get() {
	const data = await db('cars');
	return data;
}

async function getByVIN(VIN) {
	const data = await db.first('*').from('cars').where({ VIN });
	return data;
}

async function create(info) {
	const [VIN] = await db.insert(info).into('cars');
	const response = getByVIN(VIN);
	return response;
}
