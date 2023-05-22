import React, {useContext, useEffect, useState} from 'react';
import GroupCard from "./GroupCard.jsx";
import {nanoid} from "nanoid";
import "../css/MedicineGroups.css"
import {useNavigate} from "react-router-dom";
import {GroupContext} from "../App.jsx";

const MedicineGroups = () => {
	const [data, setData] = useState([])
	const groupNavigator = useNavigate()
	const {groupContext, setGroupContext} = useContext(GroupContext)

	useEffect(() => {
		fetch("/groups")
		.then(response => response.json())
		.then(response => setData(response))
	}, [])

	return (
		<div className="container__groups">
			{
				...data.map(elem => (
					<GroupCard
						key={nanoid()}
						imagePath={`../../assets/group_${String(Number(elem["id_группы"]) + 1)}.jpg`}
						title={elem["название_группы"]}
						description={elem["доп_информация"]}
						group={Number(elem["id_группы"])}
						onClick={() => {
							groupNavigator(`/group${data.indexOf(elem)+1}`)
							setGroupContext(Number(elem["id_группы"]))
						}}
					/>
				))
			}
		</div>
	);
};

export default MedicineGroups;