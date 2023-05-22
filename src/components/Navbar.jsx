import React, {useState} from 'react';
import "../css/Navbar.css"
import main_logo from '../../assets/main_logo.png'
import {useNavigate} from "react-router-dom";

const Navbar = ({user}) => {
	const navbarNavigator = useNavigate()
	return (
		<div className="container__navbar">
			<a onClick={() => navbarNavigator('/')}>
				<img className="navbar__logo" src={main_logo} alt="Pharmacy logo with text apteka.ru"/>
			</a>
			<ul className="navbar__menu">
				<li><a onClick={() => navbarNavigator('/cart')}>Корзина</a></li>
				<li><a onClick={() => navbarNavigator('/profile')}>Профиль</a></li>
			</ul>
		</div>
	);
};

export default Navbar;