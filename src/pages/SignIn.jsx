import React, {useEffect, useState} from 'react';
import "../css/SignIn.css"
import {useNavigate} from "react-router-dom";

const SignIn = () => {
	const [users, setUsers] = useState([])
	const [error, setError] = useState('')
	const signInNavigator = useNavigate()

	const signUpHandler = (button) => {
		button.preventDefault()
		const currentUserLogin = document.querySelector('#loginInput_signIn').value
		const currentUserPassword = document.querySelector('#passwordInput_signIn').value
		const currentUser =
			[...users.filter(user => user["логин"] === currentUserLogin && user["пароль"] === currentUserPassword)]
		currentUser.length ? signInNavigator("/catalog") : setError("Пользователя с такими данными нет!")
	}

	useEffect(() => {
		fetch("/users")
		.then(response => response.json())
		.then(response => setUsers(response))
	})

	return (
		<div className="container__signIn">
			<form className="signIn__form">
				<div className="form-group d-flex justify-content-center align-items-center flex-column">
					<label htmlFor="login">Логин</label>
					<input
						type="text"
						className="form-control-sm form-control w-50"
						id="loginInput_signIn"
						placeholder="Введите ваш логин: " required/>
				</div>
				<div className="form-group d-flex justify-content-center align-items-center flex-column">
					<label htmlFor="password">Пароль</label>
					<input
						type="password" className="w-50 form-control-sm form-control" id="passwordInput_signIn"
						placeholder="Введите ваш пароль: " required/>
				</div>

				<button
					type="submit"
					className="btn btn-primary signIn_button"
					id="signInButton"
					onClick={(e) => signUpHandler(e)}>Войти</button>
				<p>Вы новый пользователь? <a href="" onClick={() => signInNavigator('/sign_up')}>Зарегистрироваться</a></p>
				<p className="form__error">{error}</p>
			</form>
		</div>
	);
};

export default SignIn;