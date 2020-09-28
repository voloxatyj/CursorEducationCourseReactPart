import React, { Component } from 'react'
import { Contract } from './Contract.js'
import { contacts } from '../layouts/contacts.js'
import styled from 'styled-components'

export default class Contracts extends Component {
	state = {
		items: contacts
	}
	findGender = (event) => {
		this.setState({
			items: contacts
		})
		switch (event.target.value) {
				case "male":
				this.setState({
					items: this.state.items.filter(item => item.gender === "male")
				})
				break;
				case "female":
				this.setState({
					items: this.state.items.filter(item => item.gender === "female")
				})
				break;
				case "male&&female":
				this.setState({
					items: this.state.items.filter(item => item.gender !== undefined)
				})
				break;
				case "unknown":
					this.setState({
						items: [this.state.items[2]]
					})
				break;
				default:
					break;
		}
	}

	findContact = (event) => {
		let val = event.target.value
		if (val === '' ) {
			this.setState({
				items: contacts
			})
		} else if (val.startsWith('+')){
			this.setState({
				items: this.state.items.filter(item => item.phone.includes(val))
			})
		} else if (val.startsWith('f') || val.startsWith('m')){

			this.setState({
				items: this.state.items.filter(item => {
					if(item.gender !== undefined) {
						return item.gender.startsWith(val) 
					}
				})
			})
		}	else {
			this.setState({
				items: this.state.items.filter(item => item.lastName.toLowerCase().includes(val.toLowerCase()) || item.firstName.toLowerCase().includes(val.toLowerCase()))
			})
		}
	}
	render(){
		return (
			<Container className="mt-5 p-5 mb-4">
        <h3 className="text-center">Contacts</h3>
				<div className="context">
					<form>
						<div className="form-column align-items-center p-5">
							<div className="col-auto">
								<label className="sr-only" htmlFor="inlineFormInput">Name</label>
								<input onChange={event=>this.findContact(event)} type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Anonimus" />
							</div>
							<select className="custom-select" onChange={event => this.findGender(event)}>
								<option value>Select gender</option>
								<option value="male">male</option>
								<option value="female">female</option>
								<option value="male&&female">male&&female</option>
								<option value="unknown">unknown</option>
							</select>
						</div>
					</form>
					<div className="row">  
						{this.state.items.map(item => (       
							<Contract  key={item.phone} item={item} />
						))}
					</div>
				</div>
      </Container>
		)
	}
}

const Container = styled.div`
	form {
		display: flex;
		justify-content: flex-end;
	}
`