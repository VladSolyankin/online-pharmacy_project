import React from 'react';

const SignUp = () => {
	return (
		<div className="container__signUp">
			<form className="signIn__form">
				<div className="form-group">
					<label htmlFor="login">Логин</label>
					<input type="text" className="form-control-sm form-control" id="loginInput" placeholder="Придумайте логин: " required/>
				</div>
				<div className="form-group">
					<label htmlFor="name">Имя</label>
					<input type="text" className="form-control-sm form-control" id="nameInput" placeholder="Введите своё имя: " required/>
				</div>
				<div className="form-group">
					<label htmlFor="surname">Фамилия</label>
					<input type="text" className="form-control-sm form-control" id="surnameInput" placeholder="Введите свою фамилию: " required/>
				</div>
				<div className="form-group">
					<label htmlFor="patronymic">Отчество</label>
					<input type="text" className="form-control-sm form-control" id="patronymicInput" placeholder="Введите своё отчество: "/>
				</div>
				<div className="form-group">
					<label htmlFor="phoneNumber">Телефон</label>
					<input type="text" className="form-control-sm form-control" id="phoneInput" placeholder="Введите ваш телефон: " required/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input type="text" className="form-control-sm form-control" id="emailInput" placeholder="Введите свою почту: " required/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Пароль</label>
					<input type="password" className="form-control-sm form-control" id="passwordInput" placeholder="Придумайте пароль: " required/>
				</div>
				<div className="form-group">
					<label htmlFor="passwordCheck">Подтверждение пароля</label>
					<input type="text" className="form-control-sm form-control" id="passwordCheckInput" placeholder="Подтвердите пароль: " required/>
				</div>

				<button type="submit" className="btn btn-primary signUp_button">Зарегистрироваться</button>
			</form>
		</div>
	);
};

export default SignUp;