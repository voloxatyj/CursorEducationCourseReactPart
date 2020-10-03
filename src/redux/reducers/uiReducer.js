const initialState = {
	modal: false
}

export default function (state=initialState, action) {
	switch (action.type) {
		case 'GET_MODAL':
			return {
				...state,
				modal: true
			}
		case 'CLOSE_MODAL':
			return {
				...state,
				modal: false
			}
		default: return state
	}
}