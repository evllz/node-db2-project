const express = require('express');
const server = express();
const helmet = require('helmet');
const carsRouter = require('./cars/cars-router');

server.use(helmet());
server.use(express.json());
server.use('/api', carsRouter);

module.exports = server;
