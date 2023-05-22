import React, {createContext, useState} from 'react';
import "../css/GroupCard.css"


const GroupCard = ({imagePath, description, title, onClick, group}) => {
	const [currentGroup, setCurrentGroup] = useState(group)

	return (
		<div className="container__card-group" onClick={() => onClick()}>
			<img src={imagePath} alt="Image of medicine group" className="card__image"/>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default GroupCard;