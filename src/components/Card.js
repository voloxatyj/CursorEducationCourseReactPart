import React from 'react'
import { CardContainer } from '../layouts/cardstyle'
import moment from 'moment'

export const Card = ({props}) => {

	return (
		<div style={{display:"flex", justifyContent: "flex-end", width: "100vw", padding: "3rem"}}>
			<CardContainer>
				{ props.load &&
					<section className="animate__animated animate__backInUp">
						<img className="img" src={props.img} alt="avatar" />
						<div>
							<h2><strong>{props.fullName}</strong></h2>
							<p><strong>Email:</strong> {props.email}</p>
							<p><strong>Repo:</strong> {props.repo}</p>
							<p><strong>Joined:</strong> {moment(props.date).fromNow()}</p>
						</div>
					</section>}
			</CardContainer>
		</div>
	)
}

