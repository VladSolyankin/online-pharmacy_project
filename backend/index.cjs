const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()
const database = require('./database.cjs')

app.listen(PORT, () => {
	console.log("server is started")
})

app.get("/pharmacies", (req, res) => {
	database.getPharmacies()
	.then(response => {
		res.status(200).send(response);
	})
	.catch(error => {
		res.status(500).send(error);
	})
})

app.get("/groups", (req, res) => {
	database.getGroups()
	.then(response => {
		res.status(200).send(response);
	})
	.catch(error => {
		res.status(500).send(error);
	})
})

app.get("/users", (req, res) => {
	database.getUsers()
	.then(response => {
		res.status(200).send(response);
	})
	.catch(error => {
		res.status(500).send(error);
	})
})

app.get("/medicines", (req, res) => {
	database.getMedicines()
	.then(response => {
		res.status(200).send(response);
	})
	.catch(error => {
		res.status(500).send(error);
	})
})

app.get("/pharmacies_medicines", (req, res) => {
	database.getMedicinesAndPharmacies()
	.then(response => {
		res.status(200).send(response);
	})
	.catch(error => {
		res.status(500).send(error);
	})
})
