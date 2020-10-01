import styled from 'styled-components'

export const CardContainer = styled.div`
section {
	display: inline-grid;
	justify-content: center;
	align-items: center;
	position: relative;
	max-width: 323px;
	max-height: 175px;
	padding: 1em;
	background: rgba(255, 255, 255, .2);
	box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
	margin: 2rem;
	border-radius: 3%;
	grid-template-areas:        
		"a b";
	justify-items: center;
  align-items: end;
}
.img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 1px solid var(--main-color);
	padding: 2px;
	margin-right: 1rem;
	grid-area: a;
}
div {
	grid-area: b;
	text-align: end;
}
h2 {
		font-size: 1em;
		color: var(--second-color);
	}
p {
		margin: 0;
		padding: 0;
		font-size: .6em;
		color: var(--main-color);
	}
`