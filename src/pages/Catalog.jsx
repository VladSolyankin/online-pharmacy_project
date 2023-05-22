import React from 'react';
import Navbar from "../components/Navbar.jsx";
import PharmacySelection from "../components/PharmacySelection.jsx";
import '../css/Catalog.css'

const Catalog = () => {

	return (
		<div className="container__catalog">
			<Navbar />
			<PharmacySelection />
		</div>
	);
};

export default Catalog;