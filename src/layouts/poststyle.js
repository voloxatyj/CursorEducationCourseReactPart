import styled from 'styled-components'

export const Container = styled.div`
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
			background-image: ${props => `url(${props.image})`};
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