import styled from 'styled-components'

export const PostReduxContainer = styled.div`
.container {
	display: inline-grid;
	justify-content: center;
  min-width: 100vw;
	margin: 1rem;
	min-height: 40vh;
	grid-auto-columns: 1fr;
  justify-items: center;
}
.main {
	display: inline-grid;
}
.head {
	display: inline-flex;
	align-items: center;
	max-width: 90%;
}
.content {
	display: inline-flex;
	align-itens: center;
	color: darkblue;
	align-items: center;
	justify-items: flex-start;
}
.card {
	background: center no-repeat ${props => `url(${props.image})`};
	border: 1px solid #3f51b5;
  max-width: 65vw;
	border-radius: 50px;
	padding: 2rem;
	display: inline-grid;
	align-content: space-between;
	max-width: 600px;
  min-width: 500px;
}
.image {
	width: 100px;
  height: 100px;
	border: 1px solid #3f51b5;
	padding: .1rem;
	border-radius: 60px;
	margin-left: .5rem;
}
.icons {
	color: whitesmoke;
	display: inline-flex;
}
.others {
	display: flex;
	justify-content: space-around;
}
`