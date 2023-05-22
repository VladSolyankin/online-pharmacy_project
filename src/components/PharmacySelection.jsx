import React, {useContext, useEffect, useState} from 'react';
import GroupCard from "./GroupCard.jsx";
import MedicineGroups from "./MedicineGroups.jsx";
import "../css/PharmacySelection.css"
import {PharmacyContext} from "../App.jsx";

const PharmacySelection = () => {
	const [data, setData] = useState([])
	const [pharmacy, setPharmacy] = useState(0)
	const [showGroups, setShowGroups] = useState(false)

	const currentPharmacy = data.filter(elem => elem["id_аптеки"] === pharmacy)[0]
	const {pharmacyContext, setPharmacyContext} = useContext(PharmacyContext)

	useEffect(() => {
		fetch("/pharmacies")
		.then(response => response.json())
		.then(response => setData(response))
	}, [])

	return (
		<div className="container__pharmacy">
			<select className="w-50 form-select custom__select" aria-label="Pharmacy selection"
					onChange={(e) => {
						setPharmacy(Number(e.target.value))
						setShowGroups(true)
						setPharmacyContext(Number(e.target.value))
					}}>
				<option hidden>Выберите аптеку по адресу: </option>
				{
					...data.map(elem => (
						<option value={elem["id_аптеки"]}>
							{elem["адрес"]}
						</option>
					)).sort((a,b) => a["id_аптеки"] - b["id_аптеки"])
				}
			</select>
			{
				showGroups ?
					<div className="container__groups">
						<ul>
							<li>{`Вы выбрали аптеку № ${pharmacy + 1}`}</li>
							<li>{`Телефон: ${currentPharmacy["телефон"]}`}</li>
							<li>{`Время работы: ${currentPharmacy["время_работы"]}`}</li>
						</ul>
						<MedicineGroups/>
					</div>
					:
					null
			}
		</div>
	);
};

export default PharmacySelection;