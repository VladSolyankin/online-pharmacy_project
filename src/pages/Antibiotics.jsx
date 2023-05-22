import React, {useEffect, useState} from 'react';

const Antibiotics = ({group}) => {
	const [medicines, setMedicines] = useState([])
	const [pharmaciesAndMedicines, setPharmaciesAndMedicines] = useState([])

	useEffect(() => {
		fetch('/medicines')
		.then(response => response.json())
		.then(response => setMedicines(response))

		fetch('/pharmacies_medicines')
		.then(response => response.json())
		.then(response => setPharmaciesAndMedicines(response))
	}, [])
	return (
		<div>
			<ul>

			</ul>
		</div>
	);
};

export default Antibiotics;