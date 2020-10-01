import React, { Component } from 'react'
import { Authform } from '../layouts/authformstyle'
import signInIMG  from '../layouts/img/laravel_and_vue.svg'
import signUpIMG  from '../layouts/img/Outer_space.svg'

export default class AuthForm extends Component {
		state = {
			class: "container",
			errors: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				general: null
			},
			userId: null,
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}

		createNewUser = (event) => {
			event.preventDefault()
			if (!this.checkName(this.state.firstName)) {
				this.setState({
					errors: {
						firstName: 'Ім’я від 3ох символів'
					}
				})
			} else if (!this.checkName(this.state.lastName)) {
				this.setState({
					errors: {
						lastName: 'Прізвище від 3ох символів'
					}
				})
			} else if (!this.checkEmail(this.state.email)) {
				this.setState({
					errors: {
						email: 'Email – повинен містити: мінімум 3 символи, собачку,\n мінімум 2 символи, крапку та мінімум 2 символи'
					}
				})
			} else if (!this.checkPassword(this.state.password)) {
				this.setState({
					errors: {
						password: 'Пароль – мінімум 8 символів, містить велику і маленьку літеру (лат.)'
					}
				})
			} else {
				this.setState({
					errors: {
						general: false
					}
				})
			}
			localStorage.setItem(`${this.state.email}`,JSON.stringify({
				firstname: `${this.state.firstName}`,
				lastName: `${this.state.lastName}`,
				email: `${this.state.email}`,
				password: `${this.state.password}`
			}))
		}
		isEmpty = string => string.trim() === '' ? true : false

		checkPassword = () => {
			const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm
			if (this.state.password.match(regExp)) return true
			else return false
		}
		checkEmail = (email) => {
			const regExp = /^(?=.*[a-z])(?=.*@.)(?=.*[a-zA-Z]).{8,16}$/gm
			if (email.match(regExp)) return true
			else return false
		}
		checkName = (name) => {
			const regExp = /^(?=.*[a-zA-Z]).{3,16}$/gm
			if (name.match(regExp)) return true
			else return false
		}
		checkCredentials = (event) => {
			event.preventDefault()
			const data = JSON.parse(localStorage.getItem(`${this.state.email}`))
			if(this.state.email !== data.email || this.state.password !== data.password) {
				this.setState({
					errors: {
						general: true
					}
				})
			} else {
				this.setState({
					errors: {
						general: false
					},
					firstName: data.firstname
				})
			}
		}
	render() {
		return(
			<Authform inputColor={Object.values(this.state.errors).some(item=> item === '' || item === true) ? 'red' : 'green'}>
				<div className={this.state.class}>
					<div className="forms-container">
						<div className="signin-signup">
							<form action="#" className="sign-in-form" onSubmit={(event) => {
								console.log(this.state.email)
								if (this.isEmpty(this.state.email) || this.isEmpty(this.state.password)) {
									this.setState({
										errors: {
											general: true
										}
									})
								} else {
									console.log(this.state.email)
									this.checkCredentials(event)
								}
							}}>
								<h2 className="title">Sign in</h2>
								{(this.state.errors.general && this.state.errors.general !== null) && <span style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{"Перевірте правильність введених даних"}</span>}
								{(!this.state.errors.general && this.state.errors.general !== null && this.state.errors.general !== undefined) && <span style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{`Привіт, ${this.state.firstName}, ви успішно увійшли в систему`}</span>}
								<div className="input-field">
									<i className="fas fa-envelope"></i>
									<input type="email" placeholder="Email" 
										onChange={e => this.setState({
											email: e.target.value
										})} />
								</div>
								<div className="input-field">
									<i className="fas fa-lock"></i>
									<input type="password" placeholder="Password" 
										onChange={e => this.setState({
											password: e.target.value
										})} />
								</div>
								<input type="submit" value="Login" className="btn solid" />
								<p className="social-text">or Sign in with social platforms</p>
								<div className="social-media">
									<a href="#" className="social-icon">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="#" className="social-icon">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#" className="social-icon">
										<i className="fab fa-google"></i>
									</a>
									<a href="#" className="social-icon">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
							</form>
							<form action="#" className="sign-up-form" onSubmit={(event)=> {
								if (this.isEmpty(this.state.firstName) || this.isEmpty(this.state.lastName)
								|| this.isEmpty(this.state.email) || this.isEmpty(this.state.password)) {
									this.setState({
										errors: {
											general: true
										}
									})
								} else {
									this.createNewUser(event)}}}>
								<h2 className="title">Sign up</h2>
								{(this.state.errors.general && this.state.errors.general !== null) && <span style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{"Усі поля є обов’язковими"}</span>}
								{(!this.state.errors.general && this.state.errors.general !== null && this.state.errors.general !== undefined) &&	<span style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{"Ви успішно створили акк"}</span>}
								<div className="input-field">
									<i className="fas fa-user"></i>
									<input type="text" placeholder="FirstName" 
										onChange={e => {
											this.checkName(e.target.value)
											this.setState({
											firstName: e.target.value
											})}}/>
								</div>
								{this.state.errors.firstName !== null && <span style={{ color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{this.state.errors.firstName}</span>}
								<div className="input-field">
									<i className="fas fa-user"></i>
									<input type="text" placeholder="LastName" 
										onChange={e => {
											this.checkName(e.target.value)
											this.setState({
											lastName: e.target.value
											})}}/>
								</div>
								{this.state.errors.lastName !== null && <span style={{ color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{this.state.errors.lastName}</span>}
								<div className="input-field">
									<i className="fas fa-envelope"></i>
									<input type="text" placeholder="Email" 
										onChange={e => {
											this.checkEmail(e.target.value)
											this.setState({
											email: e.target.value
										})}}/>
								</div>
								{this.state.errors.email !== null && <span style={{ color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{this.state.errors.email}</span>}
								<div className="input-field">
									<i className="fas fa-lock"></i>
									<input type="password" placeholder="Password" 
										onChange={e => {
											this.checkPassword(e.target.value)
											this.setState({
											password: e.target.value
										})}}/>
								</div>
								{this.state.errors.password !== null && <span style={{ color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{this.state.errors.password}</span>}
								<input type="submit" value="Sign up" className="btn solid" />
								<p className="social-text">or Sign up with social platforms</p>
								<div className="social-media">
									<a href="#" className="social-icon">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="#" className="social-icon">
										<i className="fab fa-twitter"></i>
									</a>
									<a href="#" className="social-icon">
										<i className="fab fa-google"></i>
									</a>
									<a href="#" className="social-icon">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
							</form>
						</div>
					</div>
					<div className="panels-container">
						<div className="panel left-panel">
							<div className="content">
								<h3>New here?</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								laboriosam ad deleniti.</p>
								<button className="btn transparent" onClick={()=>this.setState({
									class: "container sign-up-mode"
								})}>Sign up</button>
							</div>
							<img src={signUpIMG} className="image" alt="ico"/>
						</div>
						<div className="panel right-panel">
							<div className="content">
								<h3>One of us?</h3>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								laboriosam ad deleniti.</p>
								<button className="btn transparent" onClick={()=>this.setState({
									class: "container"
								})}>Sign in</button>
							</div>
							<img src={signInIMG} className="image" alt="ico"/>
						</div>
					</div>
				</div>
			</Authform>
		)
	}
}

