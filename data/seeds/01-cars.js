exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				{
					VIN: 'SJJSN3QIH72O2J6BZ',
					make: 'Toyota',
					model: 'Corolla',
					mileage: '5000',
					transmition: 'Automatic',
					title: 'Clean',
				},
				{
					VIN: 'W8DTERFZA7S832QIS',
					make: 'Toyota',
					model: 'Tacoma',
					mileage: '6000',
					transmition: 'Automatic',
					title: 'Clean',
				},
				{
					VIN: 'O9WOGBHO6MBOZQA5I',
					make: 'Nissan',
					model: 'Sentra',
					mileage: '3000',
					transmition: 'Automatic',
					title: 'Clean',
				},
				{
					VIN: 'WNOIFATF4YZSTKI0I',
					make: 'Subaru',
					model: 'WRX',
					mileage: '9000',
					transmition: 'Manual',
					title: 'Clean',
				},
				{
					VIN: '71TT6F897KVEVPXEX',
					make: 'Mazada',
					model: 'Mazda 3',
					mileage: '8000',
					transmition: 'Manual',
					title: 'Salvage',
				},
			]);
		});
};
