const initialState = [{
	photo: 'https://media.istockphoto.com/photos/athletic-woman-climbing-on-overhanging-cliff-rock-with-sunset-sky-picture-id1179235120?b=1&k=6&m=1179235120&s=170667a&w=0&h=iAYMqHAz100Q-FQUMM2ocEYUbKuYjbcC5rOBQtP01wk=',
	avatar: 'https://cdn.pixabay.com/photo/2020/08/29/08/31/woman-5526483__340.jpg',
	name: 'Kapov',
	nickname: 'Karpov',
	date: '2020-08-13',
	comments: 1123,
	shares: 2845,
	likes: 3432,
	content: `А потім глухо загуде гудок парокотельні — й світ тобі розвидніє,\n
	як озоветься наш городній бог своїм ласкавим і гірким “добриднем”.`
},{
	photo: 'https://media.istockphoto.com/photos/boy-and-dog-in-toy-racing-car-picture-id1162019476?b=1&k=6&m=1162019476&s=170667a&w=0&h=Pxe_BE6SJUftlzvP4f_zUobKwbeCqelpyYwDYJBh9b4=',
	name: 'Kisov',
	avatar: 'https://cdn.pixabay.com/photo/2020/05/24/10/36/child-5213589__340.jpg',
	nickname: 'Kisa',
	date: '2020-04-27',
	comments: 23,
	shares: 447,
	likes: 132,
	content: `Вдасться чи ні сього разу повернутись додому? Вдасться чи ні?\n
	Cтарий терикон шахти 10-біс, де ти в дитинстві збирав вугілля, обріс чотирма новими.\n
	I де з них твій давній — не збагнеш. Вулицею здибають тебе незнайомі люди.\n`
},{
	photo: 'https://cdn.pixabay.com/photo/2020/04/16/11/41/waterfall-5050298__340.jpg',
	avatar: 'https://cdn.pixabay.com/photo/2020/06/30/09/22/boy-5355710__340.jpg',
	name: 'Vasyl',
	nickname: 'Vasya',
	date: '2020-05-01',
	comments: 123,
	shares: 845,
	likes: 432,
	content: `Мов жертва щиростi — життя, мов молодечих крил пружнавий трiск, як небуттям\n
	укрився суходiл. Ти ще на кiнчику пера возносишся увись. а вже пора? Давно пора. Спадаючи, молись.\n
	Як жертва щиростi, як кат оговтаних бажань, переминай за гранню грань, чекаючи розплат — за те, що марнував свiй вiк,\n`
}]

export default function (state=initialState, action) {
	switch (action.type) {
		case 'LIKES':
			let likes = state.findIndex(
				item => item.name === action.payload)
			state[likes].likes++
			return [...state]
		case 'NOT_LIKES':
			let likesnot = state.findIndex(
				item => item.name === action.payload)
			state[likesnot].likes--
			return [...state]
		case 'SHARES':
			let shares = state.findIndex(
				item => item.name === action.payload)
			state[shares].shares++
			return [...state]
		case 'NOT_SHARES':
			let sharesnot = state.findIndex(
				item => item.name === action.payload)
			state[sharesnot].shares--
			return [...state]
		case 'COMMENTS':
			let comments = state.findIndex(
				item => item.name === action.payload)
			state[comments].comments++
			return [...state]
		case 'NOT_COMMENTS':
			let	commentsnot = state.findIndex(
				item => item.name === action.payload)
			state[commentsnot].comments--		
			return [...state]
		case 'ADD_POST':	
		console.log('action.payload: ', action.payload);
			return [...state,action.payload]
		default:	return state
	}
} 