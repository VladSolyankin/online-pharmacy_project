import React from 'react';
import '../css/SignIn.css'

const SignInModal = ({showModal}) => (
	<div className={showModal ? "container__signUp" : "modal__inactive"}>
		<form className="signIn__form">
			<div className="form-group">
				<label htmlFor="login">Логин</label>
				<input type="text" className="form-control-sm form-control" id="loginInput_signIn" placeholder="Придумайте логин: " required/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Пароль</label>
				<input type="password" className="form-control-sm form-control" id="passwordInput_signIn" placeholder="Придумайте пароль: " required/>
			</div>

			<button type="submit" className="btn btn-primary signIn_button" id="signInButton">Войти</button>
		</form>
	</div>
);

export default SignInModal;