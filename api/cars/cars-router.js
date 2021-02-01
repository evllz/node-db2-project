const express = require('express');
const router = express.Router();
const db = require('./cars-model');

router.get('/', async (req, res) => {
	try {
		const data = await db.get();
		res.status(200).json(data);
	} catch {
		res.status(500).json({ messege: 'Server error' });
	}
});

router.post('/', async (req, res) => {
	const newCar = req.body;
	try {
		const data = await db.create(newCar);
		res.status(201).json(data);
	} catch {
		res.status(500).json({ messege: 'Server error' });
	}
});

module.exports = router;
