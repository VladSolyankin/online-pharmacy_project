const {Pool} = require("pg");
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: '1234',
	port: 5432,
})

const getPharmacies = () => {
	return new Promise(function(resolve, reject) {
		pool.query('SELECT * FROM аптека', (error, results) => {
			if (error) {
				reject(error)
			}
			resolve(results.rows);
		})
	})
}

const getGroups = () => {
	return new Promise(function(resolve, reject) {
		pool.query('SELECT * FROM группы_препаратов', (error, results) => {
			if (error) {
				reject(error)
			}
			resolve(results.rows);
		})
	})
}

const getUsers = () => {
	return new Promise(function(resolve, reject) {
		pool.query('SELECT * FROM пользователи', (error, results) => {
			if (error) {
				reject(error)
			}
			resolve(results.rows);
		})
	})
}

const getMedicines = () => {
	return new Promise(function(resolve, reject) {
		pool.query('SELECT * FROM препараты', (error, results) => {
			if (error) {
				reject(error)
			}
			resolve(results.rows);
		})
	})
}

const getMedicinesAndPharmacies = () => {
	return new Promise(function(resolve, reject) {
		pool.query('SELECT * FROM аптека_препараты', (error, results) => {
			if (error) {
				reject(error)
			}
			resolve(results.rows);
		})
	})
}

module.exports = {
	getPharmacies,
	getGroups,
	getUsers,
	getMedicines,
	getMedicinesAndPharmacies
}
