import React from 'react'
import styled from 'styled-components'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

export const Post = ({ author, content, image, date }) => {
	
	const Container = styled.div`
		.div {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			border-color: transparent;
			transition: all 1s linear;
			cursor: pointer;
		}
		.card {
			background-color: #211f2f;
			max-width: 1200px;
    	width: 91%;
			display: block;
		}
		.head {
			display: inline-flex;
			align-items: center;
			margin-left: 2rem;
    	margin-top: .7rem; 
			height:10vh;
		}
		.arrow {
    	color: grey;
			margin-bottom: 2.5rem;
    	margin-left: 27rem;
		}
		.main {
			display: grid;
			grid-template-rows: 35px 35px;
			padding: 1rem;
    	grid-gap: 1.5rem;
    	padding-left: 1rem;
		},
		.content {
			display: inline-flex;
			align-items: center;
			color: white;
			padding-top: 1.5rem;
			width: 100%;
			& span {
				color:grey;
			}
		}
		.text {
			display: flex;
		}
		.image {
			width: 70px;
			height: 70px;
			border-radius: 60px;
		}
		section {
			display: inline-flex;
			align-items: center;
			width: 961px;
    	height: 405px;
			background-image: url(${image});
			border-radius: 20px;
			margin-left: 7rem;
		}
		.others {
			display: flex;
			justify-content: space-around;
			color: rgb(108 117 140);
			.icons {
				display: inline-flex;
				align-items: center;
			}
		}
	`
	return (
		<Container>
			<div className="div">
				<div className="card">
					<div className="head">
						<img alt="avatar" src={author.photo} className="image" />
							<div className="main">
								<div className="content">
									<h2 style={{paddingTop: '.5rem'}}>{author.name}</h2>
								<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="24px" height="24px" style={{ margin: '.5rem .5rem 0' }}><g><rect fill="none" height="24" width="24" /></g><g><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" /></g></svg>
									<span style={{ fontSize: 'large',paddingTop: '.5rem'}}>{author.nickname} · {date}</span>
								</div>
								<div className="text">
									<h2 style={{ color: "white", fontSize: '1.2rem', fontWeight: 'normal'}}>{content}</h2>
								</div>
							</div>
						<KeyboardArrowDownIcon className="arrow"/>
					</div>
					<section></section>
					<div className="others">
						<div className="icons">
							<ChatBubbleOutlineOutlinedIcon />
							<h3 style={{marginLeft: '1rem'}}>482</h3>
						</div>
						<div className="icons">
							<ShareOutlinedIcon />
							<h3 style={{marginLeft: '1rem'}}>146</h3>
						</div>
						<div className="icons">
							<FavoriteBorderOutlinedIcon />
							<h3 style={{marginLeft: '1rem'}}>887</h3>
						</div>
						<div className="icons">
							<CloudUploadOutlinedIcon />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
